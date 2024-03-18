"use client";

import Image from "next/image";
import StyledTypography from "./StyledTypography";
import { useState } from "react";
import ChatBox from "./ChatBox";

export default function ChatCardUser({
	props,
	active,
	closeChat,
}: {
	props: any;
	active: boolean;
	closeChat: any;
}) {
	return (
		<div className="h-full w-full">
			<header className="h-[10%]  grid  grid-cols-[0.3fr_1fr_0.2fr]">
				<div className="   rounded-full h-[60px] w-[60px] flex items-center justify-center  ">
					<Image
						alt=""
						src={"/image/girl-waving.webp"}
						height={50}
						width={50}
						className="aspect-square"
					/>
				</div>
				<div className="flex flex-col justify-center w-[90%] mx-auto  ">
					<StyledTypography variant="body">{props.username}</StyledTypography>
					<StyledTypography>{props.email}</StyledTypography>
				</div>
				<div
					className={`size-4 rounded-full justify-self-center ${
						props.status ? "bg-green-300" : "bg-red-400"
					} self-center`}
				></div>
			</header>

			{active && <ChatBox closeChat={closeChat} />}
		</div>
	);
}
