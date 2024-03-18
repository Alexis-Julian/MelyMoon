"use client";
import GlobalHeader from "./GlobalHeader";
import { useEffect, useState } from "react";
import GlobalMenu from "./GlobalMenu";
import GlobalChat from "./GlobalChat";
import MenuSectionNotification from "./MenuSectionNotification";
import MenuSectionSearch from "./MenuSectionSearch";
import MenuSectionProfile from "./MenuSectionProfile";

export default function GlobalComponents() {
	const [useMenuActive, setMenuActive] = useState<boolean>(false);
	const [useTypeMenu, setTypeMenu] = useState<string>("Inicio");

	function handleOpenMenu() {
		setMenuActive(!useMenuActive);
	}
	console.log(useTypeMenu);
	const List = [
		{
			name: "Inicio",
			components: [
				<GlobalMenu
					key={"home"}
					changeMenu={setTypeMenu}
					handleOpenMenu={handleOpenMenu}
					statusMenu={useMenuActive}
				/>,
			],
			active: false,
		},
		{
			name: "Buscar",
			components: [<MenuSectionSearch key={"search"} />],
			active: false,
		},
		{
			name: "Mensajes",
			components: [<GlobalChat key={"chat"} setMenuActive={setMenuActive} />],
			active: false,
		},
		{
			name: "Notificaciones",
			components: [<MenuSectionNotification key={"notification"} />],
			active: false,
		},
		{
			name: "Perfil",
			components: [
				<MenuSectionProfile key={"perfil"} setMenuActive={setMenuActive} />,
			],
			active: false,
		},
	];

	return (
		<>
			<GlobalHeader openMenu={handleOpenMenu} />
			<div
				className={`absolute h-[90%] w-[20%] z-50 transition-all ${
					useMenuActive ? "translate-x-0" : "-translate-x-[100%]"
				} `}
			>
				{List.map((menu, index) => {
					return (
						menu.name == useTypeMenu && (
							<div
								key={index}
								className="bg-white/30  rounded-xl h-full w-full"
							>
								{menu.components}
							</div>
						)
					);
				})}
			</div>
		</>
	);
}
