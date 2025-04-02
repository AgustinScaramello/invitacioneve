import { useRef } from "react"
import { motion, useInView } from "framer-motion"

function ParallaxSection({ children, id, variant = "default" }) {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: false, amount: 0.3 })

	// Diferentes variantes de animaciones extravagantes
	const variants = {
		default: {
			hidden: { opacity: 0, y: 100 },
			visible: {
				opacity: 1,
				y: 0,
				transition: {
					duration: 0.8,
					ease: "easeOut",
				},
			},
		},
		evento: {
			hidden: { opacity: 0, scale: 0.8, rotate: -5 },
			visible: {
				opacity: 1,
				scale: 1,
				rotate: 0,
				transition: {
					duration: 0.8,
					ease: [0.175, 0.885, 0.32, 1.275], // Efecto de rebote
				},
			},
		},
		cuando: {
			hidden: { opacity: 0, x: -100, filter: "blur(8px)" },
			visible: {
				opacity: 1,
				x: 0,
				filter: "blur(0px)",
				transition: {
					duration: 0.7,
					ease: "easeOut",
				},
			},
		},
		donde: {
			hidden: { opacity: 0, y: 50, scale: 0.9 },
			visible: {
				opacity: 1,
				y: 0,
				scale: 1,
				transition: {
					type: "spring",
					stiffness: 400,
					damping: 10,
				},
			},
		},
		asistencia: {
			hidden: { opacity: 0, rotateY: 90 },
			visible: {
				opacity: 1,
				rotateY: 0,
				transition: {
					duration: 0.4,
					ease: "easeOut",
				},
			},
		},
	}

	// Seleccionar la variante según el ID o usar la predeterminada
	const selectedVariant = variants[id] || variants[variant] || variants.default

	return (
		<section className="parallax-section" id={id} ref={ref}>
			<motion.div className="parallax-content" initial="hidden" animate={isInView ? "visible" : "hidden"} variants={selectedVariant}>
				{children}
			</motion.div>
		</section>
	)
}

export default ParallaxSection
