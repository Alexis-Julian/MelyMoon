// interface User

import { comparePassword, hashPassword } from "@/libs/bcrypt";
import { createToken } from "@/libs/jwt";
import { conn } from "@/libs/mysql";
import { User } from "@/shared/types";
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

	async createUser(user: any): Promise<string | Error> {
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

		return tk;
	}

	updateUser() {}

	removeUser() {}

	async getUser(user: any) {
		const { email, password } = user;

		if (!(email && password)) throw new Error("Invalid fields");

		const response: Array<User> | undefined = await conn.query(
			"SELECT * FROM USERS WHERE email_address = ?",
			[email]
		);

		if (!response) throw new Error("User not exist");

		const { email_address, username, password_account } = response[0];

		const isCorrectPassword = await comparePassword(password, password_account);

		if (!isCorrectPassword) throw new Error("Password not correct");

		const tk = await createToken({ email_address, username }, "1d");

		return tk;
	}

	findByIdUser() {}
}

export default AuthServices.getInstance();
