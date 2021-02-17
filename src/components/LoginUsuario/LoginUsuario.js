import React, { useState } from 'react';


const LoginUsuario = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   function manejarSubmit(e) {
      e.preventDefault();
      alert(`Mostar datos enviados ${email} ${password}`);
   }

  

   return (

      <div className="login-form"> {/* className = container  */}
         <form className="login-form__content" onSubmit={manejarSubmit}> {/* className = sub-container */}
            

            <input
               value={email}
               name="email"
               type="text"
               onChange={(e) => setEmail(e.target.value)}
               placeholder="Ingrese su email"
               className="input-container"
               autoComplete='off'


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
            {/* <input className="btn btn-send" type="submit" value="Ingresar" /> */}
            <button type="submit" value="Ingresar" className="btn btn-purple">
               Ingresar
            </button>
         </form>
         
      </div>
   );
};

export default LoginUsuario;
