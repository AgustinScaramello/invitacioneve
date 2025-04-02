import { useEffect, useRef } from "react"
import mail from "../../utils/mail.gif"
import videoMariposa from "../../utils/videoFuegos.mp4"

import "./Asistencia.css"

export const Asistencia = () => {
	const containerRef = useRef(null)

	const evento = {
		text: "👑¡FIESTA XV DE EVELIN!👑",
		details: "¡Veni a pasar una noche increible, con ganas de bailar y disfrutar, no te la podes perder! ✨",
		location: "-34.74226566628524, -58.27333427639575",
		startDate: "20250502", // Fecha en formato UTC (AñoMesDíaTHoraMinutoSegundoZ)
		endDate: "20250503",
	}

	const generarURLGoogleCalendar = () => {
		return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(evento.text)}&details=${encodeURIComponent(
			evento.details
		)}&location=${encodeURIComponent(evento.location)}&dates=${evento.startDate}/${evento.endDate}`
	}

	// Función para manejar la animación basada en scroll
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					// Cuando el elemento es visible
					if (entry.isIntersecting) {
						entry.target.classList.add("animate-in")
					} else {
						// Cuando el elemento sale de la vista, reiniciamos la animación
						entry.target.classList.remove("animate-in")
					}
				})
			},
			{ threshold: 0.3 } // El elemento es visible cuando al menos el 30% está en el viewport
		)

		// Observar el contenedor principal
		if (containerRef.current) {
			observer.observe(containerRef.current)
		}

		// Limpiar el observer cuando el componente se desmonte
		return () => {
			if (containerRef.current) {
				// eslint-disable-next-line react-hooks/exhaustive-deps
				observer.unobserve(containerRef.current)
			}
		}
	}, [])

	return (
		<div id="containerAsistenciaGeneral" ref={containerRef}>
			<video autoPlay loop muted playsInline className="background-video-asistencia">
				<source src={videoMariposa} type="video/mp4" />
			</video>
			<div id="containerAsistencia" className="animation-container">
				<img className="iconAsistencia animate-item" src={mail || "/placeholder.svg"} alt="" />
				<h1 className="tituloAsistencia animate-item">¿VENIS?</h1>
				<h1 className="mensajeAsistencia animate-item">!TE ESPERO PARA FESTEJAR JUNTOS!</h1>
				<h1 className="mensajeAsistencia2 animate-item">ES NECESARIO CONFIRMES ASISTENCIA ANTES DEL 20/04</h1>
			</div>

			<div className="containerBotonesAsistencia animation-container">
				<a
					className="containerbtnAsistencia animate-item btn-asistire"
					href="https://wa.me/1122381607?text=%C2%A1Hola%20Eve%2C%20confirmo%20mi%20asistencia%20a%20tus%2015%21"
					target="_blank"
				>
					ASISTIRE
				</a>
				<a
					className="containerbtnAsistencia animate-item btn-no-asistire"
					href="https://wa.me/1122381607?text=Hola%20Eve%2C%20lamento%20decirte%20que%20no%20asistir%C3%A9%20a%20tu%20fiesta.%20%C2%A1Que%20pases%20una%20gran%20noche%2C%20gracias%20por%20la%20invitaci%C3%B3n%21"
					target="_blank"
				>
					NO ASISTIRE
				</a>
				<a className="containerbtnAsistencia animate-item btn-agendar" onClick={() => window.open(generarURLGoogleCalendar(), "_blank")}>
					AGENDAR EVENTO
				</a>
			</div>
		</div>
	)
}
