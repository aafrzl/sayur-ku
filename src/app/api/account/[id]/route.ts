import { authOptions } from "@/lib/auth";
import { updateProfileAddressSchema } from "@/schema/update-user-schema";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);

  if (!session)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const address = await prisma.shippingAddress.delete({
      where: {
        id: params.id,
      },
    });

    if (!address)
      return NextResponse.json(
        { error: "Alamat tidak ditemukan" },
        { status: 404 }
      );

    return NextResponse.json({
      message: "address deleted",
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Telah terjadi kesalahan. Silahkan coba lagi nanti." },
      { status: 500 }
    );
  }
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);
  const body = await req.json();

  if (!session)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const validation = updateProfileAddressSchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(
      { error: validation.error.format() },
      { status: 400 }
    );

  try {
    const address = await prisma.shippingAddress.update({
      where: {
        id: params.id,
      },
      data: {
        ...body,
      },
    });

    if (!address)
      return NextResponse.json(
        { error: "Alamat tidak ditemukan" },
        { status: 404 }
      );

    return NextResponse.json({
      message: "address updated",
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
