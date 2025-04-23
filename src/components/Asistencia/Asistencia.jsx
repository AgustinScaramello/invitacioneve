import { useEffect, useRef } from "react"
import mail from "../../assets/mail.gif"
import videoMariposa from "../../assets/videoFuegos.mp4"

import "./Asistencia.css"

export const Asistencia = ({ audioRef }) => {
	const containerRef = useRef(null)

	const apagarMusica = () => {
		if (audioRef?.current) {
			audioRef.current.pause()
		}
	}

	const evento = {
		text: "👑¡FIESTA XV DE EVELIN!👑 (NUEVA FECHA)",
		details:
			"¡Veni a pasar una noche increible, con ganas de bailar y disfrutar, no te la podes perder! ✨ A las 22:00hs. en Mitre 674, Florencio Varela",
		location: "-34.807818734043096, -58.2675428320896",
		startDate: "20250517", // Fecha en formato UTC (AñoMesDíaTHoraMinutoSegundoZ)
		endDate: "20250518",
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
				<h1 className="tituloAsistencia animate-item">¿VENÍS?</h1>
				<h1 className="mensajeAsistencia animate-item">!TE ESPERO PARA FESTEJAR JUNTOS!</h1>
				<h1 className="mensajeAsistencia2 animate-item">ES NECESARIO CONFIRMES ASISTENCIA ANTES DEL DOMINGO 4 DE MAYO</h1>
			</div>

			<div className="containerBotonesAsistencia animation-container">
				<a
					className="containerbtnAsistencia animate-item btn-asistire"
					href="https://wa.me/5491138978533?text=%C2%A1Hola%2C%20Eve!%0A%0AMe%20enter%C3%A9%20del%20cambio%20de%20fecha%20y%20lugar%20para%20tu%20fiesta%2C%20%C2%A1y%20quer%C3%ADa%20confirmarte%20que%20seguimos%20s%C3%BAper%20emocionad%40s%20de%20festejar%20con%20vos%20este%20momento%20tan%20especial!%0A%0A%C2%A1Por%20supuesto%20que%20confirmamos%20nuevamente%20nuestra%20asistencia!%20Va%20a%20ser%20una%20noche%20incre%C3%ADble%2C%20llena%20de%20alegr%C3%ADa%2C%20buena%20energ%C3%ADa%20y%20mucho%20baile%2C%20como%20te%20merec%C3%A9s.%0A%0A%C2%A1Nos%20vemos%20muy%20prontito%20para%20celebrar%20juntos%20como%20te%20merec%C3%A9s!%0A%0AAsistiremos%3A%0A%5BEscribir%20los%20nombres%20y%20apellidos%20de%20quienes%20asistir%C3%A1n%5D"
					target="_blank"
					onClick={apagarMusica}
				>
					<span className="textoSupBtnAsistencia">Click aqui para confirmar asistencia</span>
					🎉 SÍ, CONFIRMO 🎉
				</a>
				<a
					className="containerbtnAsistencia animate-item btn-no-asistire"
					href="https://wa.me/5491138978533?text=Hola%2C%20Eve!%0A%0AQuería%20agradecerte%20nuevamente%20por%20la%20invitación%20a%20tu%20fiesta%20de%2015.%20Sé%20que%20será%20una%20noche%20increíble%2C%20pero%20lamentablemente%20con%20la%20nueva%20fecha%20no%20voy%20a%20poder%20asistir.%0A%0AMe%20da%20mucha%20pena%20no%20poder%20estar%20ahí%20para%20festejar%20con%20vos%2C%20pero%20desde%20ya%20te%20deseo%20una%20noche%20inolvidable%2C%20llena%20de%20alegría%20y%20momentos%20especiales.%20%C2%A1Espero%20verte%20pronto%20para%20celebrar%20de%20otra%20manera!%0A%0ATe%20mando%20un%20abrazo%20grande%20y%20los%20mejores%20deseos%20en%20este%20día%20tan%20importante."
					target="_blank"
					onClick={apagarMusica}
				>
					<span className="textoSupBtnAsistencia">Click aqui para avisar que no vas</span>
					😔 NO PUEDO ASISTIR 😔
				</a>
				<a
					className="containerbtnAsistencia animate-item btn-agendar"
					onClick={() => {
						apagarMusica()
						window.open(generarURLGoogleCalendar(), "_blank")
					}}
				>
					<span className="textoSupBtnAsistencia">Click aqui para guardar en Google Calendar</span>
					📆 AGENDAR EVENTO 📆
				</a>
			</div>
		</div>
	)
}
