import { useEffect } from "react"
import regalo from "../../assets/regalo.gif"
import "./Regalo.css"
import { openSweetAlert } from "../../utils/ModalDesliza"

export const Regalo = () => {
	useEffect(() => {
		openSweetAlert()
	}, [])

	return (
		<div id="containeRegaloGeneral" className="containeRegaloGeneral abrirModalDesliza">
			<div className="containerRegalo">
				<img src={regalo} alt="" className="iconRegalo" />
				<h1 className="textoRegalo">REGALOS</h1>
				<h2 className="parrafoRegalo">TU PRESENCIA ES MI MEJOR REGALO, PERO SI DESEAS HACER UN OBSEQUIO TE DEJO ESTA OPCIÓN </h2>

				<a href="" className="btnRegalo" data-bs-toggle="modal" data-bs-target="#modalRegalo">
					CLICK PARA REGALAR
				</a>
			</div>
			<div className="continerLinea containerLineaRegalo">
				<div className="linea"></div>
			</div>
			<div className="containerFrase">
				<p className="frase">
					HAY MOMENTOS INOLVIDABLES QUE SE ATESORAN EN EL CORAZÓN PARA SIEMPRE. POR ESA RAZÓN QUIERO QUE COMPARTAS CONMIGO ESTA NOCHE TAN ESPECIAL
					{/* Hay momentos inolvidables que se atesoran en el corazón para siempre. por esa razón quiero que compratas conmigo este dia tan especial */}
				</p>
			</div>
		</div>
	)
}
