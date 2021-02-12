import React from 'react';

export const Recuperar = () => {
   return (
      <div className="container">
         <div className="sub-container">
            <h3 className="title">Reasignar contraseña</h3>
            <p className="paragraph">
               Te enviaremos un correo electrónico con un enlace privado para
               que reasignes tu contraseña este enlace será valido por una hora
            </p>
            <br />
            <input
               className="input-container"
               placeholder="Correo electrónico"
            />
            <br />
            <br />
            <div className="colum">
               <button className="btn btn-send">Enviar Enlace</button>
               <button className="btn btn-login">Iniciar Sessión</button>
            </div>
         </div>
      </div>
   );
};
