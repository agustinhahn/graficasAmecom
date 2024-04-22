import graficas from "../data/graficas.json"
import ComponentGraph from "./ComponentGraph"

const ImgsGraph = () => {
    return (
        <div className="container">
            {
                graficas.map((item, index)=>(
                    <ComponentGraph key={index} titulo={item.titulo} link={item.link} />
                ))
            }
        </div>
    )
}

export default ImgsGraph