"use client";
import GlobalHeader from "./GlobalHeader";
import { useState } from "react";
import GlobalMenu from "./GlobalMenu";
import GlobalChat from "./GlobalChat";
import MenuSectionNotification from "./MenuSectionNotification";
import MenuSectionSearch from "./MenuSectionSearch";
import MenuSectionProfile from "./MenuSectionProfile";

export default function GlobalComponents() {
	const [useMenuActive, setMenuActive] = useState<boolean>(true);
	const [useTypeMenu, setTypeMenu] = useState<string>("Inicio");

	const List = [
		{
			name: "Inicio",
			components: [<GlobalMenu key={"home"} changeMenu={setTypeMenu} />],
		},
		{ name: "Buscar", components: [<MenuSectionSearch key={"search"} />] },
		{ name: "Mensajes", components: [<GlobalChat key={"chat"} />] },
		{
			name: "Notificaciones",
			components: [<MenuSectionNotification key={"notification"} />],
		},
		{ name: "Perfil", components: [<MenuSectionProfile key={"perfil"} />] },
	];

	function handleOpenMenu() {
		setMenuActive(!useMenuActive);
	}
	return (
		<>
			<GlobalHeader openMenu={handleOpenMenu} />
			<div
				className={`absolute h-[90%] w-[20%] z-50 transition-all ${
					useMenuActive ? "translate-x-0" : "-translate-x-[100%]"
				} `}
			>
				{List.map((menu) => {
					return menu.name == useTypeMenu && menu.components;
				})}
			</div>
		</>
	);
}
