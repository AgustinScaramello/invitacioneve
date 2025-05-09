import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Asistencia } from "./components/Asistencia/Asistencia"
import { Cuando } from "./components/Cuando/Cuando"
import { Donde } from "./components/Donde/Donde"
import { Evento } from "./components/Evento/Evento"
import ParallaxSection from "./utils/ParallaxSection"
import videoGlitter from "./assets/videoGlitter1.mp4"

import "leaflet/dist/leaflet.css"
import "./index.css"
import { AudioPlayer } from "./components/AudioPlayer/AudioPlayer"
import { Regalo } from "./components/Regalo/Regalo"
import { Modal } from "./components/Modal/Modal"
import cancion from "./assets/cancion.mp3"

function App() {
	const [isLoading, setIsLoading] = useState(true)
	const [showContent, setShowContent] = useState(false)
	const audioRef = useRef(new Audio(cancion))

	useEffect(() => {
		setTimeout(() => setIsLoading(false), 2000)
	}, [])

	const handleContinue = () => {
		setShowContent(true)
		audioRef.current.play().catch((err) => console.log("Error al reproducir audio:", err))
	}

	if (isLoading) {
		return (
			<motion.div className="loading-container">
				<motion.p initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity }}>
					ESPERE POR FAVOR...
				</motion.p>
			</motion.div>
		)
	}

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
						!INVITACIÓN XV EVELIN! <br /> <span className="mensajeReprogramado">REPROGRAMADO, NUEVA FECHA Y LUGAR</span>
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
						<Donde audioRef={audioRef} />
					</ParallaxSection>

					<ParallaxSection id="regalo">
						<Regalo />
					</ParallaxSection>

					<ParallaxSection id="asistencia">
						<Asistencia audioRef={audioRef} />
					</ParallaxSection>
				</div>
			)}
		</AnimatePresence>
	)
}

export default App
