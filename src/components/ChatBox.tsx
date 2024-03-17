import ChatMessage from "./ChatMessage";
import StyledInput from "./StyledInput";
import StyledTypography from "./StyledTypography";
import SvgVBorderChat from "./SvgBorderChat";

export default function ChatBox({ closeChat }: { closeChat: any }) {
	const StylesMessage = [
		"[&>*:nth-child(n)]:bg-white/50",
		"[&>*:nth-child(n)]:w-fit",
		"[&>*:nth-child(n)]:p-2",
		"[&>*:nth-child(n)]:pr-10",
		"[&>*:nth-child(n)]:rounded-lg",
		"[&>*:nth-child(n)]:relative",
	].join(" ");

	const messages = [
		{ user: "alexisjrojas", text: "hola" },
		{ user: "probando123", text: "como estas" },
		{ user: "alexisjrojas", text: "bien y vos" },
		{ user: "probando123", text: "bien" },
		{ user: "alexisjrojas", text: "va creo" },
		{ user: "alexisjrojas", text: "." },
	];

	return (
		<section className="h-[90%] flex flex-col">
			<div className="w-[90%] h-[5%] mx-auto mt-3">
				<SvgVBorderChat />
			</div>
			<div
				className={`flex flex-col gap-2 bg-white/15 rounded-lg m-1 h-[80%] border-2 border-primary/80  p-1 ${StylesMessage}`}
			>
				{messages.map((message, index) => {
					return <ChatMessage key={index} props={message} />;
				})}
			</div>
			<div className="w-[80%] mx-auto p-2">
				<StyledInput
					type="text"
					placeHolder="Ingrese mensaje"
					className="bg-tertiary/50"
				/>
			</div>
			<div className="cursor-pointer" onClick={() => closeChat()}>
				🔼
			</div>
		</section>
	);
}
