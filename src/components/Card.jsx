import "./Card.css"

function Card(props) {
    const item = props.item

    return (
        <div className="card">
            <h2>{item.name}</h2>
            <img width="150" src={item.imageUrl} />
        </div>
    )
}

export default Card