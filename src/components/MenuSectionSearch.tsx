import { useEffect } from "react";
import StyledTypography from "./StyledTypography";
import StyledInput from "./StyledInput";
import ItemCardUser from "./ItemCardUserChat";

export default function MenuSectionSearch({
	setMenuActive,
}: {
	setMenuActive: any;
}) {
	useEffect(() => {
		setMenuActive(true);
	}, [setMenuActive]);
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
		<section className="flex flex-col h-full  border-r-2 border-t-2 border-black/10 rounded-lg ">
			<div className="h-[10%] m-2">
				<StyledInput
					type="text"
					className="bg-tertiary/50 outline-none  placeholder-black/50"
					placeHolder="Buscar"
				/>
			</div>
			<div className="h-[90%] p-2  border-t-2 border-black/10">
				<StyledTypography variant="body" className="text-black/60">
					Recientes
				</StyledTypography>
				<ul className="h-full w-full flex flex-col gap-4">
					{contactos.map((contacto, index) => {
						return (
							<li key={index} className="bg-primary/80 rounded-md">
								<ItemCardUser props={contacto} />
							</li>
						);
					})}
				</ul>
			</div>
		</section>
	);
}
