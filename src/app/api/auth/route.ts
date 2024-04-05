import { NextResponse } from "next/server";
import { conn } from "@/libs/mysql";
import { hashPassword } from "@/libs/bcrypt";
import authService from "@/services/auth.service";

/* export async function GET(req: Request) {
	// const { message, emails, date } = await req.json();
	const result = await conn.query("SELECT * FROM USERNAME");

	console.log(result);
	return NextResponse.json({ name: "1" });
} */

export async function POST(req: Request) {
	const data = await req.json();
	try {
		const response = await authService.createUser(data);

		return NextResponse.json({ token: response });
	} catch (err: any) {
		return NextResponse.json({
			message: err.message,
			statusCode: 404,
		});
	}
}

export async function PUT(req: Request) {}

export async function DELETE(req: Request) {}
