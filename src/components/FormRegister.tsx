"use client";
import Image from "next/image";
import StyledInput from "./StyledInput";
import StyledTypography from "./StyledTypography";
import SvgArrow from "./SvgArrow";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default function FormRegister() {
	const router = useRouter();

	function LogoLogin() {
		return (
			<div className="bg-none loader size-[180px] p-1 relative    flex items-center border-4 border-white rounded-full  justify-center  ">
				<div className="absolute size-[105%] shadow-icon rounded-full -z-10"></div>
				<div className="absolute size-[100%] shadow-icon-inset rounded-full -z-10"></div>

				<Image
					src={"/image/girl-waving.webp"}
					height={130}
					width={130}
					alt=""
					className="aspect-square  "
				/>
			</div>
		);
	}

	function handleNavigationToLogin(e: any) {
		e.preventDefault();
		return router.push("/auth/login");
	}
	// bg-[url('/image/bg-hands-cats.webp')] bg-[position:0%_50px]
	return (
		<form className="relative grid-register h-full w-full  rounded-md p-2 z-50">
			<header className="flex items-center justify-around ">
				<button
					className="h-[80px] w-[80px] "
					onClick={handleNavigationToLogin}
				>
					<SvgArrow />
				</button>
				<StyledTypography
					variant="biggeer_dancing"
					className="justify-self-end text-8xl"
				>
					Crea tu usuario
				</StyledTypography>
			</header>
			<div className="col-start-1 col-end-2 row-start-2 row-end-3  grid grid-cols-2 grid-rows-2 justify-center items-center [&>*:nth-child(n)]:mx-auto [&>*:nth-child(n)]:text-center   [&>*:nth-child(n)]:w-[80%] [&>*:nth-child(n)]:font-extrabold">
				<label htmlFor="">
					<StyledTypography variant="body">Mail</StyledTypography>
					<div className="bg-[url('/image/bg-hands-cats.webp')] bg-[position:0%_80px]">
						<StyledInput
							type="text"
							className=" shadow-inputs py-4 rounded-2xl bg-tertiary/90"
						/>
					</div>
				</label>
				<label htmlFor="">
					<StyledTypography variant="body">Nombre de usuario</StyledTypography>
					<div className="bg-[url('/image/bg-hands-cats.webp')] bg-[position:0%_80px]">
						<StyledInput
							type="text"
							className=" shadow-inputs py-4 rounded-2xl bg-tertiary/90"
						/>
					</div>
				</label>
				<label htmlFor="">
					<StyledTypography variant="body">Contraseña</StyledTypography>
					<div className="bg-[url('/image/bg-hands-cats.webp')] bg-[position:0%_80px]">
						<StyledInput
							type="text"
							className=" shadow-inputs py-4 rounded-2xl bg-tertiary/90"
						/>
					</div>
				</label>
				<label htmlFor="">
					<StyledTypography variant="body">
						Repita su contraseña
					</StyledTypography>
					<div className="bg-[url('/image/bg-hands-cats.webp')] bg-[position:0%_80px]">
						<StyledInput
							type="text"
							className=" shadow-inputs py-4 rounded-2xl bg-tertiary/90"
						/>
					</div>
				</label>
			</div>
			<div className="col-start-1 col-end-2 row-start-3 row-end-4 grid grid-cols-2 items-center place-items-center text-2xl font-extrabold">
				<button className="flecha shadow-inputs hover:scale-105 hover:translate-x-4 transition-all">
					Eliminar
				</button>
				<button className="flecha shadow-inputs hover:scale-105 hover:translate-x-4 transition-all">
					Guardar
				</button>
			</div>
			<div className="col-start-2 col-end-3 row-start-1 row-end-4 grid grid-rows-4 items-center place-items-center">
				<LogoLogin />
				<div>
					<StyledTypography>&nbsp;</StyledTypography>
					<button className=" p-4 px-6 shadow-inputs rounded-2xl text-xl font-bold mt-2 hover:scale-105 transition-all bg-tertiary">
						Cambiar foto de perfil
					</button>
				</div>
				<div className="">
					<StyledTypography>&nbsp;</StyledTypography>
					<button className="p-4 px-6 shadow-inputs   rounded-2xl text-xl font-bold mt-2 hover:scale-105 transition-all bg-tertiary">
						Cambiar foto de perfil
					</button>
				</div>
			</div>
		</form>
	);
}
