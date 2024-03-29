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

export type List = {
	name: string;
	components: React.ReactNode;
};
