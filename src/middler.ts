// middleware.js
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export default async function middleware(req) {
  // Define the paths that should be protected
  const protectedPaths = ["/dashboard"];

  // Check if the request path is protected
  if (protectedPaths.includes(req.nextUrl.pathname)) {
    // Retrieve the user's session token
    const session = await getToken({ req });
    console.log("hello");

    // If no session exists, redirect to the login page
    if (!session) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  // Allow the request to proceed
  return NextResponse.next();
}
