"use client";
import GlobalHeader from "./GlobalHeader";
import { useState } from "react";
import GlobalMenu from "./GlobalMenu";
import GlobalChat from "./GlobalChat";
import MenuSectionNotification from "./MenuSectionNotification";
import MenuSectionSearch from "./MenuSectionSearch";
import MenuSectionProfile from "./MenuSectionProfile";
import ChatHeader from "./MenuHeader";
import GlobalMenuPost from "./GlobalMenuPost";
import { SectionMenuPost, SectionMenuUser } from "@/shared/consts";

export default function GlobalComponents() {
	function handleOpenMenu(): void {
		return setMenuActive(!useMenuActive);
	}

	const [useMenuActive, setMenuActive] = useState<boolean>(false);

	const [useTypeMenu, setTypeMenu] = useState<string>(SectionMenuUser[0].name);

	const [useTypeMenuPost, setTypeMenuPost] = useState<string>(
		SectionMenuPost[0].name
	);

	const ListPost = [
		{ name: "Inicio", components: [] },
		{ name: "Crear Publicacion", components: [] },
		{ name: "Eliminar Publicacion", components: [] },
		{ name: "Ver tus Publicaciones", components: [] },
	];

	const List = [
		{
			name: "Inicio",
			components: [
				<GlobalMenu
					key={"home"}
					changeMenu={setTypeMenu}
					handleOpenMenu={handleOpenMenu}
				/>,
			],
		},
		{
			name: "Buscar",
			components: [
				<MenuSectionSearch key={"search"} setMenuActive={setMenuActive} />,
			],
			active: false,
		},
		{
			name: "Mensajes",
			components: [<GlobalChat key={"chat"} setMenuActive={setMenuActive} />],
		},
		{
			name: "Notificaciones",
			components: [
				<MenuSectionNotification
					setMenuActive={setMenuActive}
					key={"notification"}
				/>,
			],
		},
		{
			name: "Perfil",
			components: [
				<MenuSectionProfile key={"perfil"} setMenuActive={setMenuActive} />,
			],
		},
	];

	function RenderMenus({ menu }: any) {
		return (
			menu.name == useTypeMenu && (
				<div className="bg-white/30  rounded-xl size-full p-1 flex flex-col  gap-4 justify-center overflow-hidden">
					<ChatHeader>{menu.name}</ChatHeader>
					<section className="h-[90%]">{menu.components}</section>
				</div>
			)
		);
	}

	return (
		<>
			<GlobalHeader openMenu={handleOpenMenu} />
			<div
				className={`absolute h-[90%] w-[20%] z-50 transition-all ${
					useMenuActive ? "translate-x-0" : "-translate-x-[100%]"
				} `}
			>
				{List.map((menu, index) => {
					return <RenderMenus menu={menu} key={index} />;
				})}
			</div>

			<div className={`absolute right-0 h-[90%] w-[20%] z-50 transition-all`}>
				{ListPost.map((menuPost, index) => {
					console.log(menuPost);
					return <RenderMenus menu={menuPost} key={index} />;
				})}
			</div>
		</>
	);
}
