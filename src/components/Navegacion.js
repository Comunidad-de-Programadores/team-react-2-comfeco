import React from 'react';
import { useHistory } from 'react-router-dom';

import logo from '../assets/logo3.png';

const Navegacion = ({ children }) => {

    const history = useHistory();

    const handleLogin = ( e ) => {
        e.preventDefault();
        history.push('/');
    }

    return (
        <>
        <header className= "navegacion">
            <div className="navegacion__img">
            <img src = {logo}/>
            </div>

            <div className= "navegacion__btn ">
                <button className="btn btn-purple" onClick={ handleLogin }>Iniciar Sesion</button>
            </div>
        </header>
        {
            children    
        }
            
        </>
    )
}



export default Navegacion;
