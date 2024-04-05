// interface User

import { hashPassword } from "@/libs/bcrypt";
import { createToken } from "@/libs/jwt";
import { conn } from "@/libs/mysql";
import { vaildateEmail } from "@/util/auth.utils";

class AuthServices {
	private static instance: AuthServices | null = null;

	private constructor() {}

	public static getInstance(): AuthServices {
		if (!AuthServices.instance) {
			AuthServices.instance = new AuthServices();
		}
		return AuthServices.instance;
	}

	async createUser(user: any) {
		const { username, email, password } = user;

		if (!(username && email && password)) throw new Error("Invalid fields");

		const newEmail = await vaildateEmail(email);

		const passwordHash = await hashPassword(password);

		const response = await conn.query(
			"INSERT INTO USERS(username,email_address,password_account) VALUES(?,?,?)",
			[username, newEmail, passwordHash]
		);

		if (!response) throw new Error("Conection failed");

		const tk = await createToken({ email, username }, "1d");

		if (tk) return tk;
	}

	updateUser() {}

	removeUser() {}

	getUser() {}

	findByIdUser() {}
}

export default AuthServices.getInstance();
