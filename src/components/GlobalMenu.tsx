import { setStateType } from "@/shared/types";
import MenuItem from "./MenuItem";
import { SectionMenuUser as List } from "@/shared/consts";
export default function GlobalMenu({
	changeMenu,
	handleOpenMenu,
}: {
	changeMenu: setStateType<string>;
	handleOpenMenu: any;
}) {
	function handleChangeMenu(item: string) {
		handleOpenMenu();
		setTimeout(() => {
			changeMenu(item);
		}, 150);
	}

	return (
		<div className="size-full rounded-lg ">
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
