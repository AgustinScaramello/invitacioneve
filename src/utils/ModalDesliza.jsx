import Swal from "sweetalert2/dist/sweetalert2.js"
import "sweetalert2/src/sweetalert2.scss"
import scrollear from "../assets/scrollear.svg"

const mostrarModalDesliza = () => {
	Swal.fire({
		html: `<p class="fuenteModalDesliza">¡DESLIZÁ HACIA ABAJO!</p>
		       <div class="containerScrollear">
					<img
						class="scrollear"
						src="${scrollear}"
						alt="Icono de scroll"
					/>
				</div>`,
		showConfirmButton: false,
		timer: 2000,
		customClass: {
			popup: "modalDesliza",
		},
	})
}

export const openSweetAlert = () => {
	const contenedores = document.querySelectorAll(".abrirModalDesliza")
	const mostrados = new Set()

	const estaEnPantalla = (el) => {
		const rect = el.getBoundingClientRect()
		const altoVentana = window.innerHeight || document.documentElement.clientHeight
		return rect.top >= 0 && rect.top < altoVentana * 0.6 // visible al menos 60% arriba
	}

	const chequeoScroll = () => {
		contenedores.forEach((el) => {
			if (estaEnPantalla(el) && !mostrados.has(el)) {
				mostrados.add(el)

				setTimeout(() => {
					if (estaEnPantalla(el)) {
						mostrarModalDesliza()
					}
				}, 5000) // espera 5 segundos luego de estar visible
			}
		})
	}

	window.addEventListener("scroll", chequeoScroll)
	window.addEventListener("resize", chequeoScroll)
	chequeoScroll() // también ejecuta al inicio por si ya hay uno visible
}
