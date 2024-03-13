import FormRegister from "@/components/FormRegister";
import StyledTypography from "@/components/StyledTypography";

export default function Register() {
	return (
		<main className=" h-full w-full flex items-center justify-center bg-gradient-to-b from-[#eea5a6] to-[#ffd0ec]  ">
			<div className="size-[80%] relative">
				<div className="size-[300px]  absolute border-t-2 border-l-2 border-tertiary"></div>
				<FormRegister />

				<div className="absolute top-0 blur-md bg-white/15 z-30 h-full w-full  bg-whiteblur-md border-2 border-pink-500  "></div>
				<div className="size-[300px]  absolute  right-0 bottom-0 border-r-2 border-b-2 border-tertiary"></div>
			</div>
		</main>
	);
}
