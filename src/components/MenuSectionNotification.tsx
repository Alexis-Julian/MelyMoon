import { useEffect } from "react";
import StyledTypography from "./StyledTypography";
import ItemCardNotification from "./ItemCardNotification";
import { ITEM_SIZE_HEIGHT } from "@/shared/consts";
import { setStateType } from "@/shared/types";
export default function MenuSectionNotifiacion({
	setMenuActive,
}: {
	setMenuActive: setStateType<boolean>;
}) {
	const notificaciones = [{ type: "chat" }, 2, 3, 4, 5, 6, 7, 8, 9];
	useEffect(() => {
		setMenuActive(true);
	}, [setMenuActive]);
	return (
		<nav className="h-full w-full">
			<ul className="h-full flex flex-col gap-2">
				{notificaciones.map((notificacion, index) => {
					return (
						<li
							key={index}
							className={`h-[${ITEM_SIZE_HEIGHT}px] w-full bg-primary/80 rounded-lg`}
						>
							<ItemCardNotification />
						</li>
					);
				})}
			</ul>
		</nav>
	);
}
