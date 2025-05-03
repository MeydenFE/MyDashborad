import NextAuth from "next-auth";
import { authOptions } from "@/src/lib/auth";

/** NextAuth RootHandler
 * 詳細設定はlib/auth.ts
 */
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
