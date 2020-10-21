import react from "react";

const Card = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.date}</h2>
            <img src = {props.img} alt = "potd" />
            <p>{props.explanation}</p>
        </div>
    )
}

export default Card;