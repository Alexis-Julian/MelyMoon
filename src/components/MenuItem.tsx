import StyledTypography from "./StyledTypography";

export default function MenuItem({ children }: { children: string }) {
	return <StyledTypography variant="body">{children}</StyledTypography>;
}
