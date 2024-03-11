"use client";
import Image from "next/image";
import StyledTypography from "./StyledTypography";
import StyledInput from "./StyledInput";

export default function FormLogin() {
	function handleSubmitForm() {}

	return (
		<form className="h-full w-full grid  grid-rows-3 grid-cols-1 gap-4  mt-5 justify-center  ">
			<div className=" w-full flex flex-col items-center justify-center rounded-md">
				<StyledTypography variant="body">Email</StyledTypography>
				<div className="w-full  bg-[url('/image/bg-hands-cats.webp')] bg-[position:0%_50px] my-2 rounded-md">
					<StyledInput
						type="email"
						className="bg-tertiary/90 font-extrabold "
						name="email"
					/>
				</div>
			</div>
			<div className="w-full flex flex-col items-center justify-center">
				<StyledTypography variant="body">Contraseña</StyledTypography>
				<div className="w-full  bg-[url('/image/bg-hands-cats.webp')] bg-[position:0%_50px] my-2 rounded-md">
					<StyledInput
						type="password"
						className="bg-tertiary/90"
						name="password"
					/>
				</div>
				<StyledTypography variant="medium" color="ancor">
					Olvide mi contraseña
				</StyledTypography>
			</div>
			<div className="h-full w-full flex items-center justify-center">
				<div className="relative  w-full h-full  p-4  flex items-center justify-center">
					<button className="text-lg font-extrabold h-[105%] w-[105%]  bg-[url('/svg/recurso.svg')]  rounded-md z-50">
						INGRESAR
					</button>
					{/* <div className="absolute   z-50 bg-center h-[80%] w-[80%]   top-0"></div> */}
				</div>
			</div>
		</form>
	);
}
