import opendoor from "../../utils/opendoor.gif"
import dresscode from "../../utils/dresscode.gif"

import "./DressCode.css"

export const DressCode = () => {
	return (
		<div id="containerDresscodeGeneral">
			<div id="containerOpendoor">
				<img className="iconOpendoor" src={opendoor} alt="" />
				<h1 className="tituloOpendoor">OPEN DOORS</h1>
				<h1 className="horaOpendoor">22:00 hs.</h1>
			</div>
			<div className="containerLinea">
				<div className="linea"></div>
			</div>
			<div id="containerDresscode">
				<img className="iconDresscode" src={dresscode} alt="" />
				<h1 className="tituloDresscode">DRESS CODE</h1>
				<h1 className="horaDresscode">ELEGANTE</h1>
			</div>
		</div>
	)
}
