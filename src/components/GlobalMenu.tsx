import ChatHeader from "./MenuHeader";
import MenuItem from "./MenuItem";
import { useEffect, useState } from "react";

export default function GlobalMenu({ changeMenu }: { changeMenu: any }) {
	const List = [
		{ name: "Inicio" },
		{ name: "Buscar" },
		{ name: "Mensajes" },
		{ name: "Notificaciones" },
		{ name: "Perfil" },
	];

	function handleChangeMenu(item: string) {
		changeMenu(item);
	}

	return (
		<div className="size-full bg-white/30 rounded-lg p-1">
			<ChatHeader>Menu</ChatHeader>

			<nav>
				<ul className={`flex flex-col gap-4 mt-2 `}>
					{List.map((item, index) => {
						return (
							<li
								key={index}
								className="pl-2 shadow-md shadow-primary/50 hover:shadow-primary  cursor-pointer bg-primary/30 hover:bg-primary/60 border-b-2 border-primary/80 rounded-r-lg flex items-center h-[60px] w-[80%] transition-all"
								onClick={() => handleChangeMenu(item.name)}
							>
								<MenuItem>{item.name}</MenuItem>
							</li>
						);
					})}
				</ul>
			</nav>
		</div>
	);
}
