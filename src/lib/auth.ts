import { PrismaAdapter } from "@next-auth/prisma-adapter";
import bcrypt from "bcrypt";
import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import prisma from "./db";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
    maxAge: 7 * 24 * 60 * 60,
  },
  pages: {
    signIn: "/sign-in",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      allowDangerousEmailAccountLinking: true,
    }),
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
    async signIn({ user, account, profile, email, credentials }) {
      const userData = await prisma.user.findFirst({
        where: {
          email: user.email,
        },
      });

      if (account?.provider === "google") {
        // check if user already exists in the database, if not, create a new user
        if (!userData) {
          await prisma.user.create({
            data: {
              email: user.email!,
              name: user.name!,
              image: user.image!,
            },
          });
        }
      }
      return true;
    },
    async session({ token, session }) {
      if (session?.user) {
        session.user.id = String(token.uid);
        session.user.isAdmin = Boolean(token.isAdmin);
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
