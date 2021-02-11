import React, { useState } from 'react';

const LoginUsuario = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   function manejarSubmit(e) {
      e.preventDefault();
      alert(`Mostar datos enviados ${email} ${password}`);
   }

   return (
      <div>
         <form onSubmit={manejarSubmit}>
            <input
               value={email}
               name="email"
               type="text"
               onChange={(e) => setEmail(e.target.value)}
            />
            <input
               value={password}
               name="password"
               type="password"
               onChange={(e) => setPassword(e.target.value)}
            />
            <input type="submit" value="Ingresar" />
         </form>
      </div>
   );
};

export default LoginUsuario;
