import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const LoginUsuario = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const { register, errors, handleSubmit } = useForm();

   function manejarSubmit(data) {
      //e.preventDefault();
      console.log(data);
      // alert(`Mostar datos enviados ${email} ${password}`);
   }

   return (
      <div className="login-form">
         <form
            className="login-form__content"
            onSubmit={handleSubmit(manejarSubmit)}
         >
            <input
               value={email}
               name="email"
               type="text"
               onChange={(e) => setEmail(e.target.value)}
               placeholder="Ingrese su email"
               className="input-container"
               autoComplete="off"
               ref={register({ required: true })}
            />
            {errors.email && 'Email is required'}
            <input
               value={password}
               name="password"
               type="password"
               onChange={(e) => setPassword(e.target.value)}
               placeholder="Ingrese su password"
               className="input-container"
               style={{ marginBottom: '20px' }}
               ref={register({ required: true })}
            />
            {errors.password && 'Password is required'}

            <button type="submit" value="Ingresar" className="btn btn-purple">
               Iniciar Sesión
            </button>
         </form>
      </div>
   );
};

export default LoginUsuario;
