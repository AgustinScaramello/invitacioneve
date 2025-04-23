"use client"

import { motion } from "framer-motion"
import { useEffect, useRef } from "react"
import { useInView } from "framer-motion"
import Countdown from "react-countdown"
import calendar from "../../assets/calendar.gif"
import opendoor from "../../assets/opendoor.gif"
import dresscode from "../../assets/dresscode.gif"

import "./Cuando.css"
import { openSweetAlert } from "../../utils/ModalDesliza"

export const Cuando = () => {
	useEffect(() => {
		openSweetAlert()
	}, [])
	const fechaObjetivo = new Date("2025-05-17T22:00:00").getTime()

	// Referencias para detectar cuando las secciones están en el viewport
	const sectionRef1 = useRef(null)
	const sectionRef2 = useRef(null)
	const sectionRef3 = useRef(null)
	const sectionRef4 = useRef(null)

	// Configurar useInView con once: true para evitar que las animaciones se reinicien
	const isInView1 = useInView(sectionRef1, { once: true, amount: 0.3 })
	const isInView2 = useInView(sectionRef2, { once: true, amount: 0.3 })
	const isInView3 = useInView(sectionRef3, { once: true, amount: 0.3 })
	const isInView4 = useInView(sectionRef4, { once: true, amount: 0.3 })

	// Variantes para las animaciones de los iconos
	const iconVariants = {
		hidden: {
			opacity: 0,
			scale: 0.5,
			rotate: -10,
		},
		visible: {
			opacity: 1,
			scale: 1,
			rotate: 0,
			transition: {
				duration: 0.8,
				ease: "easeOut",
			},
		},
	}

	// Variantes para los títulos
	const titleVariants = {
		hidden: {
			opacity: 0,
			y: -20,
			filter: "blur(4px)",
		},
		visible: {
			opacity: 1,
			y: 0,
			filter: "blur(0px)",
			transition: {
				duration: 0.6,
				delay: 0.2,
				ease: "easeOut",
			},
		},
	}

	// Variantes para los subtítulos/fechas
	const subtitleVariants = {
		hidden: {
			opacity: 0,
			scale: 0.9,
			y: 20,
		},
		visible: {
			opacity: 1,
			scale: 1,
			y: 0,
			transition: {
				duration: 0.7,
				delay: 0.4,
				ease: [0.175, 0.885, 0.32, 1.275], // Efecto de rebote elegante
			},
		},
	}

	// Variantes para las líneas divisorias
	const lineVariants = {
		hidden: {
			scaleX: 0,
		},
		visible: {
			scaleX: 1,
			transition: {
				duration: 0.8,
				ease: "easeInOut",
			},
		},
	}

	// Variantes para la cuenta regresiva
	const countdownVariants = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
			transition: {
				duration: 0.5,
				staggerChildren: 0.1,
				delayChildren: 0.3,
			},
		},
	}

	// Variantes para cada número de la cuenta regresiva
	const numberVariants = {
		hidden: {
			opacity: 0,
			y: 30,
			scale: 0.8,
		},
		visible: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: {
				type: "spring",
				stiffness: 300,
				damping: 15,
			},
		},
	}

	// Variantes para los círculos separadores
	const circleVariants = {
		hidden: {
			opacity: 0,
			scale: 0,
		},
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 0.4,
			},
		},
	}

	// Renderizador personalizado para la cuenta regresiva con animaciones
	const countdownRenderer = ({ days, hours, minutes, seconds }) => (
		<motion.div className="containerCuentaRegresiva" variants={countdownVariants}>
			<motion.div
				className="containerNumerosCuenta"
				variants={numberVariants}
				whileHover={{
					scale: 1.1,
					transition: { duration: 0.2 },
				}}
			>
				<motion.h2
					className="numerosCuentas"
					animate={{
						scale: [1, 1.05, 1],
						transition: {
							duration: 1,
							repeat: Number.POSITIVE_INFINITY,
							repeatType: "reverse",
						},
					}}
				>
					{days}
				</motion.h2>
				<p className="textoCuenta">DÍAS</p>
			</motion.div>

			<motion.div className="containerCirculoCuenta" variants={circleVariants}>
				<motion.div
					className="circulitosCuenta"
					animate={{
						opacity: [1, 0.5, 1],
						transition: {
							duration: 1.5,
							repeat: Number.POSITIVE_INFINITY,
						},
					}}
				></motion.div>
			</motion.div>

			<motion.div
				className="containerNumerosCuenta"
				variants={numberVariants}
				whileHover={{
					scale: 1.1,
					transition: { duration: 0.2 },
				}}
			>
				<motion.h2
					className="numerosCuentas"
					animate={{
						scale: [1, 1.05, 1],
						transition: {
							duration: 1,
							repeat: Number.POSITIVE_INFINITY,
							repeatType: "reverse",
							delay: 0.2,
						},
					}}
				>
					{hours}
				</motion.h2>
				<p className="textoCuenta">HORAS</p>
			</motion.div>

			<motion.div className="containerCirculoCuenta" variants={circleVariants}>
				<motion.div
					className="circulitosCuenta"
					animate={{
						opacity: [1, 0.5, 1],
						transition: {
							duration: 1.5,
							repeat: Number.POSITIVE_INFINITY,
							delay: 0.3,
						},
					}}
				></motion.div>
			</motion.div>

			<motion.div
				className="containerNumerosCuenta"
				variants={numberVariants}
				whileHover={{
					scale: 1.1,
					transition: { duration: 0.2 },
				}}
			>
				<motion.h2
					className="numerosCuentas"
					animate={{
						scale: [1, 1.05, 1],
						transition: {
							duration: 1,
							repeat: Number.POSITIVE_INFINITY,
							repeatType: "reverse",
							delay: 0.4,
						},
					}}
				>
					{minutes}
				</motion.h2>
				<p className="textoCuenta">MINUTOS</p>
			</motion.div>

			<motion.div className="containerCirculoCuenta" variants={circleVariants}>
				<motion.div
					className="circulitosCuenta"
					animate={{
						opacity: [1, 0.5, 1],
						transition: {
							duration: 1.5,
							repeat: Number.POSITIVE_INFINITY,
							delay: 0.6,
						},
					}}
				></motion.div>
			</motion.div>

			<motion.div
				className="containerNumerosCuenta"
				variants={numberVariants}
				whileHover={{
					scale: 1.1,
					transition: { duration: 0.2 },
				}}
			>
				<motion.h2
					className="numerosCuentas"
					animate={{
						scale: [1, 1.05, 1],
						transition: {
							duration: seconds < 10 ? 0.5 : 1,
							repeat: Number.POSITIVE_INFINITY,
							repeatType: "reverse",
							delay: 0.6,
						},
					}}
				>
					{seconds}
				</motion.h2>
				<p className="textoCuenta">SEGUNDOS</p>
			</motion.div>
		</motion.div>
	)

	return (
		<div id="containerGeneralCuando" className="abrirModalDesliza">
			{/* Primera sección - Fecha */}
			<motion.div className="containerCuando" ref={sectionRef1} initial="hidden" animate={isInView1 ? "visible" : "hidden"}>
				<motion.img
					className="iconCalendar"
					src={calendar}
					alt=""
					variants={iconVariants}
					whileHover={{
						rotate: [0, -5, 5, -5, 0],
						transition: { duration: 0.5 },
					}}
				/>
				<motion.h1 className="cuandoFecha" variants={titleVariants}>
					¡NUEVO DÍA!
				</motion.h1>
				<motion.h1
					className="fechaCumple"
					variants={subtitleVariants}
					whileHover={{
						scale: 1.05,
						color: "#FF1493",
						transition: { duration: 0.3 },
					}}
				>
					SÁBADO 17 DE MAYO 2025
				</motion.h1>
			</motion.div>

			{/* Línea divisoria */}
			<motion.div className="containerLinea" initial="hidden" animate={isInView1 ? "visible" : "hidden"} variants={lineVariants}>
				<div className="linea"></div>
			</motion.div>

			{/* Segunda sección - Cuenta regresiva */}
			<motion.div className="containerCuando" ref={sectionRef2} initial="hidden" animate={isInView2 ? "visible" : "hidden"}>
				<motion.div variants={titleVariants}>
					<h2 className="textFaltan">FALTAN . . .</h2>
				</motion.div>
				<Countdown date={fechaObjetivo} renderer={countdownRenderer} />
			</motion.div>

			{/* Línea divisoria */}
			<motion.div className="containerLinea" initial="hidden" animate={isInView2 ? "visible" : "hidden"} variants={lineVariants}>
				<div className="linea"></div>
			</motion.div>

			{/* Tercera sección - Open Doors */}
			<motion.div className="containerCuando" ref={sectionRef3} initial="hidden" animate={isInView3 ? "visible" : "hidden"}>
				<motion.img
					className="iconOpendoor"
					src={opendoor}
					alt=""
					variants={iconVariants}
					whileHover={{
						scale: 1.1,
						transition: { duration: 0.3 },
					}}
				/>
				<motion.h1 className="tituloOpendoor" variants={titleVariants}>
					HORARIO
				</motion.h1>
				<motion.h1
					className="horaOpendoor"
					variants={subtitleVariants}
					whileHover={{
						scale: 1.05,
						color: "#9370DB",
						transition: { duration: 0.3 },
					}}
				>
					22:00 hs.
				</motion.h1>
			</motion.div>

			{/* Línea divisoria */}
			<motion.div className="containerLinea" initial="hidden" animate={isInView3 ? "visible" : "hidden"} variants={lineVariants}>
				<div className="linea"></div>
			</motion.div>

			{/* Cuarta sección - Dress Code */}
			<motion.div className="containerCuando" ref={sectionRef4} initial="hidden" animate={isInView4 ? "visible" : "hidden"}>
				<motion.img
					className="iconDresscode"
					src={dresscode}
					alt=""
					variants={iconVariants}
					whileHover={{
						rotate: [0, -5, 5, -5, 0],
						transition: { duration: 0.5 },
					}}
				/>
				<motion.h1 className="tituloDresscode" variants={titleVariants}>
					DRESS CODE
				</motion.h1>
				<motion.h1
					className="horaDresscode"
					variants={subtitleVariants}
					whileHover={{
						scale: 1.05,
						color: "#00CED1",
						transition: { duration: 0.3 },
					}}
				>
					ELEGANTE
				</motion.h1>
			</motion.div>
		</div>
	)
}
