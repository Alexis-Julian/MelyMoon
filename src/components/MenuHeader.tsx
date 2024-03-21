import StyledTypography from "./StyledTypography";

export default function ChatHeader({ children }: { children: any }) {
	return (
		<header className="h-[10%] min-h-[82px] max-h-[82px] bg-primary/20  rounded-t-lg flex items-center justify-center  shadow-md shadow-primary/50">
			<StyledTypography variant="h3">{children}</StyledTypography>
		</header>
	);
}
