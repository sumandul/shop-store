import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

// NextAuth options
export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
          scope: "openid email profile",
        },
      },
    }),
  ],
  // Inside NextAuth.js API route configuration
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        return {
          ...token,
          accessToken: account.access_token,
          refreshToken: account.refresh_token,
          expires_at: Date.now() + (account.expires_in || 3600) * 1000, // 1 hour expiry
        };
      }

      // Check if the access token has expired
      if (Date.now() < token.expires_at) {
        return token; // Token is still valid
      }

      // If expired, refresh the token
      return await refreshAccessToken(token);
    },

    async session({ session, token }) {
      session.accessToken = token.accessToken; // Make sure this is available
      session.refreshToken = token.refreshToken;
      session.user.image = token.picture;
      return session;
    },
  },
};
async function refreshAccessToken(token) {
  try {
    const response = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        client_id: process.env.GOOGLE_CLIENT_ID!,
        client_secret: process.env.GOOGLE_CLIENT_SECRET!,
        refresh_token: token.refreshToken,
        grant_type: "refresh_token",
      }),
    });

    const data = await response.json();
    if (!response.ok) throw data;

    return {
      ...token,
      accessToken: data.access_token,
      refreshToken: data.refresh_token ?? token.refreshToken, // Use new refresh token if provided
      expires_at: Date.now() + data.expires_in * 1000,
    };
  } catch (error) {
    console.error("Error refreshing token:", error);
    return { ...token, error: "RefreshAccessTokenError" };
  }
}

// async function refreshAccessToken(refreshToken: string) {
//   const googleClientId = process.env.GOOGLE_CLIENT_ID!;
//   const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET!;

//   // Make a request to Google's token endpoint
//   const body = new URLSearchParams();
//   body.append("client_id", googleClientId);
//   body.append("client_secret", googleClientSecret);
//   body.append("refresh_token", refreshToken);
//   body.append("grant_type", "refresh_token");

//   const response = await fetch("https://oauth2.googleapis.com/token", {
//     method: "POST",
//     body,
//     headers: { "Content-Type": "application/x-www-form-urlencoded" },
//   });

//   if (!response.ok) {
//     throw new Error("Failed to refresh access token");
//   }

//   const data = await response.json();

//   return {
//     accessToken: data.access_token,
//     refreshToken: data.refresh_token || refreshToken, // Use the new refresh token if provided
//     expires_in: data.expires_in, // New expiration time
//   };
// }
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
