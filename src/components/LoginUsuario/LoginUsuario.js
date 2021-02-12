import React, { useState } from 'react';

const LoginUsuario = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   function manejarSubmit(e) {
      e.preventDefault();
      alert(`Mostar datos enviados ${email} ${password}`);
   }

   return (
      <div className="container">
         <form className="sub-container" onSubmit={manejarSubmit}>
            <input
               value={email}
               name="email"
               type="text"
               onChange={(e) => setEmail(e.target.value)}
               placeholder="Ingrese su email"
               className="input-container"
               style={{ marginBottom: '20px' }}
            />
            <input
               value={password}
               name="password"
               type="password"
               onChange={(e) => setPassword(e.target.value)}
               placeholder="Ingrese su password"
               className="input-container"
               style={{ marginBottom: '20px' }}
            />
            <input className="btn btn-send" type="submit" value="Ingresar" />
         </form>
      </div>
   );
};

export default LoginUsuario;
