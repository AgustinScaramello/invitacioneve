import { Asistencia } from "./components/Asistencia/Asistencia"
import { Cuando } from "./components/Cuando/Cuando"
import { Donde } from "./components/Donde/Donde"
import { DressCode } from "./components/DressCode/DressCode"
import { Evento } from "./components/Evento/Evento"
import { NavBar } from "./components/NavBar/NavBar"

import "leaflet/dist/leaflet.css"

import "./index.css"

function App() {
	return (
		<div>
			{/* <NavBar /> */}
			<Evento />
			<Cuando />
			<DressCode />
			<Donde />
			<Asistencia />
		</div>
	)
}

export default App
