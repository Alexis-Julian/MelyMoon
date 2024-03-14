import SvgFrame from "@/components/SvgFrame";

export default function Workshop() {
	return (
		<main className="bg-gradient-to-b from-[#eea5a6] to-[#ffd0ec]  h-full w-full flex  gap-4">
			<div className="size-96 ">
				<SvgFrame />
			</div>
			<div className="size-96">
				<SvgFrame />
			</div>
			<div className="size-96">
				<SvgFrame />
			</div>
			<div className="size-96">
				<SvgFrame />
			</div>
		</main>
	);
}
