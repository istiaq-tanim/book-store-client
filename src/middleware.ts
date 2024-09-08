import { jwtDecode } from 'jwt-decode';
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const commonPrivateRoutes = ['/dashboard'];
const roleBasedPrivateRoutes = {
      USER: [/^\/dashboard\/user/],
      ADMIN: [/^\/dashboard\/admin/],
};

type roleType = keyof typeof roleBasedPrivateRoutes
export async function middleware(request: NextRequest) {
      const { pathname } = request.nextUrl;
      const accessToken = cookies().get("accessToken")?.value
      if (!accessToken) {
            return NextResponse.redirect(new URL('/login', request.url))
      }

      if (accessToken && commonPrivateRoutes.includes(pathname)) {
            return NextResponse.next()
      }

      let decodedData = null
      if (accessToken) {
            decodedData = await jwtDecode(accessToken) as any
      }
      const role = decodedData?.role

      if (role && roleBasedPrivateRoutes[role as roleType]) {
            const routes = roleBasedPrivateRoutes[role as roleType]
            if (routes.some(route => pathname.match(route))) {
                  return NextResponse.next()
            }
      }
      return NextResponse.redirect(new URL('/', request.url))

}

export const config = {
      matcher: ["/dashboard/:page*"],
};