import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"
import corona from "../../utils/corona.png"
import videoMariposa from "../../utils/videoBrillos.mp4"

import "./Evento.css"
import { Scrollear } from "../Scrollear/Scrollear"

// Componente para el efecto de brillo/resplandor
const Sparkles = ({ children }) => {
    return <div className="sparkles-container">{children}</div>
}

export const Evento = () => {
    const containerRef = useRef(null)
    const isInView = useInView(containerRef, { once: true, amount: 0.3 })

    // Variantes para la animación de la corona
    const coronaVariants = {
        hidden: {
            opacity: 0,
            y: -50,
            scale: 0.5,
            rotate: -10,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            rotate: 25,
            transition: {
                duration: 1.2,
                ease: [0.175, 0.885, 0.32, 1.275], // Efecto de rebote elegante
                delay: 0.2,
            },
        },
    }

    // Variantes para la animación del nombre
    const nameVariants = {
        hidden: {
            opacity: 0,
            scale: 0.8,
            filter: "blur(8px)",
        },
        visible: {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            transition: {
                duration: 1.5,
                ease: "easeOut",
                delay: 1.0,
            },
        },
    }

    // Variantes para la animación del título
    const titleVariants = {
        hidden: {
            opacity: 0,
            y: 30,
            scale: 1.2,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                delay: 1.8,
            },
        },
    }

    // Variantes para el contenedor principal
    const containerVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
                when: "beforeChildren",
            },
        },
    }

    // Efecto de confeti - versión segura para SSR
    const Confetti = () => {
        const confettiCount = 50
        const colors = ["#007F5F", "#2B9348", "#55A630", "#80B918", "#AACC00", "#BFD200", "#D4D700", "#DDDF00", "#EEEF20", "#FFFF3F"]

        return (
            <div className="confetti-container">
                {[...Array(confettiCount)].map((_, i) => {
                    const size = Math.random() * 10 + 5
                    const color = colors[Math.floor(Math.random() * colors.length)]
                    const randomX = Math.random() * 100 // Porcentaje del ancho
                    const randomDelay = Math.random() * 5
                    const randomDuration = Math.random() * 3 + 4

                    return (
                        <motion.div
                            key={i}
                            className="confetti-piece"
                            initial={{
                                x: `${randomX}vw`,
                                y: -20,
                                opacity: 1,
                                rotate: 0,
                            }}
                            animate={{
                                y: "100vh",
                                rotate: Math.random() * 360,
                                opacity: [1, 1, 0.5, 0],
                            }}
                            transition={{
                                duration: randomDuration,
                                delay: randomDelay,
                                repeat: Number.POSITIVE_INFINITY,
                                repeatDelay: Math.random() * 5 + 5,
                            }}
                            style={{
                                width: size,
                                height: size,
                                backgroundColor: color,
                                borderRadius: Math.random() > 0.5 ? "50%" : "0%",
                                position: "absolute",
                                top: 0,
                                left: 0,
                            }}
                        />
                    )
                })}
            </div>
        )
    }

    return (
        <motion.div id="containerEventoFondo" ref={containerRef} initial="hidden" animate={isInView ? "visible" : "hidden"} variants={containerVariants}>
            <Scrollear />

            <video autoPlay loop muted playsInline className="background-video">
                <source src={videoMariposa} type="video/mp4" />
                Tu navegador no soporta videos en HTML5.
            </video>
            <motion.div id="containerEventoFondoSinFondo" ref={containerRef} initial="hidden" animate={isInView ? "visible" : "hidden"} variants={containerVariants}></motion.div>

            <motion.div
                id="containerEvento"
                initial={{ background: "rgba(255, 255, 255, 0)" }}
                animate={{
                    background: isInView ? "rgba(0, 0, 0, 0)" : "rgba(255, 255, 255, 0)",
                }}
                transition={{ delay: 0.5, duration: 1.5 }}
            >
                <motion.div id="containerTituloEvento">
                    <Sparkles>
                        <motion.img
                            id="corona"
                            src={corona}
                            alt="corona"
                            variants={coronaVariants}
                            whileHover={{
                                scale: 1.1,
                                rotate: [0, -5, 5, -5, 0],
                                transition: { duration: 0.5 },
                            }}
                        />
                    </Sparkles>

                    <motion.h1
                        className="fuenteCursiva"
                        id="nombreEvelin"
                        variants={nameVariants}
                        whileHover={{
                            scale: 1.05,
                            color: "#FF1493",
                            textShadow: "0px 0px 8px rgba(255, 20, 147, 0.5)",
                            transition: { duration: 0.3 },
                        }}
                    >
                        Evelin
                    </motion.h1>

                    <motion.h2
                        id="tituloMisXv"
                        variants={titleVariants}
                        whileHover={{
                            scale: 1.1,
                            transition: { duration: 0.3 },
                        }}
                    >
                        ¡MIS XV!
                    </motion.h2>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}
