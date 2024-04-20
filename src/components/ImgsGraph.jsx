import graficas from "../data/graficas.json"

const ImgsGraph = () => {
    return (
        <div>
            {
                graficas.map((item, index)=>(
                    <div key={index}>
                        <h2>{item.titulo}</h2>
                        <img src={item.link} />
                    </div>
                ))
            }
        </div>
    )
}

export default ImgsGraph