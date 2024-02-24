import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "./db";
import bcrypt from "bcrypt";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/sign-in",
  },
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials, req) => {
        const user = await prisma.user.findFirst({
          where: { email: credentials?.email },
        });

        if (
          credentials?.email === user?.email &&
          bcrypt.compareSync(credentials?.password!, user?.password!)
        ) {
          return Promise.resolve(user);
        }
        return Promise.resolve(null);
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ token, session }) {
      if (session?.user) {
        session.user.id = token.uid;
        session.user.isAdmin = token.isAdmin;
      }

      return session;
    },
    jwt: async ({ user, token }) => {
      const dbUser = await prisma.user.findUnique({
        where: {
          email: token.email!,
        },
      });

      if (user) {
        token.uid = user.id;
        token.isAdmin = Boolean(dbUser?.isAdmin);
      }

      return token;
    },
  },
};
