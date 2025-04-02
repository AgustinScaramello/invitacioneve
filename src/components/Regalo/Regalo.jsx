import regalo from "../../utils/regalo.gif"
import "./Regalo.css"

export const Regalo = () => {
	return (
		<div className="containeRegaloGeneral">
			<div className="containerRegalo">
				<img src={regalo} alt="" className="iconRegalo" />
				<h1 className="textoRegalo">REGALOS</h1>
				<h2 className="parrafoRegalo">TU PRESENCIA ES MI MEJOR REGALO, PERO SI DESEAS HACER UN OBSEQUIO TE DEJO ESTA OPCIÓN </h2>

				<a href="" className="btnRegalo">
					CLICK AQUI PARA REGALAR
				</a>
			</div>
			<div className="continerLinea containerLineaRegalo">
				<div className="linea"></div>
			</div>
			<div className="containerFrase">
				<p className="frase">
					HAY MOMENTOS INOLVIDABLES QUE SE ATESORAN EN EL CORAZÓN PARA SIEMPRE. POR ESA RAZÓN QUIERO QUE COMPARTAS CONMIGO ESTE DÍA TAN ESPECIAL
					{/* Hay momentos inolvidables que se atesoran en el corazón para siempre. por esa razón quiero que compratas conmigo este dia tan especial */}
				</p>
			</div>
		</div>
	)
}
