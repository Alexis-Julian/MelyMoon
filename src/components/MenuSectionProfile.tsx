import { useEffect } from "react";
import StyledTypography from "./StyledTypography";
import ChatHeader from "./MenuHeader";
import Image from "next/image";

export default function MenuSectionProfile({
	setMenuActive,
}: {
	setMenuActive: any;
}) {
	useEffect(() => {
		setMenuActive(true);
	}, [setMenuActive]);
	return (
		<div className="size-full flex flex-col p-1 gap-4 justify-center">
			<ChatHeader>Perfil</ChatHeader> {/* INYECTAR EN EL COMPONENTE GLOBAL */}
			<div className="h-[90%] grid grid-cols-1 grid-rows-[1fr_0.6fr_1fr] gap-6 bg-white/20 p-2  rounded-lg shadow-md shadow-black/20">
				<div className="h-full flex flex-col  gap-4 ">
					<div className="bg-primary/30 rounded-lg p-1">
						<StyledTypography
							className="border-b-2 w-fit border-b-black"
							variant="body"
						>
							Informacion
						</StyledTypography>
					</div>
					<div className=" grid grid-cols-2 grid-rows-3  rounded-lg">
						<div className="col-start-1 col-end-2 row-start-1  row-end-4 flex  flex-col items-center justify-center gap-4">
							<div className="size-[140px] rounded-full border-2 border-tertiary bg-secondary/50 flex items-center justify-center">
								<Image
									src={"/image/girl-waving.webp"}
									height={100}
									width={100}
									className="aspect-square"
									alt=""
								/>
							</div>
							<button className="bg-primary/50 p-2 rounded-md shadow-md shadow-secondary/500 hover:bg-primary/80 transition-all">
								<StyledTypography variant="body">Cambiar foto</StyledTypography>
							</button>
						</div>
						<div className="col-start-2 col-end-3  row-start-1  row-end-4 grid grid-rows-3  grid-cols-1">
							<span>
								<StyledTypography
									className="border-b-2 w-fit border-b-black/50"
									variant="body"
								>
									Amigos
								</StyledTypography>
								<StyledTypography className="font-bold" variant="body">
									223
								</StyledTypography>
							</span>
							<span>
								<StyledTypography
									className="border-b-2 w-fit border-b-black/50"
									variant="body"
								>
									Seguidores
								</StyledTypography>
								<StyledTypography className="font-bold" variant="body">
									1043
								</StyledTypography>
							</span>
							<span>
								<StyledTypography
									className="border-b-2 w-fit border-b-black/50"
									variant="body"
								>
									Publicaciones
								</StyledTypography>
								<StyledTypography className="font-bold" variant="body">
									300
								</StyledTypography>
							</span>
						</div>
					</div>
				</div>

				<div className="h-full flex flex-col gap-4 justify-center">
					<div className="bg-primary/30 rounded-lg p-1">
						<StyledTypography
							className="border-b-2 w-fit border-b-black"
							variant="body"
						>
							Datos
						</StyledTypography>
					</div>
					<div className=" flex flex-col justify-center gap-4">
						<span className="flex gap-4">
							<StyledTypography
								className="border-b-2 w-fit border-b-black "
								variant="body"
							>
								Email :
							</StyledTypography>
							<StyledTypography className="normal-case" variant="h3">
								melaniperalta57@
							</StyledTypography>
						</span>
						<span className=" flex gap-2">
							<StyledTypography
								className="border-b-2 w-fit border-b-black"
								variant="body"
							>
								Usuario :
							</StyledTypography>
							<StyledTypography className="text normal-case" variant="h3">
								Mely
							</StyledTypography>
						</span>
					</div>
				</div>

				<div className="h-full flex flex-col gap-4 ">
					<div className="bg-primary/30 rounded-lg p-1">
						<StyledTypography
							className="border-b-2 w-fit border-b-black"
							variant="body"
						>
							Sobre mi
						</StyledTypography>
					</div>
					<div>
						<StyledTypography className="text-wrap" variant="body">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. At omnis
							facere incidunt ipsa porro praesentium, quia nulla. Impedit eaque
							quia blanditiis inventore, ratione odit. Dolor dolorum labore ipsa
							eum recusandae.
						</StyledTypography>
					</div>
				</div>
			</div>
		</div>
	);
}
