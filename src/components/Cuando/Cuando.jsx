import Countdown from "react-countdown"
import calendar from "../../utils/calendar.gif"
import "./Cuando.css"

export const Cuando = () => {
	const fechaObjetivo = new Date("2025-05-02T22:00:00").getTime()

	return (
		<div id="containerCuando">
			<div className="containerFecha">
				<img className="iconCalendar" src={calendar} alt="" />
				<h1 className="cuandoFecha">¿CUANDO?</h1>
				<h1 className="fechaCumple">2 DE MAYO 2025</h1>
			</div>
			<div className="containerLinea">
				<div className="linea"></div>
			</div>
			<div className="containerFaltanCuenta">
				<div>
					<h2 className="textFaltan">FALTAN . . .</h2>
				</div>
				<Countdown
					date={fechaObjetivo}
					renderer={({ days, hours, minutes, seconds }) => (
						<div className="containerCuentaRegresiva">
							<div className="containerNumerosCuenta">
								<h2 className="numerosCuentas">{days}</h2>
								<p className="textoCuenta">DÍAS</p>
							</div>
							<div className="containerCirculoCuenta">
								<div className="circulitosCuenta"></div>
							</div>
							<div className="containerNumerosCuenta">
								<h2 className="numerosCuentas">{hours}</h2>
								<p className="textoCuenta">HORAS</p>
							</div>
							<div className="containerCirculoCuenta">
								<div className="circulitosCuenta"></div>
							</div>
							<div className="containerNumerosCuenta">
								<h2 className="numerosCuentas">{minutes}</h2>
								<p className="textoCuenta">MINUTOS</p>
							</div>
							<div className="containerCirculoCuenta">
								<div className="circulitosCuenta"></div>
							</div>
							<div className="containerNumerosCuenta">
								<h2 className="numerosCuentas">{seconds}</h2>
								<p className="textoCuenta">SEGUNDOS</p>
							</div>
						</div>
					)}
				/>
			</div>
			<div className="containerLinea">
				<div className="linea"></div>
			</div>
		</div>
	)
}
