import { useEffect, useState } from "react";
import StyledInput from "./StyledInput";
import ChatHeader from "./MenuHeader";
import StyledTypography from "./StyledTypography";
import { RiImageAddFill } from "react-icons/ri";

export default function MenuSectionCreatePost() {
	const test = [
		{ name: "W", components: [], index: 0 },
		{ name: "T", components: [], index: 1 },
		{ name: "M", components: [], index: 2 },
	];

	const [useCreatePost, setCreatePost] = useState(test[2]);

	const handleUploadImage = (e: any) => {
		console.log(e);
	};

	return (
		<section className="size-full flex flex-col gap-4">
			<nav className="bg-primary/30 rounded-b-lg w-full h-[10%]">
				<ul className="relative w-full h-full grid grid-cols-3 place-items-center">
					<div className=" absolute w-full h-[4px] rounded-sm     top-0   ">
						<div
							className={`w-[33.3%] h-[2px] transition-all  translate-x-[${
								useCreatePost.index * 100
							}%]`}
						>
							<div className="w-[50%] mx-auto bg-white/50 shadow-sm shadow-pink-500 rounded-sm  h-full"></div>
						</div>
					</div>
					{test.map((te, index) => {
						return (
							<li
								className={`z-50 flex items-center justify-center text-secondary size-[40px] rounded-full shadow-md shadow-black/15 border-2 border-secondary/50  bg-primary hover:cursor-pointer transition-all `}
								onClick={() => setCreatePost(test[index])}
								key={index}
							>
								{te.name}
							</li>
						);
					})}
				</ul>
			</nav>
			<div className="w-full h-[80%] flex flex-col">
				<textarea className=" resize-none outline-none p-1 h-[45%] rounded-t-md bg-white/85"></textarea>
				<div className="h-[10%] flex items-center ">
					<label
						htmlFor="uploadimage"
						className="w-full bg-primary/50 rounded-md text-tertiary/50 hover:text-tertiary shadow-md shadow-primary hover:scale-95 transition-all cursor-pointer  flex items-center justify-center gap-6 "
					>
						<StyledTypography variant="body">Adjuntar imagen</StyledTypography>
						<RiImageAddFill size={"20px"} />
						<input
							onChange={handleUploadImage}
							type="file"
							id="uploadimage"
							className="hidden"
						/>
					</label>
				</div>
				<div className="h-[45%]">ACA VA LA IMAGEN</div>
			</div>
			<div className=" h-[10%]  pt-2 mb-4 border-t-2 border-primary/30 rounded-md ">
				<button className="  h-full min-h-[82px] max-h-[82px] w-full bg-primary/20 hover:bg-primary/40 hover:scale-95 transition-all  rounded-t-lg flex items-center justify-center  shadow-md shadow-primary/50 hover:shadow-primary">
					<StyledTypography variant="h3">Publicar</StyledTypography>
				</button>
			</div>
		</section>
	);
}
