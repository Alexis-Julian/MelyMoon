import CardUser from "./CardUser";
import StyledTypography from "./StyledTypography";

export default function Chat() {
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
			<header className="h-[10%] bg-primary/20  rounded-t-lg flex items-center justify-center  ">
				<StyledTypography variant="h3">Bandeja de entrada</StyledTypography>
			</header>
			<section className="mt-1 h-[90%] flex flex-col gap-1 ">
				<div className="bg-primary/20 ">
					<StyledTypography variant="body" className="text-black/60 pl-4">
						Contactos
					</StyledTypography>
				</div>
				<nav className="bg-primary/20 h-full">
					<ul className="flex flex-col  gap-4">
						{contactos.map((user, index) => {
							return <CardUser props={user} key={index} />;
						})}
					</ul>
				</nav>
			</section>
		</div>
	);
}
