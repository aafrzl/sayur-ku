import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  async function middleware(req) {
    if (req.nextUrl.pathname === "/dashboard" && !req.nextauth.token?.isAdmin) {
      return NextResponse.redirect(new URL("/", req.nextUrl));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/account",
    "/checkout",
    "/history",
  ],
};
