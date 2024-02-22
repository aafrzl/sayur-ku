import prisma from "@/lib/db";
import { Prisma, User } from "@prisma/client";
import bycrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const payload = await req.json();

    const { name, email, password } = payload;

    const data: Prisma.UserCreateInput = {
      name,
      email,
      password: bycrypt.hashSync(password, 10),
    };

    const user = await prisma.user.create({
      data,
    });

    const dataRes: Partial<User> = {
      ...user,
      password: undefined,
    };

    return NextResponse.json({
      message: "Sign up success",
      data: dataRes,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Telah terjadi kesalahan. Silahkan coba lagi nanti.",
      },
      { status: 500 }
    );
  }
}
