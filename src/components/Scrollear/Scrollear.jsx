import scrollear from "../../utils/scrollear.svg"
import "./Scrollear.css"

export const Scrollear = ({ idDestino }) => {
    const handleClick = () => {
        const elemento = document.getElementById(idDestino)
        if (elemento) {
            elemento.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <div className="containerScrollear" onClick={handleClick}>
            <img className="scrollear" src={scrollear} alt="Flecha hacia abajo" />
        </div>
    )
}
