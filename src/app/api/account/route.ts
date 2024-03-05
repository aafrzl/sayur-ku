import { authOptions } from "@/lib/auth";
import prisma from "@/lib/db";
import { updateProfileAddressSchema } from "@/schema/update-user-schema";
import { User } from "@prisma/client";
import bycrypt from "bcrypt";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const session = await getServerSession(authOptions);

  try {
    if (!session)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const user = await prisma.user.findUnique({
      where: {
        id: session?.user.id,
      },
      select: {
        name: true,
        email: true,
        image: true,
      },
    });

    if (!user)
      return NextResponse.json({ error: "User not found" }, { status: 404 });

    return NextResponse.json({
      user,
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

export async function PATCH(req: Request) {
  const session = await getServerSession(authOptions);
  const body = await req.json();

  const { name, password, image } = body;

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
      image,
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
    return NextResponse.json(
      {
        error: "Telah terjadi kesalahan. Silahkan coba lagi nanti.",
      },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      namaPenerima,
      telepon,
      alamat,
      kota,
      provinsi,
      kecamatan,
      kelurahan,
    } = body;

    const session = await getServerSession(authOptions);

    if (!session)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const validation = updateProfileAddressSchema.safeParse(body);

    if (!validation.success)
      return NextResponse.json(validation.error.format(), { status: 400 });

    const address = await prisma.shippingAddress.create({
      data: {
        namaPenerima,
        telepon,
        alamat,
        kota,
        provinsi,
        kecamatan,
        kelurahan,
        user: {
          connect: {
            id: session.user.id,
          },
        },
      },
    });

    return NextResponse.json({
      message: "User updated",
      address,
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
