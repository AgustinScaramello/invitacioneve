import { useEffect, useRef } from "react"
import mail from "../../utils/mail.gif"
import videoMariposa from "../../utils/videoFuegos.mp4"
import sad from "../../utils/sad.gif"

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
					href="https://wa.me/1138978533?text=%F0%9F%92%96%E2%9C%A8%20%C2%A1Hola%2C%20Eve!%20%E2%9C%A8%F0%9F%92%96%0A%0AQuería%20decirte%20que%20estoy%20súper%20emocionad%40%20de%20celebrar%20este%20día%20tan%20especial%20con%20vos%20%F0%9F%A5%B3%F0%9F%8E%82%F0%9F%8C%B8.%20%C2%A1Confirmo%20mi%20asistencia%20a%20tu%20fiesta%20de%2015!%20%F0%9F%8E%89%F0%9F%92%83%F0%9F%8F%BC%F0%9F%92%AB%0A%0A%C2%A1Seguro%20va%20a%20ser%20una%20noche%20m%C3%A1gica%20llena%20de%20alegr%C3%ADa%2C%20risas%20y%20mucho%20baile!%20%F0%9F%92%95%F0%9F%8E%B6%20Nos%20vemos%20prontito%20para%20festejar%20juntos%20%F0%9F%A5%82%F0%9F%8E%8A.%0A%0A%C2%A1Un%20beso%20enorme!%20%F0%9F%98%98%F0%9F%8C%9F%0A%0AAsistiremos:%0A%E2%9C%8D%EF%B8%8F%20Escribir%20los%20nombres%20y%20apellidos%20de%20quienes%20asistir%C3%A1n"
					target="_blank"
				>
					🎉 SI CONFIRMO 🎉
				</a>
				<a
					className="containerbtnAsistencia animate-item btn-no-asistire"
					href="https://wa.me/1138978533?text=Hola%2C%20Eve!%0A%0AQuería%20agradecerte%20por%20la%20invitación%20a%20tu%20fiesta%20de%2015.%20Sé%20que%20será%20una%20noche%20increíble%2C%20pero%20lamentablemente%20no%20voy%20a%20poder%20asistir.%0A%0AMe%20da%20mucha%20pena%20no%20poder%20estar%20ahí%20para%20festejar%20con%20vos%2C%20pero%20desde%20ya%20te%20deseo%20una%20noche%20inolvidable%2C%20llena%20de%20alegría%20y%20momentos%20especiales.%20%C2%A1Espero%20verte%20pronto%20para%20celebrar%20de%20otra%20manera!%0A%0ATe%20mando%20un%20abrazo%20grande%20y%20los%20mejores%20deseos%20en%20este%20día%20tan%20importante."
					target="_blank"
				>
					😔 NO PUEDO ASISTIR 😔
				</a>
				<a className="containerbtnAsistencia animate-item btn-agendar" onClick={() => window.open(generarURLGoogleCalendar(), "_blank")}>
					📆 AGENDAR EVENTO 📆
				</a>
			</div>
		</div>
	)
}
