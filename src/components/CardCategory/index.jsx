import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom';

function CardCategory(props) {
  return (
    <Link to={`/apartments?category=${props.id}`} className="cardCategory">
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
    </Link>
  );
}

export default CardCategory;