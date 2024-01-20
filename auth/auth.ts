import NextAuth from "next-auth";
import GitHub from "next-auth/providers/GitHub";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "@/database";

export const { handlers, auth } = NextAuth({
  providers: [GitHub],
  adapter: DrizzleAdapter(db),
  callbacks: {
    async session({ session, user }) {
      session.user.id = user.id;
      return session;
    },
  },
});
