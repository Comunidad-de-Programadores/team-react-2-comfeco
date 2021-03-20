import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Terminos, { Politica } from './Modal';
import Popup from 'reactjs-popup';
import { registro } from '../../actions/auth';

const schema = yup.object().shape({
   username: yup.string().required(),
   email: yup.string().email().required(),
   password: yup.string().min(6).required(), //min(int).max(int)
   confirmPassword: yup.string().oneOf([yup.ref('password'), null]),
});

const RegistrarUsuario = () => {
   const { register, handleSubmit, watch, errors } = useForm({
      resolver: yupResolver(schema),
   });

   function registroSubmit(data) {
      registro(data);
   }

   return (
      <div className="registro-form">
         <form
            onSubmit={handleSubmit(registroSubmit)}
            className="registro-form__content"
         >
            <div className='input-container'>
            <span>Usuario</span>
            <input
               name="username"
               type="text"
               className=""
               autoComplete="off"
               ref={register}
            />
            </div>
            {errors.username?.message && (
               <span className="errors-msg"> Nick es requerido </span>
            )}
            <div className='input-container'>
            <span>Correo Electronico</span>
            <input
               name="email"
               type="text"
               className=""
               autoComplete="off"               
               ref={register}
            />
            </div>
            {errors.email?.message && (
               <span className="errors-msg"> Ingrese un email válido </span>
            )}
            <div className='input-container'>
            <span>Contrasena</span>
            <input
               name="password"
               className=""
               type="password"
               ref={register}
            />
            </div>
            {errors.password?.type === 'required' && (
               <span className="errors-msg"> Password es requerido </span>
            )}
            {errors.password?.type === 'min' && (
               <span className="errors-msg"> Password min 6 caracteres</span>
            )}
            <div className='input-container'>
            <span>Confirmar contrasena</span>
            <input
               name="confirmPassword"
               type="password"
               className=""
               ref={register}
            />
            </div>
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
