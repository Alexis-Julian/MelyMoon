import { regularExpressionForEmail } from "@/shared/consts";

export function vaildateEmail(email: string): Promise<string | Error> {
	return new Promise((res, rej) => {
		if (!regularExpressionForEmail.test(email))
			rej(new Error("Invalid email address"));
		res(email);
	});
}
