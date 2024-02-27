import prisma from "@/lib/db";
import { createUserSchema } from "@/schema/register-schema";
import { Prisma, User } from "@prisma/client";
import bycrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const payload = await req.json();

    const { name, email, password } = payload;

    const validation = createUserSchema.safeParse(payload);

    if (!validation.success)
      return NextResponse.json(validation.error.errors, {
        status: 400,
      });

    const userExists = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (userExists) {
      return NextResponse.json(
        {
          error: "Email sudah terdaftar.",
        },
        { status: 400 }
      );
    }

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
      dataRes,
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
