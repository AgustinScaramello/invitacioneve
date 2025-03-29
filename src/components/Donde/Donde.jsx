"use client"

import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet"
import { Icon } from "leaflet" // Importar Icon de leaflet
import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"
import location from "../../utils/location.gif"
import marcador from "../../utils/marcador.svg" // Tu ícono SVG personalizado

import "./Donde.css"

export const Donde = () => {
	// Referencias para detectar cuando los elementos están en el viewport
	const titleRef = useRef(null)
	const mapRef = useRef(null)
	const isTitleInView = useInView(titleRef, { once: false, amount: 0.3 })
	const isMapInView = useInView(mapRef, { once: false, amount: 0.2 })

	const position = [-34.74223921785932, -58.27333427639575]

	// Crear un icono personalizado usando el archivo marcador.svg
	const customIcon = new Icon({
		iconUrl: marcador, // Ruta del archivo SVG
		iconSize: [100, 100], // Tamaño del ícono
		className: "marker-shadow",
	})

	// Variantes de animación para el título y contenido
	const titleVariants = {
		hidden: { opacity: 0, y: -50, scale: 0.8 },
		visible: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: {
				duration: 0.7,
				ease: [0.175, 0.885, 0.32, 1.275], // Efecto de rebote
			},
		},
	}

	// Variantes para la imagen del ícono
	const iconVariants = {
		hidden: { opacity: 0, rotate: -180, scale: 0 },
		visible: {
			opacity: 1,
			rotate: 0,
			scale: 1,
			transition: {
				duration: 0.8,
				delay: 0.2,
				ease: "easeOut",
			},
		},
	}

	// Variantes para la dirección
	const addressVariants = {
		hidden: { opacity: 0, x: 100, filter: "blur(8px)" },
		visible: {
			opacity: 1,
			x: 0,
			filter: "blur(0px)",
			transition: {
				duration: 0.6,
				delay: 0.4,
				ease: "easeOut",
			},
		},
	}

	// Variantes para el mapa
	const mapVariants = {
		hidden: { opacity: 0, scale: 0.9, y: 50 },
		visible: {
			opacity: 1,
			scale: 1,
			y: 0,
			transition: {
				type: "spring",
				stiffness: 300,
				damping: 15,
				delay: 0.3,
			},
		},
	}

	// Variantes para el botón
	const buttonVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
				delay: 0.8,
			},
		},
		hover: {
			scale: 1.05,
			boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
			transition: {
				duration: 0.3,
			},
		},
	}

	return (
		<div id="containerDondeGeneral">
			<motion.div id="containerDonde" ref={titleRef} initial="hidden" animate={isTitleInView ? "visible" : "hidden"}>
				<motion.img className="iconDonde" src={location} alt="" variants={iconVariants} />
				<motion.h1 className="tituloDonde" variants={titleVariants}>
					¿DONDE?
				</motion.h1>
				<motion.h1 className="horaDonde" variants={addressVariants}>
					AV. LA PLATA 2370 - QUIMES
				</motion.h1>
			</motion.div>

			<motion.div id="containerMapa" ref={mapRef} initial="hidden" animate={isMapInView ? "visible" : "hidden"} variants={mapVariants}>
				<MapContainer center={position} zoom={18} id="mapa">
					<TileLayer
						attribution='&copy; <a href="https://www.openstreetmap.org/copyright"></a>'
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>
					<Marker position={position} icon={customIcon}>
						<Popup permanent closeButton={false}>
							<div className="popupMapa">
								<p className="palabrasPopup palabrasPopupBold">SALÓN CLAHE</p>
								<p className="palabrasPopup">Av. La Plata 2370 - Quilmes</p>
							</div>
						</Popup>
					</Marker>
				</MapContainer>

				<motion.div className="btnGoogleMaps" variants={buttonVariants} whileHover="hover" whileTap={{ scale: 0.95 }}>
					<a href="https://maps.app.goo.gl/Vkrm9Q9WgTjezym8A" className="urlBtnGoogleMaps">
						ABRIR UBICACIÓN EN GOOGLE MAPS
					</a>
				</motion.div>
			</motion.div>
		</div>
	)
}
