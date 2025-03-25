import corona from "../../utils/corona.png"

import "./Evento.css"

export const Evento = () => {
	return (
		<div id="containerEventoFondo">
			<div id="containerEvento">
				<div id="containerTituloEvento">
					<img id="corona" src={corona} alt="corona" />
					<h1 className="fuenteCursiva" id="nombreEvelin">
						Evelin
					</h1>
					<h2 id="tituloMisXv">¡MIS XV!</h2>
				</div>
			</div>
		</div>
	)
}
