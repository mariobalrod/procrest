import React from 'react'
import './styles.css'



function CardCategory(props) {
    return (
        <div>
            <div className="card" >
                <div className="row no-gutters">
                    <div className="col-sm-5">
                        <div className={props.imagen}></div>
                    </div>
                    <div className="col-sm-7">
                        <div className="card-body">
                            <h5 className="card-title">{props.titulo}</h5>
                            <p className="card-text">{props.descripcion}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardCategory;