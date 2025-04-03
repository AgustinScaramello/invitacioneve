import scrollear from "../../utils/scrollear.svg"
import "./Scrollear.css"

export const Scrollear = () => {
    return (
        <div className="containerScrollear">
            <img className="scrollear" src={scrollear} alt="" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="left" data-bs-content="¡DESLIZA!" />
        </div>
    )
}
