import { Menu_info_list, setStateType } from "@/shared/types";
import MenuItem from "./MenuItem";
import ChatHeader from "./MenuHeader";
import GlobalHeader from "./GlobalHeader";
export default function GlobalMenu({
	changeMenu,
	menuActive,
	handleOpenMenu,
	sectionsMenuUser,
}: {
	changeMenu: setStateType<string | null>;
	menuActive: string | null;
	handleOpenMenu: () => void;
	sectionsMenuUser: Menu_info_list[];
}) {
	function handleChangeMenu(item: string) {
		handleOpenMenu();
		setTimeout(() => {
			changeMenu(item);
		}, 150);
	}

	function MenuSelector() {
		return (
			<>
				<div className="size-full left-0 top-0  rounded-lg border-2 border-primary blur-sm  absolute -z-10"></div>
				<ChatHeader>Menu</ChatHeader>
				<nav>
					<ul className={`flex flex-col -4 mt-2 gap-4`}>
						{sectionsMenuUser.map((item: Menu_info_list, index: number) => {
							return (
								<li
									key={index}
									className="itemmenu relative bg-primary/30 shadow-black/10 hover:bg-primary/60 hover:shadow-black/20 cursor-pointer transition-all shadow-md   text-center rounded-lg mb-4 py-4"
									onClick={() => handleChangeMenu(item.name)}
								>
									<div className="border-secondary   transition-all  absolute size-8 border-l-2 border-t-2 rounded-t-lg rounded-tr-none  top-0 "></div>
									<MenuItem>{item.name}</MenuItem>
									<div className="border-secondary  transition-all  absolute size-8 border-r-2 border-b-2 rounded-b-lg  rounded-bl-none bottom-0 right-0 "></div>
								</li>
							);
						})}
					</ul>
				</nav>
			</>
		);
	}

	function RenderHandleMenu(): React.ReactNode {
		const response = sectionsMenuUser.find((section: any) => {
			return section.name == menuActive && section.components;
		});

		if (!response) return <MenuSelector />;

		return (
			<>
				<ChatHeader>{response.name}</ChatHeader>
				{response.components}
			</>
		);
	}

	return (
		<div className="size-full rounded-lg  bg-white/30 relative shadow-md shadow-primary p-2 flex flex-col gap-4">
			<RenderHandleMenu />
		</div>
	);
}
