import { NextResponse } from "next/server";
import authService from "@/services/auth.service";

export async function POST(req: Request) {
	const data = await req.json();
	try {
		const response = await authService.createUser(data);
		return NextResponse.json({ token: response, statusCode: 201 });
	} catch (err: any) {
		return NextResponse.json({
			message: err.message,
			statusCode: 404,
		});
	}
}
