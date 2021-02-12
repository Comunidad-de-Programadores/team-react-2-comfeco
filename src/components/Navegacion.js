import React from 'react';
import logo from '../assets/logo3.png';

const Navegacion = () => {
    return (
        <>
        <header className= "navegacion">
            <div className="navegacion__img">
            <img src = {logo}/>
            </div>

            <div className= "navegacion__btn">
                <button className="btn btn-purple">Iniciar Sesion</button>
            </div>
        </header>

            
        </>
    )
}

export default Navegacion
