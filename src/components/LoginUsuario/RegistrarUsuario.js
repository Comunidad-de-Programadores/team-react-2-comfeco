import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const RegistrarUsuario = () => {
   const { register, handleSubmit, watch, errors } = useForm();

   const [nick, setNick] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');

   function registroSubmit(e) {
      if (password !== confirmPassword) {
         alert('Pass no coicide');
      } else alert('Todo OK');
   }

   return (
      <div className="registro-form">
         <form onSubmit={registroSubmit} className="registro-form__content">
            <input
               value={nick}
               name="nick"
               type="text"
               className="input-container"
               autoComplete="off"
               placeholder="Nick"
               onChange={(e) => setNick(e.target.value)}
            />
            <input
               value={email}
               name="email"
               type="text"
               className="input-container"
               autoComplete="off"
               placeholder="Email"
               onChange={(e) => setEmail(e.target.value)}
            />
            <input
               value={password}
               name="password"
               className="input-container"
               type="password"
               placeholder="Password"
               onChange={(e) => setPassword(e.target.value)}
            />
            <input
               value={confirmPassword}
               name="confirmPassword"
               type="password"
               className="input-container"
               placeholder="Confirm Password"
               onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <button type="submit" value="Ingresar" className="btn btn-purple">
               Crear una cuenta
            </button>
            <div className="registro-form__terms">
               <p>
                  Al registrarte, estas aceptando los{' '}
                  <a href="">terminos y condiciones</a> y la{' '}
                  <a href="">Politica de privacidad y proteccion de datos</a> de COMFECO
               </p>
            </div>
         </form>
      </div>
   );
};

export default RegistrarUsuario;
