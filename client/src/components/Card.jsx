const Card = (props) => {
    
    return (
        <div className="card" onClick={props.onClick(props.id)}>
            <div className="img-wrapper">
                <img src={props.image} alt={props.name}></img>
            </div>
            <div className="info-wrapper">
                <h3>{props.name}</h3>
            </div>
        </div>
    )
}

export default Card