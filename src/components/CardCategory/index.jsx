import React from 'react'
import './styles.css'



function CardCategory(props) {
  return (
    <div className="cardCategory">
        {console.log(props.image)}
        <div
          className="imageCat"
          style={{
            width: '100%',
            height: '100%',
            background: `url(${props.image}) no-repeat center center`,
            backgroundSize: "cover",
            borderTopLeftRadius: '15px',
            borderBottomLeftRadius: '15px',
          }}
        ></div>

      <div className="contentCat">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
      </div>
    </div>
  );
}

export default CardCategory;