import "dotenv/config";

import jwt from "jsonwebtoken";
export function createToken(
	payload: Object,
	expire: string
): Promise<string | Error> {
	const TOKEN: string | undefined = process.env.TOKEN;

	if (!TOKEN) throw new Error("TOKEN is required");

	/* Expire : 1hs : 1h , 1day: 1d */
	return new Promise((resolve, reject) => {
		jwt.sign(payload, TOKEN, { expiresIn: expire }, (e, token) => {
			if (e) reject(e);
			if (token) {
				resolve(token);
			}
		});
	});
}
