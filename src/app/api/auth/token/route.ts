import { verifyToken } from "@/libs/jwt";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
	try {
		const authorizationHeader = request.headers.get("authorization");

		if (!authorizationHeader) return NextResponse.json({ statusCode: 401 });

		const token = authorizationHeader.split(" ")[1];

		const response = verifyToken(token);

		if (!response) return NextResponse.json({ statusCode: 404 });

		return NextResponse.json({ statusCode: 200, token: response });
	} catch (err) {
		return NextResponse.json({ statusCode: 404 });
	}
}
