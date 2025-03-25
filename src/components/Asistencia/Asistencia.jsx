import mail from "../../utils/mail.gif"
import "./Asistencia.css"

export const Asistencia = () => {
	return (
		<div id="containerAsistenciaGeneral">
			<div id="containerAsistencia">
				<img className="iconAsistencia" src={mail} alt="" />
				<h1 className="tituloAsistencia">CONFIRMAR ASISTENCIA</h1>
				<h1 className="mensajeAsistencia">!TE ESPERO PARA FESTEJAR JUNTOS!</h1>
				<h1 className="mensajeAsistencia2">ES NECESARIO QUE TU CONFIRMACION SEA ANTES DEL 20/04</h1>
			</div>
			<div className="containerBotonesAsistencia">
				<a
					className="containerbtnAsistencia"
					href="https://wa.me/1122381607?text=%C2%A1Hola%20Eve%2C%20confirmo%20mi%20asistencia%20a%20tus%2015%21"
					target="_blank"
				>
					ASISTIRE
				</a>
				<a
					className="containerbtnAsistencia"
					href="https://wa.me/1122381607?text=Hola%20Eve%2C%20lamento%20decirte%20que%20no%20asistir%C3%A9%20a%20tu%20fiesta.%20%C2%A1Que%20pases%20una%20gran%20noche%2C%20gracias%20por%20la%20invitaci%C3%B3n%21"
					target="_blank"
				>
					NO ASISTIRE
				</a>
			</div>
		</div>
	)
}
