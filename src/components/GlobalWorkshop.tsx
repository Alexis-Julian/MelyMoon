"use client";
import GlobalChat from "./GlobalChat";
import GlobalHeader from "./GlobalComponents";
import SvgFrame from "./SvgFrame";
import { useState } from "react";

export default function GlobalWorkshop() {
	const [useChatActive, setChatActive] = useState<boolean>(false);

	function handleOpenChat() {
		setChatActive(!useChatActive);
	}

	return (
		<div className="w-full h-full flex flex-col relative overflow-hidden">
			{/* 	<div
				className="size-24 bg-white absolute rounded-full cursor-pointer"
				onClick={handleOpenChat}
			></div> */}

			<section
				className="  h-full grid grid-cols-[0.2fr_1fr_0.2fr]  transition-all   w-[80%] mx-auto"
				// style={{ width: useChatActive ? "80%" : "100%" }}
			>
				<div>{/* DIV FANTASMAS */}</div>
				<div className="bg-white/15"></div>
				<div>{/* DIV FANTASMAS */}</div>
			</section>
			{/* 	<section
				className="w-[20%] absolute h-full right-0 p-2 transition-all"
				style={{
					transform: useChatActive ? "translateX(0)" : "translateX(100%)",
				}}
			>
				<GlobalChat />
			</section> */}
		</div>
	);
}
