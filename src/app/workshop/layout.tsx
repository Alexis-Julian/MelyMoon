import GlobalComponents from "@/components/GlobalComponents";

export default function WorkshopLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="h-full w-full">
			<GlobalComponents />
			<div className="h-[90%]">{children}</div>
		</div>
	);
}
