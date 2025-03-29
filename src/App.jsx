import { Asistencia } from "./components/Asistencia/Asistencia"
import { Cuando } from "./components/Cuando/Cuando"
import { Donde } from "./components/Donde/Donde"
import { Evento } from "./components/Evento/Evento"
import ParallaxSection from "./utils/ParallaxSection"

import "leaflet/dist/leaflet.css"
import "./index.css"
import { AudioPlayer } from "./components/AudioPlayer/AudioPlayer"

function App() {
	return (
		<div className="parallax-container">
			<AudioPlayer />
			<ParallaxSection id="evento">
				<Evento />
			</ParallaxSection>

			<ParallaxSection id="cuando">
				<Cuando />
			</ParallaxSection>

			<ParallaxSection id="donde">
				<Donde />
			</ParallaxSection>

			<ParallaxSection id="asistencia">
				<Asistencia />
			</ParallaxSection>
		</div>
	)
}

export default App
