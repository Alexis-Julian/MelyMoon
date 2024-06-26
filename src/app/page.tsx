"use client";
import SvgCatInHole from "@/components/SvgCatInHole";
import SvgFoot from "@/components/SvgFoot";
import Image from "next/image";
import { useAppContext } from "@/context";

export default function Home() {
	return (
		<main className="bg-black flex min-h-screen flex-col items-center justify-between p-24">
			<SvgCatInHole />
		</main>
	);
}
