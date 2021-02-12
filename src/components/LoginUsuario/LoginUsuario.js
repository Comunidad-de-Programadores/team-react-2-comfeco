import React, { useState } from 'react';

const LoginUsuario = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   function manejarSubmit(e) {
      e.preventDefault();
      alert(`Mostar datos enviados ${email} ${password}`);
   }

   return (
      <>

         <section className="login-form">
            <form onSubmit={manejarSubmit} className="login-form__content">
               <input
                  value={email}
                  name="email"
                  type="text"
                  autoComplete="off"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
               />
               <input
                  value={password}
                  name="password"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
               />
               {/* <input type="submit" value="Ingresar" /> */}
             
               <button type="submit" value= "Ingresar" className= "btn btn-purple">
                  Ingresar

               </button>
            </form>
         </section>

      </>
   );
};

export default LoginUsuario;
