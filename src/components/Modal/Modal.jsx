import { useEffect } from "react"
import iconCopy from "../../utils/iconCopy.svg"
import "./Modal.css"
import { Popover } from "bootstrap"

export const Modal = () => {
	let copiarTexto = ""

	const handleCopy = (opcion) => {
		if (opcion == 1) {
			copiarTexto = "0000003100086083840616"
		} else {
			copiarTexto = "Evelin.brs"
		}

		navigator.clipboard.writeText(copiarTexto)
	}

	useEffect(() => {
		const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')

		popoverTriggerList.forEach((popover) => {
			const popoverInstance = new Popover(popover, {
				trigger: "manual", // No se activa automáticamente
				placement: "top",
			})

			popover.addEventListener("click", () => {
				popoverInstance.show()

				// Cierra el popover después de 3 segundos
				setTimeout(() => {
					popoverInstance.hide()
				}, 2000)
			})
		})
	}, [])

	return (
		<div id="modalRegalo" class="modal fade" tabindex="-1">
			<div class="modal-dialog modal-dialog-centered">
				<div class="containerModalRegalo modal-content">
					<div class="modal-header">
						<h5 class="modal-title">DATOS DE LA CUENTA</h5>
					</div>
					<div class="modal-body">
						<p>
							<b>Evelin Antonella Barros</b>
						</p>
						<p>
							CVU: <b>0000003100086083840616</b>
							<img
								src={iconCopy}
								alt=""
								id="copyCvu"
								className="iconCopy heartbeat"
								data-bs-container="body"
								data-bs-toggle="popover"
								data-bs-placement="top"
								data-bs-content="CVU COPIADO"
								onClick={() => handleCopy(1)}
							/>
						</p>
						<p>
							Alias: <b>Evelin.brs</b>
							<img
								src={iconCopy}
								alt=""
								id="copyAlias"
								className="iconCopy heartbeat"
								data-bs-container="body"
								data-bs-toggle="popover"
								data-bs-placement="top"
								data-bs-content="ALIAS COPIADO"
								onClick={() => handleCopy(2)}
							/>
						</p>
						<p>
							<b>Mercado Pago</b>
						</p>
					</div>
					<div class="modal-footer">
						<a className="closeModal" data-bs-dismiss="modal">
							VOLVER
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}
