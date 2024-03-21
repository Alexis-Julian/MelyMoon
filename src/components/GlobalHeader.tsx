import Link from "next/link";
import StyledTypography from "./StyledTypography";
import Image from "next/image";

export default function GlobalHeader({
	openMenu,
	openMenuPost,
}: {
	openMenu: () => void;
	openMenuPost: () => void;
}) {
	const LinkNavigations = [
		{ name: "Detalles" },
		{ name: "Contenido" },
		{ name: "Contactar" },
	];

	return (
		<header className="h-[10%]  w-full flex items-center justify-center ">
			<div className="bg-white/15 size-[80%] rounded-md shadow-md grid grid-cols-[0.2fr_1fr_0.2fr] grid-rows-1 p-1 ">
				<section className="  bg-white/20 rounded-sm">
					<button
						className="h-full w-full flex items-center  justify-evenly"
						onClick={openMenu}
					>
						<Image
							src={"/image/girl-waving.webp"}
							className="aspect-square"
							height={60}
							width={60}
							alt=""
						/>
						<StyledTypography variant="h3">Tu perfil</StyledTypography>
					</button>
				</section>
				<section className="size-full">
					<nav className="size-full">
						<ul className="size-full flex items-center justify-center gap-2">
							{LinkNavigations.map((LinkNavigation, index) => {
								return (
									<li key={index}>
										<Link href={""}>
											<StyledTypography variant="body">
												{LinkNavigation.name}
											</StyledTypography>
										</Link>
									</li>
								);
							})}
						</ul>
					</nav>
				</section>
				<section className="flex items-center justify-center size-full bg-white/15 ">
					<button className="size-full" onClick={openMenuPost}>
						<StyledTypography variant="h3">Detalles</StyledTypography>
					</button>
				</section>
			</div>
		</header>
	);
}
