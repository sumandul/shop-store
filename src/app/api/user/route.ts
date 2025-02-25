import { NextResponse } from "next/server";
import User from "@/model/user";
import connectToDatabase from "@/dbConnection/connect";
export async function POST(req: Request) {
  try {
    const user = await req.json();
    await connectToDatabase();
    // }
    const existingUser = await User.findOne({ email: user.email });

    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }

    // // Create a new user
    const newUser = new User({
      email: user.email,
      fullName: user.fullName,
    });

    // Save the new user
    await newUser.save();
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
