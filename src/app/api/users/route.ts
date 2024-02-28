import { authOptions } from "@/lib/auth";
import prisma from "@/lib/db";
import { User } from "@prisma/client";
import bycrypt from "bcrypt";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

//TODO: Update user profile di database sesuai dengan url dari edgestore (Backendnya belum dibuat)

export async function PATCH(req: Request) {
  const session = await getServerSession(authOptions);
  const body = await req.json();

  const { name, password } = body;

  try {
    if (!session)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const user = await prisma.user.findUnique({
      where: {
        id: session?.user.id,
      },
    });

    if (!user)
      return NextResponse.json({ error: "User not found" }, { status: 404 });

    const data = {
      name,
      password: password ? bycrypt.hashSync(password, 10) : undefined,
    };

    const updatedUser = await prisma.user.update({
      where: {
        id: session.user.id,
      },
      data,
    });

    const dataRes: Partial<User> = {
      ...updatedUser,
      password: undefined,
    };

    return NextResponse.json({
      message: "User updated",
      dataRes,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        error: "Telah terjadi kesalahan. Silahkan coba lagi nanti.",
      },
      { status: 500 }
    );
  }
}