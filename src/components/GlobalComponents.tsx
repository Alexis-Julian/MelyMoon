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
import { Menu_info_list } from "@/shared/types";
import MenuSectionCreatePost from "./MenuSectionCreatePost";

export default function GlobalComponents() {
	function handleOpenMenu(): void {
		return setMenuActive(!useMenuActive);
	}

	function handleOpenMenuPost(): void {
		return setMenuActvePost(!useMenuActivePost);
	}

	const [useMenuActive, setMenuActive] = useState<boolean>(false);

	const [useMenuActivePost, setMenuActvePost] = useState<boolean>(false);

	const [useTypeMenu, setTypeMenu] = useState<string | null>(null);

	const [useTypeMenuPost, setTypeMenuPost] = useState<string | null>(null);

	/* Menu de creacion o eliminacion de publicaciones */
	const menu_crud_list: Menu_info_list[] = [
		{ name: "Inicio", components: [] },
		{
			name: "Crear Publicacion",
			components: [
				<MenuSectionCreatePost
					key={"create"}
					setMenuActve={setMenuActvePost}
				/>,
			],
		},
		{ name: "Eliminar Publicacion", components: [] },
		{ name: "Ver tus Publicaciones", components: [] },
	];

	/* Menu de visualizacion*/
	const menu_info_list: Menu_info_list[] = [
		{
			name: "Buscar",
			components: [
				<MenuSectionSearch key={"search"} setMenuActive={setMenuActive} />,
			],
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

	return (
		<>
			<GlobalHeader
				openMenu={handleOpenMenu}
				openMenuPost={handleOpenMenuPost}
			/>

			{/* ESTE ES EL MENU PARA VER TU PERFIL BUSCAR PERFILES VER TUS NOTIFICACIONES*/}
			<div
				className={`absolute left-0 h-[90%] w-[20%] z-50 transition-all  ${
					useMenuActive ? "translate-x-0" : "-translate-x-[100%]"
				} `}
			>
				<GlobalMenu
					changeMenu={setTypeMenu}
					menuActive={useTypeMenu}
					handleOpenMenu={handleOpenMenu}
					sectionsMenuUser={menu_info_list}
				/>
			</div>

			{/* ESTE ES EL MENU CRUD PARA CREAR O ELIMINAR O LEER PUBLICACIONES */}
			<div
				className={`absolute right-0 h-[90%] w-[20%] z-50 transition-all translate-x-0 overflow-hidden ${
					useMenuActivePost ? "translate-x-0" : "translate-x-[100%]"
				}`}
			>
				<GlobalMenu
					changeMenu={setTypeMenuPost}
					menuActive={useTypeMenuPost}
					handleOpenMenu={handleOpenMenuPost}
					sectionsMenuUser={menu_crud_list}
				/>
			</div>
		</>
	);
}
