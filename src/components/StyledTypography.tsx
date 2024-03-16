import "@fontsource-variable/dancing-script";

import { TypographyClassVariantTypes } from "@/shared/types";

export default function StyledTypography({
	children,
	variant,
	color,
	props,
	className,
}: {
	children: string;
	variant?: TypographyClassVariantTypes;
	color?: string;
	props?: any;
	className?: string;
}) {
	const variantClasses: { [key: string]: string } = {
		h2: "text-lg font-medium uppercase lg:text-2xl",
		h3: "text-2xl font-semibold uppercase",
		body: "text-xl",
		medium: "text-md",
		big: "text-6xl uppercase",
		biggeer_dancing: "text-7xl font-extralight font-dancing",
		bigger: "text-4xl sm:text-5xl md:text-7xl uppercase",
	};

	const colorClasses: { [key: string]: string } = {
		white: "text-white",
		black: "text-black",
		ancor: "hover:text-blue-500 cursor-pointer",
		primary: "text-accent",
		neutral: "text-neutral-300",
	};
	// console.log(className);
	const classes = [
		variantClasses[variant as keyof typeof variantClasses],
		colorClasses[color as keyof typeof colorClasses],
		className,
	].join(" ");

	return <p className={classes}>{children}</p>;
}
