import { NextResponse } from "next/server";
import { userModel } from "../../../../models/user-model";
import { dbConnect } from "../../../../service/mongo";
import bcrypt from "bcryptjs";

export const POST = async (request) => {
  try {
    await dbConnect();

    const { name, phoneNo, email, password } = await request.json();

    // Check if user already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return new NextResponse("Email already exists", { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 5);

    const newUser = { name, phoneNo, email, password: hashedPassword };

    const createdUser = await userModel.create(newUser);
    

    return new NextResponse(JSON.stringify({ message: "User created" }), { status: 201 });
  } catch (err) {
    console.error("Registration error:", err);
    return new NextResponse(err.message, { status: 500 });
  }
};
