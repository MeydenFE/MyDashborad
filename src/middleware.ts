import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const isLoggedIn =
    request.cookies.has("next-auth.session-token") ||
    request.cookies.has("__Secure-next-auth.session-token");

  // ログインしていなければ login にリダイレクト
  if (!isLoggedIn && !request.nextUrl.pathname.startsWith("/login")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
      例：すべてのページに認証をかける（ログイン除く）
    */
    // "/((?!login|api|_next/static|_next/image|favicon.ico).*)",
  ],
};
