import GlobalWorkshop from "@/components/GlobalWorkshop";
import SvgFrame from "@/components/SvgFrame";

export default function Workshop() {
	return (
		<main className="bg-gradient-to-b from-[#eea5a6] to-[#ffd0ec]  h-full w-full flex flex-col ">
			<header className="h-[10%] w-full ">1</header>
			<div className="flex w-full h-[90%]">
				<GlobalWorkshop />
			</div>
		</main>
	);
}
