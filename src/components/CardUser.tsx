"use client";

import Image from "next/image";
import StyledTypography from "./StyledTypography";
import { useState } from "react";
import SvgVBorderChat from "./SvgBorderChat";
import StyledInput from "./StyledInput";

export default function CardUser({
	props,
	active,
	closeChat,
}: {
	props: any;
	active: boolean;
	closeChat: any;
}) {
	function viewChatBox() {
		/* 		const StylesMessage =
			"[&>*:nth-child(n)]:bg-white/50 [&>*:nth-child(n)]:w-fit [&>*:nth-child(n)]:p-2 [&>*:nth-child(n)]:pr-10 [&>*:nth-child(n)]:relative [&>*:nth-child(n)]:rounded-sm ";
 */
		const StylesMessage = [
			"[&>*:nth-child(n)]:bg-white/50",
			"[&>*:nth-child(n)]:w-fit",
			"[&>*:nth-child(n)]:p-2",
			"[&>*:nth-child(n)]:pr-10",
			"[&>*:nth-child(n)]:rounded-lg",
			"[&>*:nth-child(n)]:relative",
		].join(" ");

		function dateNow() {
			// Obtener la fecha y hora actual en milisegundos
			let milisegundos = Date.now();

			// Crear un objeto Date a partir de los milisegundos
			let fechaActual = new Date(milisegundos);

			let hora: number | string = fechaActual.getHours();
			let minutos: number | string = fechaActual.getMinutes();

			// Formatear la hora si es necesario (agregar ceros a la izquierda si la hora es menor a 10)
			if (hora < 10) {
				hora = "0" + hora;
			}
			if (minutos < 10) {
				minutos = "0" + minutos;
			}

			let horaActual = `${hora}:${minutos}`;

			return horaActual;
		}

		const messages = [
			{ user: "alexisjrojas", text: "hola" },
			{ user: "probando123", text: "como estas" },
			{ user: "alexisjrojas", text: "bien y vos" },
			{ user: "probando123", text: "bien" },
			{ user: "alexisjrojas", text: "va creo" },
			{ user: "alexisjrojas", text: "." },
		];

		return (
			<section className="h-[90%] flex flex-col">
				<div className="w-[90%] h-[5%] mx-auto mt-3">
					<SvgVBorderChat />
				</div>
				<div
					className={`flex flex-col gap-2 bg-white/15 rounded-lg m-1 h-[80%] border-2 border-primary/80  p-1 ${StylesMessage}`}
				>
					{messages.map((message, index) => {
						return (
							<div
								key={index}
								className={`${
									message.user == "alexisjrojas" ? "self-start" : "self-end"
								}`}
							>
								<StyledTypography className="">{message.text}</StyledTypography>
								<StyledTypography className="text-xs" variant="small">
									&nbsp;
								</StyledTypography>
								<StyledTypography
									className="absolute pb-1 bottom-0 right-1 text-gray-400"
									variant="small"
								>
									{dateNow()}
								</StyledTypography>
							</div>
						);
					})}
				</div>
				<div className="w-[80%] mx-auto p-2">
					<StyledInput
						type="text"
						placeHolder="Ingrese mensaje"
						className="bg-tertiary/50"
					/>
				</div>
				<div className="cursor-pointer" onClick={() => closeChat()}>
					🔼
				</div>
			</section>
		);
	}
	return (
		<div className="h-full w-full">
			<header className="h-[10%]  grid  grid-cols-[0.3fr_1fr_0.2fr]">
				<div className="   rounded-full h-[60px] w-[60px] flex items-center justify-center  ">
					<Image
						alt=""
						src={"/image/girl-waving.webp"}
						height={50}
						width={50}
						className="aspect-square"
					/>
				</div>
				<div className="flex flex-col justify-center w-[90%] mx-auto  ">
					<StyledTypography variant="body">{props.username}</StyledTypography>
					<StyledTypography>{props.email}</StyledTypography>
				</div>
				<div
					className={`size-4 rounded-full justify-self-center ${
						props.status ? "bg-green-300" : "bg-red-400"
					} self-center`}
				></div>
			</header>

			{active && viewChatBox()}
		</div>
	);
}
