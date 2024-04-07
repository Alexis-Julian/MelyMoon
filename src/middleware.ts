import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { ENDPOINT } from "./shared/consts";
import { cookies } from "next/headers";

function getCookie(name: string): string | undefined {
	return cookies().get(name)?.value;
}

async function deleteCookie() {
	cookies().delete("token");
}

async function validateTokenInServer(cookieToken: string): Promise<boolean> {
	try {
		const response = await fetch(ENDPOINT + "api/auth/token", {
			headers: {
				Authorization: "Bearer " + cookieToken,
			},
			method: "GET",
		});

		const data = await response.json();

		if (data.statusCode == 200) {
			return true;
		} else {
			return false;
		}
	} catch (e: any) {
		console.log("Syntax error " + e.message);
		return false;
	}
}

function validateUrl(request: NextRequest, endpoint: string): boolean {
	return request.nextUrl.pathname.includes(endpoint);
}

async function validateToken(req: NextRequest) {
	const cookieToken = getCookie("token");
	if (cookieToken) {
		if (await validateTokenInServer(cookieToken)) {
			return NextResponse.next();
		} else {
			const response = NextResponse.redirect(new URL("/auth/login", req.url));
			response.cookies.delete("token");
			return response;
		}
	} else {
		return NextResponse.redirect(new URL("/auth/login", req.url));
	}
}

async function validateAuth(req: NextRequest) {
	const cookieToken = getCookie("token");

	if (cookieToken) {
		return NextResponse.redirect(new URL("/workshop", req.url));
	} else {
		return NextResponse.next();
	}
}

export default async function middleware(req: NextRequest) {
	if (validateUrl(req, "/login")) return validateAuth(req);

	if (validateUrl(req, "/register")) return validateAuth(req);

	if (validateUrl(req, "/workshop")) return validateToken(req);
}

export const config = {
	matcher: ["/workshop", "/auth/login", "/auth/register"],
};
