import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet"
import { Icon } from "leaflet" // Importar Icon de leaflet
import location from "../../utils/location.gif"
import marcador from "../../utils/marcador.svg" // Tu ícono SVG personalizado

import "./Donde.css"

export const Donde = () => {
	const position = [-34.74223921785932, -58.27333427639575]

	// Crear un icono personalizado usando el archivo marcador.svg
	const customIcon = new Icon({
		iconUrl: marcador, // Ruta del archivo SVG
		iconSize: [100, 100], // Tamaño del ícono (puedes ajustar según el tamaño que necesites)
		className: "marker-shadow",
	})

	return (
		<div id="containerDondeGeneral">
			<div id="containerDonde">
				<img className="iconDonde" src={location} alt="" />
				<h1 className="tituloDonde">¿DONDE?</h1>
				<h1 className="horaDonde">AV. LA PLATA 2370 - QUIMES</h1>
			</div>
			<div id="containerMapa">
				<MapContainer center={position} zoom={18} id="mapa">
					<TileLayer
						attribution='&copy; <a href="https://www.openstreetmap.org/copyright"></a>'
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>
					{/* Usamos el marcador personalizado */}
					<Marker position={position} icon={customIcon}>
						<Popup permanent closeButton={false}>
							<div className="popupMapa">
								<p className="palabrasPopup palabrasPopupBold">SALÓN CLAHE</p>
								<p className="palabrasPopup">Av. La Plata 2370 - Quilmes</p>
							</div>
						</Popup>
					</Marker>
				</MapContainer>
				<div className="btnGoogleMaps">
					<a href="https://maps.app.goo.gl/Vkrm9Q9WgTjezym8A" className="urlBtnGoogleMaps">
						ABRIR UBICACIÓN EN GOOGLE MAPS
					</a>
				</div>
			</div>
		</div>
	)
}
