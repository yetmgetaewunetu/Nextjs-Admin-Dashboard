import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import { dbConnection } from "./lib/utils";
import { User } from "./lib/models";
import bcrypt from "bcrypt";

// const login = async (credentials) => {};

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  session: "jwt",
  providers: [
    Credentials({
      async authorize(credentials, req) {
        try {
          const user = await User.findOne({ username: credentials.username });

          if (!user) throw new Error("invalid credentials!!!");

          const isPasswordCorrect = await bcrypt.compare(
            credentials.password,
            user.password
          );
          if (!isPasswordCorrect) throw new Error("invalid credentials");
          // console.log(user);
          return user;
        } catch (error) {
          console.log(error.message);
          // throw new Error("failed to login!");
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.username = user.username;
        token.img = user.img;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        (session.username = token.username), (session.img = token.img);
      }
      return session;
    },
  },
});
