import { authOptions } from "@/lib/auth";
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

  if (session.user.isAdmin === false)
    return NextResponse.json({ error: "Your not Admin" }, { status: 401 });

  try {
    const user = await prisma.user.findUnique({
      where: {
        id: params.id,
      },
    });

    if (!user)
      return NextResponse.json({ error: "User not found" }, { status: 404 });

    await prisma.user.delete({
      where: {
        id: params.id,
      },
    });

    return NextResponse.json({ message: "User deleted" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
