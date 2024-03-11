import fs from "fs";
import { NextResponse } from "next/server";
import { HashPassword } from "@/libs/bcrypt";
import { createToken } from "@/libs/jwt";
import AuthUser from "@/utils/AuthService";
import Auth from "@/app/auth/page";

const AuthenticatorUsers = new AuthUser();

export async function GET(req: Request) {
	// const { message, emails, date } = await req.json();
}

export async function POST(req: Request) {
	const { email, password, username } = await req.json();
	try {
		if (!email && !password && !username) throw "all the fields are required";

		const password_hash: string | any = await HashPassword(password);

		const response = await AuthenticatorUsers.createUser({
			email,
			password_hash,
			username,
		});

		if (response.statusCode == 404) throw response.message;

		const token = await createToken({ email, username }, "1d");

		return NextResponse.json({ token });
	} catch (err: any) {
		return NextResponse.json({
			message: err.message,
			statusCode: 404,
		});
	}
}

export async function PUT(req: Request) {}

export async function DELETE(req: Request) {}
