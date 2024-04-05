import authService from "@/services/auth.service";
import { NextResponse } from "next/server";
export async function POST(req: Request) {
	try {
		const user = await req.json();
		const response = await authService.getUser(user);
		return NextResponse.json({
			token: response,
			statusCode: 202,
		});
	} catch (err: any) {
		return NextResponse.json({
			message: err.message,
			statusCode: 404,
		});
	}
}
