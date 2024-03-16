"use client";
import GlobalChat from "./GlobalChat";
import SvgFrame from "./SvgFrame";
import { useState } from "react";

export default function GlobalWorkshop() {
	const [useChatActive, setChatActive] = useState<boolean>(false);

	function handleOpenChat() {
		setChatActive(!useChatActive);
	}

	return (
		<div className="w-full h-full flex relative overflow-hidden">
			<div
				className="size-24 bg-white absolute rounded-full cursor-pointer"
				onClick={handleOpenChat}
			></div>
			<section
				className="  h-full  flex transition-all"
				style={{ width: useChatActive ? "80%" : "100%" }}
			>
				<div className="size-96 ">
					<SvgFrame />
				</div>
				<div className="size-96">
					<SvgFrame />
				</div>
				<div className="size-96">
					<SvgFrame />
				</div>
				<div className="size-96">
					<SvgFrame />
				</div>
			</section>
			<section
				className="w-[20%] absolute h-full right-0 p-2 transition-all"
				style={{
					transform: useChatActive ? "translateX(0)" : "translateX(100%)",
				}}
			>
				<GlobalChat />
			</section>
		</div>
	);
}
