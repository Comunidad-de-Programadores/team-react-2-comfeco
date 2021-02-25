import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Terminos, { Politica } from './Modal';
import Popup from 'reactjs-popup';

const schema = yup.object().shape({
   nick: yup.string().required(),
   email: yup.string().email().required(),
   password: yup.string().required(), //min(int).max(int)
   confirmPassword: yup.string().oneOf([yup.ref('password'), null]),
});

const RegistrarUsuario = () => {
   const { register, handleSubmit, watch, errors } = useForm({
      resolver: yupResolver(schema),
   });

   function registroSubmit(data) {
      console.log(data);
   }

   return (
      <div className="registro-form">
         <form
            onSubmit={handleSubmit(registroSubmit)}
            className="registro-form__content"
         >
            <input
               name="nick"
               type="text"
               className="input-container"
               autoComplete="off"
               placeholder="Nick"
               ref={register}
            />
            {errors.nick?.message && (
               <span className="errors-msg"> Nick es requerido </span>
            )}
            <input
               name="email"
               type="text"
               className="input-container"
               autoComplete="off"
               placeholder="Email"
               ref={register}
            />
            {errors.email?.message && (
               <span className="errors-msg"> Ingrese un email válido </span>
            )}

            <input
               name="password"
               className="input-container"
               type="password"
               placeholder="Password"
               ref={register}
            />
            {errors.password?.message && (
               <span className="errors-msg"> Password es requerido </span>
            )}
            <input
               name="confirmPassword"
               type="password"
               className="input-container"
               placeholder="Confirm Password"
               ref={register}
            />
            {errors.confirmPassword && (
               <span className="errors-msg"> Password no coincide</span>
            )}
            <button type="submit" value="Ingresar" className="btn btn-purple">
               Crear una cuenta
            </button>
            <div className="registro-form__terms">
               <p>
                  Al registrarte, estas aceptando los{' '}
                  <Popup
                     trigger={
                        <a href="javascript:void(0)">
                           {' '}
                           terminos y condiciones{' '}
                        </a>
                     }
                     modal
                     lockScroll
                  >
                     {(close) => (
                        <div className="modal">
                           <span className="close" onClick={close}>
                              &times;
                           </span>
                           <Terminos />
                        </div>
                     )}
                  </Popup>
                  terminos y condiciones y la{' '}
                  <Popup
                     trigger={
                        <a href="javascript:void(0)">
                           {' '}
                           politicas de privacidad{' '}
                        </a>
                     }
                     modal
                     lockScroll
                  >
                     {(close) => (
                        <div className="modal">
                           <span className="close" onClick={close}>
                              &times;
                           </span>
                           <Politica />
                        </div>
                     )}
                  </Popup>{' '}
                  de COMFECO
               </p>
            </div>
         </form>
      </div>
   );
};

export default RegistrarUsuario;
