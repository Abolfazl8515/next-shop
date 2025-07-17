import { NextResponse } from "next/server";
import middleWareAuth from "./utils/middleWereAuth";

export async function middleware(req) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/auth")) {
    const user = await middleWareAuth(req);
    if (user) return NextResponse.redirect(new URL(`/`, req.url));
  }

  if (pathname.startsWith("/profile")) {
    const user = await middleWareAuth(req);
    if (!user) return NextResponse.redirect(new URL(`/auth`, req.url));
  }
}

export const config = {
  matcher: ["/profile/:path*", "/auth"],
};
