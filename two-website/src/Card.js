import React from "react"

const Card = ({image_url, title, card_text, button_text}) => (
    <div className="card" style={{width: "18rem"}}>
    <img
      src={image_url}
      className="card-img-top"
      alt="..."
    />
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">
        {card_text}
      </p>
<a href="#" className="btn btn-success">{button_text}</a>
    </div>
  </div>

)

export default Card