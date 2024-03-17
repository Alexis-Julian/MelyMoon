"use client";
import ChatCardUser from "./ChatCardUser";
import StyledTypography from "./StyledTypography";
import { useEffect, useState, useRef } from "react";

export default function Chat() {
	function handleOpenChat(index: number) {
		if (useChatUserActive == index) return;
		setChatUserActive(index);
	}

	function handleCloseChat() {
		return setChatUserActive(null);
	}

	const [useSizeChat, setSizeChat] = useState<{
		height: number;
	} | null>(null);

	const [useChatUserActive, setChatUserActive] = useState<number | null>(null);

	const element = useRef<HTMLUListElement>(null);
	useEffect(() => {
		if (element.current) {
			const ElementUl = element.current;
			const height = ElementUl.offsetHeight - 60;
			setSizeChat({ height });
		}
	}, []);

	const contactos = [
		{
			img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
			username: "Pepe",
			email: "pepe@gmail.com",
			status: true,
		},
		{
			img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
			username: "Rocio",
			email: "rocio@gmail.com",
			status: true,
		},
		{
			img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
			username: "magali",
			email: "magali@gmail.com",
			status: false,
		},
		{
			img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
			username: "mel",
			email: "mel@gmail.com",
			status: false,
		},
	];
	return (
		<div className="h-full w-full bg-white/30  rounded-xl flex flex-col p-1 gap-2">
			<header className="h-[10%] min-h-[82px] max-h-[82px] bg-primary/20  rounded-t-lg flex items-center justify-center  ">
				<StyledTypography variant="h3">Bandeja de entrada</StyledTypography>
			</header>
			<section className="mt-1 h-[90%] flex flex-col gap-1 ">
				<div className="bg-primary/20 ">
					<StyledTypography variant="body" className="text-black/60 pl-4">
						Contactos
					</StyledTypography>
				</div>
				<nav className="bg-primary/20 h-full ">
					<ul className={`flex flex-col gap-4 h-full`} ref={element}>
						{contactos.map((user, index) => {
							return (
								<li
									className={`bg-primary/80 rounded-md  cursor-pointer hover:bg-primary/40 transition-all ${
										useChatUserActive == index && "bg-primary/40 cursor-default"
									} `}
									onClick={() => handleOpenChat(index)}
									key={index}
									style={{
										minHeight: `${
											useChatUserActive == index
												? useSizeChat?.height || "60"
												: "60"
										}px`,
										order: useChatUserActive == index ? -1 : 0,
									}}
								>
									<ChatCardUser
										props={user}
										active={useChatUserActive == index ? true : false}
										closeChat={handleCloseChat}
									/>
								</li>
							);
						})}
					</ul>
				</nav>
			</section>
		</div>
	);
}
