"use client";
import Image from "next/image";
import StyledTypography from "./StyledTypography";
import StyledInput from "./StyledInput";
import SvgButton from "./SvgButton";
import { FormEvent } from "react";

export default function FormLogin() {
	function handleSubmitForm(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const emailInput = (e.target as HTMLFormElement)[
			"email"
		] as HTMLInputElement;

		const passwordInput = (e.target as HTMLFormElement)[
			"password"
		] as HTMLInputElement;

		const emailValue = emailInput.value;
		const passwordValue = passwordInput.value;
	}

	return (
		<form
			className="h-full w-full grid  grid-rows-3 grid-cols-1 gap-4  mt-5 justify-center  "
			onSubmit={handleSubmitForm}
		>
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
				<div className="relative w-full h-full  flex items-center justify-center   p-4 ">
					<button className="button-login text-lg relative    font-extrabold  h-full w-full z-50">
						<SvgButton />
						INGRESAR
					</button>
				</div>
			</div>
		</form>
	);
}
