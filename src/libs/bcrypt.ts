import { compare, hash } from "bcrypt";
export function hashPassword(plainPassword: string): Promise<string | Error> {
	return new Promise((res, rej) => {
		hash(plainPassword, 10, (e, password) => {
			if (e) rej(e);
			res(password);
		});
	});
}

export async function comparePassword(
	plainPassword: string,
	hashPassword: string
): Promise<boolean | Error> {
	return new Promise((res, rej) => {
		compare(plainPassword, hashPassword, (e, password) => {
			if (e) rej(e);
			res(password);
		});
	});
}
