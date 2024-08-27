import React from 'react';
import imagen from './img/estrella.png';

function Titulos(){
    return(
    <div className="container">
        <h1>Numero aleatorio</h1>
        <img className="img_estrella" src={imagen} alt="Estrella"></img>
    </div>
    );
}

export default Titulos;