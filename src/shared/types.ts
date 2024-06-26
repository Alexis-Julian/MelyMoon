export type TypographyClassVariantTypes =
	| "h2"
	| "h3"
	| "body"
	| "medium"
	| "small"
	| "big"
	| "biggeer_dancing"
	| "bigger";

export type InputTypes = "text" | "email" | "password";

export type setStateType<T> = React.Dispatch<React.SetStateAction<T>>;

export type Menu_info_list = {
	name: string;
	components: React.ReactNode;
};

export type User = {
	email_address: string;
	username: string;
	password_account: string;
};

export type ResponseAuth = {
	statusCode: number;
	token: string;
};
