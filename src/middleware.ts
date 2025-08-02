import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default withAuth(function middleware(req: NextRequest) {
  const response = NextResponse.next();
  response.headers.delete("X-Powered-By");
  response.headers.set("X-content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-XSS-Protection", "1; mode=block");
  return response;
});

export const config = {
  matcher: ["/jobposts", "/users/:path*"],
};
