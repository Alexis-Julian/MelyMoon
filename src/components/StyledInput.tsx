import { InputTypes } from "@/shared/types";

export default function StyledInput({
	variant,
	color,
	className,
	type,
	props,
	name,
	placeHolder,
}: {
	variant?: string;
	color?: string;
	className?: string;
	type: InputTypes;
	props?: any;
	name?: string;
	placeHolder?: string;
}) {
	const variantClasses: { [key: string]: string } = {
		default:
			"bg-tertiary  rounded-md p-2 w-full outline-white/5 font-extrabold",
	};

	const clasess = [variantClasses["default"], className].join(" ");
	return (
		<input
			className={clasess}
			type={type}
			placeholder={placeHolder ? placeHolder : ""}
			{...props}
			name={name}
		/>
	);
}
