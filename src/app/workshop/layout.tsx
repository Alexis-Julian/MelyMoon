import GlobalComponents from "@/components/GlobalComponents";
import { AppWrapper } from "@/context";
export default function WorkshopLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<AppWrapper>
			<div className="h-full w-full overflow-hidden">
				<GlobalComponents />
				<div className="h-[90%] overflow-hidden">{children}</div>
			</div>
		</AppWrapper>
	);
}
