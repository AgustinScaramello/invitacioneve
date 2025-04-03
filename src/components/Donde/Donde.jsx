"use client"

import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet"
import { Icon } from "leaflet" // Importar Icon de leaflet
import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"
import location from "../../utils/location.gif"
import marcador from "../../utils/marcador.svg" // Tu ícono SVG personalizado

import "./Donde.css"

export const Donde = ({ audioRef }) => {
	const apagarMusica = () => {
		if (audioRef?.current) {
			audioRef.current.pause()
		}
	}

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
					¿DÓNDE?
				</motion.h1>
				<motion.h1 className="horaDonde" variants={addressVariants}>
					AV. LA PLATA 2370 - QUIMES
				</motion.h1>
			</motion.div>

			<motion.div id="containerMapa" ref={mapRef} initial="hidden" animate={isMapInView ? "visible" : "hidden"} variants={mapVariants}>
				<MapContainer center={position} zoom={17} id="mapa" dragging={false} touchZoom={true}>
					<TileLayer attribution="Utiliza dos dedos para mover el mapa" url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
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
					<a href="https://maps.app.goo.gl/Vkrm9Q9WgTjezym8A" className="urlBtnGoogleMaps" onClick={apagarMusica}>
						CÓMO LLEGAR CON GOOGLE MAPS{" "}
						<svg height="25" viewBox="14.32 4.87961494 37.85626587 52.79038506" xmlns="http://www.w3.org/2000/svg">
							<path d="m37.34 7.82c-1.68-.53-3.48-.82-5.34-.82-5.43 0-10.29 2.45-13.54 6.31l8.35 7.02z" fill="#1a73e8" />
							<path d="m18.46 13.31a17.615 17.615 0 0 0 -4.14 11.36c0 3.32.66 6.02 1.75 8.43l10.74-12.77z" fill="#ea4335" />
							<path
								d="m32 17.92a6.764 6.764 0 0 1 5.16 11.13l10.52-12.51a17.684 17.684 0 0 0 -10.35-8.71l-10.51 12.51a6.74 6.74 0 0 1 5.18-2.42"
								fill="#4285f4"
							/>
							<path
								d="m32 31.44c-3.73 0-6.76-3.03-6.76-6.76a6.7 6.7 0 0 1 1.58-4.34l-10.75 12.77c1.84 4.07 4.89 7.34 8.03 11.46l13.06-15.52a6.752 6.752 0 0 1 -5.16 2.39"
								fill="#fbbc04"
							/>
							<path
								d="m36.9 48.8c5.9-9.22 12.77-13.41 12.77-24.13 0-2.94-.72-5.71-1.99-8.15l-23.57 28.05c1 1.31 2.01 2.7 2.99 4.24 3.58 5.54 2.59 8.86 4.9 8.86s1.32-3.33 4.9-8.87"
								fill="#34a853"
							/>
						</svg>
					</a>
				</motion.div>
			</motion.div>
		</div>
	)
}
