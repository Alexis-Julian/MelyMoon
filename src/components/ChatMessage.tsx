import StyledTypography from "./StyledTypography";

export default function ChatMessage({ props }: { props: any }) {
	function dateNow() {
		// Obtener la fecha y hora actual en milisegundos
		let milisegundos = Date.now();

		// Crear un objeto Date a partir de los milisegundos
		let fechaActual = new Date(milisegundos);

		let hora: number | string = fechaActual.getHours();
		let minutos: number | string = fechaActual.getMinutes();

		// Formatear la hora si es necesario (agregar ceros a la izquierda si la hora es menor a 10)
		if (hora < 10) {
			hora = "0" + hora;
		}
		if (minutos < 10) {
			minutos = "0" + minutos;
		}

		let horaActual = `${hora}:${minutos}`;

		return horaActual;
	}
	return (
		<div
			className={`${props.user == "alexisjrojas" ? "self-start" : "self-end"}`}
		>
			<StyledTypography className="">{props.text}</StyledTypography>
			<StyledTypography className="text-xs" variant="small">
				&nbsp;
			</StyledTypography>
			<StyledTypography
				className="absolute pb-1 bottom-0 right-1 text-gray-400"
				variant="small"
			>
				{dateNow()}
			</StyledTypography>
		</div>
	);
}
