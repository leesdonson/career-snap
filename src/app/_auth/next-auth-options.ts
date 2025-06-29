import { NextAuthOptions } from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { prisma } from "@/lib/db";
import { PrismaAdapter } from "@auth/prisma-adapter";
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    Credentials({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Enter your email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter your password",
        },
      },
      async authorize(credentials) {
        // Add logic here to look up the user from the credentials supplied
        if (!credentials?.email || !credentials.password) {
          throw new Error("Invalid credentials");
        }
        // Check if the user exist, login
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        //if user do exist, login the user
        if (user) {
          const matchedPassword = await bcrypt.compare(
            credentials.password,
            user?.password!
          );
          if (matchedPassword) {
            return user;
          } else {
            return null;
          }
        }
        // else create new user

        if (!user) {
          const salt = await bcrypt.genSalt(10);
          const hashedPassword = await bcrypt.hash(credentials.password, salt);
          const newUser = await prisma.user.create({
            data: {
              email: credentials.email,
              password: hashedPassword,
            },
          });

          if (!newUser) {
            throw new Error("Failed to create new user.");
          }

          const { password, ...rest } = newUser;
          return rest;
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/auth/sign-in",
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 24 * 30,
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          id: user.id,
        };
      }
      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
        },
      };
    },
  },
};
