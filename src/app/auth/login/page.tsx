import FormLogin from "@/components/FormLogin";
import SvgFoot from "@/components/SvgFoot";
import Image from "next/image";
export default function Login() {
	function LogoLogin() {
		return (
			<div className="loader size-[180px] p-1 relative   flex items-center border-4 border-white rounded-full  justify-center  ">
				<div className="absolute size-[105%] shadow-icon rounded-full -z-10"></div>
				<div className="absolute size-[100%] shadow-icon-inset rounded-full -z-10"></div>

				<Image
					src={"/svg/cat_icon.svg"}
					height={180}
					width={180}
					alt=""
					className=" rounded-full aspect-square  "
				/>
			</div>
		);
	}

	return (
		<main className="relative  h-full w-full  flex items-center justify-center  ">
			<div className=" bg-[url('/svg/background-main.svg')] absolute h-full w-full blur-sm"></div>
			<div className="h-[800px] w-[500px] bg-gradient-to-r from-[#eea5a6] to-[#ffd0ec] z-50 rounded-md relative overflow-hidden">
				<div className="absolute -translate-y-[50%] -translate-x-[25%]">
					<SvgFoot className={"  -z-50   "} />
				</div>

				<div className="flex flex-col justify-center h-full w-[60%] mx-auto gap-5">
					<header className=" w-full   flex items-center justify-center  ">
						<LogoLogin />
					</header>
					<main>
						<FormLogin />
					</main>
					<footer className="flex flex-col items-center justify-center  ">
						<div className="w-full flex justify-center items-start">
							<Image
								src={"/image/bg-cats.png"}
								height={80}
								width={120}
								alt=""
							/>
						</div>
					</footer>
				</div>
				<div className="absolute bottom-0 rotate-180 right-0 translate-y-[55%] translate-x-[20%]">
					<SvgFoot className={"  -z-50   "} />
				</div>
			</div>

			<div className="absolute h-full w-full bg-black/20  "></div>
		</main>
	);
}
