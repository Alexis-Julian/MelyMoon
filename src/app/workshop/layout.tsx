import GlobalComponents from "@/components/GlobalComponents";

export default function WorkshopLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="h-full w-full overflow-hidden">
			<GlobalComponents />
			<div className="h-[90%] overflow-hidden">{children}</div>
		</div>
	);
}
