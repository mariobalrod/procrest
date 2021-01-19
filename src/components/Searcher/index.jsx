import React from 'react';
import './style.css';

import Icono from '../../assets/iconoSearcher.png'

function Searcher() {
    return (
        <div className="input-group" id="buscador">
            <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search"
                aria-describedby="search-addon" />
            <button type="button" className="btn btn-outline-primary"><img id="iconoSearcher" src={Icono} alt="" srcset=""/></button>
        </div>
    )
}

export default Searcher;