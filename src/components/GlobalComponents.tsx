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

export default function GlobalComponents() {
	function handleOpenMenu(): void {
		return setMenuActive(!useMenuActive);
	}

	const [useMenuActive, setMenuActive] = useState<boolean>(false);

	const [useTypeMenu, setTypeMenu] = useState<string | null>(null);

	const [useTypeMenuPost, setTypeMenuPost] = useState<string | null>(null);

	/* Menu de creacion o eliminacion de publicaciones */
	const menu_crud_list: Menu_info_list[] = [
		{ name: "Inicio", components: [] },
		{ name: "Crear Publicacion", components: [] },
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

	function RenderMenus({
		menu_properties,
		menu_current,
	}: {
		menu_properties: Menu_info_list;
		menu_current: string;
	}) {
		const { name, components } = menu_properties;

		return (
			name == menu_current && (
				<div className="bg-white/30  rounded-xl size-full p-1 flex flex-col  gap-4 justify-center overflow-hidden">
					<ChatHeader>{name}</ChatHeader>
					<section className="h-[90%]">{components}</section>
				</div>
			)
		);
	}

	return (
		<>
			<GlobalHeader openMenu={handleOpenMenu} />

			{/* ESTE ES EL MENU PARA VER TU PERFIL BUSCAR PERFILES VER TUS NOTIFICACIONES*/}
			<div
				className={`absolute h-[90%] w-[20%] z-50 transition-all ${
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
			<div className={`absolute right-0 h-[90%] w-[20%] z-50 transition-all`}>
				{/* <GlobalMenu/> */}
			</div>
		</>
	);
}
/* {menu_crud_list.map((menu_properties, index) => {
	return (
		<RenderMenus
			menu_properties={menu_properties}
			menu_current={useTypeMenuPost}
			key={index}
		/>
	);
})} */

{
	/* {menu_info_list.map(
					(menu_properties: Menu_info_list, index: number) => {
						return (
							<RenderMenus
								menu_properties={menu_properties}
								menu_current={useTypeMenu}
								key={index}
							/>
						);
					}
				)} */
}
