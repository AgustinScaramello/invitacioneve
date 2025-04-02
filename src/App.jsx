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

function App() {
	return (
		<div className="parallax-container">
			<AudioPlayer />

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
	)
}

export default App
