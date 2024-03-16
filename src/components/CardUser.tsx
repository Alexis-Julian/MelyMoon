import Image from "next/image";
import StyledTypography from "./StyledTypography";
export default function CardUser({ props }: { props: any }) {
	console.log(props);
	return (
		<li className="h-[60px] bg-primary/80 rounded-md grid  grid-cols-[0.3fr_1fr_0.2fr] cursor-pointer hover:bg-primary/40">
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
				className={`size-4 rounded-full ${
					props.status ? "bg-green-300" : "bg-red-400"
				} self-center`}
			></div>
		</li>
	);
}
