import { NextResponse } from "next/server";
import User from "@/model/user";
import connectToDatabase from "@/dbConnection/connect";
import { getToken } from "next-auth/jwt";
export async function GET(req: Request) {
  //   console.log(req);
  try {
    const token = await getToken();
    console.log(token);
    await connectToDatabase();
    // }
    // const existingUser = await User.findOne({ email: user.email });

    // if (existingUser) {
    //   return NextResponse.json(
    //     { message: "User already exists" },
    //     { status: 400 }
    //   );
    // }

    // // Create a new user

    // Return a successful response
    return NextResponse.json(
      { message: "Session saved successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error saving session:", error);
    return NextResponse.json(
      { error: "Failed to save session" },
      { status: 500 }
    );
  }
}
