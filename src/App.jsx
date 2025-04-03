import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Asistencia } from "./components/Asistencia/Asistencia"
import { Cuando } from "./components/Cuando/Cuando"
import { Donde } from "./components/Donde/Donde"
import { Evento } from "./components/Evento/Evento"
import ParallaxSection from "./utils/ParallaxSection"
import videoGlitter from "./utils/videoGlitter1.mp4"

import "leaflet/dist/leaflet.css"
import "./index.css"
import { AudioPlayer } from "./components/AudioPlayer/AudioPlayer"
import { Regalo } from "./components/Regalo/Regalo"
import { Modal } from "./components/Modal/Modal"
import cancion from "./utils/cancion.mp3"

function App() {
	const [isLoading, setIsLoading] = useState(true)
	const [showContent, setShowContent] = useState(false)
	const audioRef = useRef(new Audio(cancion)) // Creamos el audio

	useEffect(() => {
		// Simulación de carga
		setTimeout(() => setIsLoading(false), 2000)
	}, [])

	const handleContinue = () => {
		setShowContent(true)
		audioRef.current.play().catch((err) => console.log("Error al reproducir audio:", err))
	}

	// 🟡 Mientras carga, muestra "Cargando..."
	if (isLoading) {
		return (
			<motion.div className="loading-container">
				<motion.p initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity }}>
					ESPERE POR FAVOR...
				</motion.p>
			</motion.div>
		)
	}

	// 🟢 Muestra el botón "Continuar" antes de mostrar el contenido
	return (
		<AnimatePresence>
			{!showContent && (
				<motion.div
					className="loading-container"
					initial={{ opacity: 1, scale: 1 }}
					animate={{ opacity: 1, scale: 1 }}
					exit={{ opacity: 0, scale: 1.2 }}
					transition={{ duration: 1, ease: "easeOut" }}
				>
					<motion.p initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
						!INVITACIÓN XV EVELIN!
					</motion.p>
					<motion.button
						className="continue-button"
						onClick={handleContinue}
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						transition={{ duration: 0.5, ease: "easeOut" }}
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
					>
						ABRIR
					</motion.button>
				</motion.div>
			)}

			{showContent && (
				<div className="parallax-container">
					<Modal />
					<AudioPlayer audioRef={audioRef} />

					{/* Video de fondo único */}
					<video autoPlay loop muted playsInline className="background-video-cuando">
						<source src={videoGlitter} type="video/mp4" />
					</video>

					<ParallaxSection id="evento">
						<Evento />
					</ParallaxSection>

					<ParallaxSection id="cuando">
						<Cuando />
					</ParallaxSection>

					<ParallaxSection id="donde">
						<Donde />
					</ParallaxSection>

					<ParallaxSection id="regalo">
						<Regalo />
					</ParallaxSection>

					<ParallaxSection id="asistencia">
						<Asistencia />
					</ParallaxSection>
				</div>
			)}
		</AnimatePresence>
	)
}

export default App
