import React from 'react';
// import validator from 'validator';
import { useForm } from 'react-hook-form';
import Navegacion from '../Navegacion';
import Content from '../Content';
import { useState } from 'react';
import { recoverPass } from '../../actions/auth';

export const Recuperar = () => {
   const [alerta, setAlerta] = useState({
      alert: false,
      msg: 'Este campo es requerido',
   });

   const { register, handleSubmit, watch, errors } = useForm();
   const onSubmit = (data) => {
      console.log(register.length);
      console.log(data);
      // console.log(validator.isEmail(data.email));
      // if (!validator.isEmail(data.email)) {
      //    console.log('alerta activada');
      //    setAlerta({
      //       alert: true,
      //       msg: 'Ingresar un correo valido',
      //    });
      // } else {
      //    recoverPass(data.email);
      // }
   };

   const handleCorreo = (e) => {
      if (e.target.value.length > 0) {
         setAlerta({
            alert: false,
            msg: 'Este campo es requerido',
         });
      }
   };

   return (
      <Content>
         {
            <div className="recuperar">
               <div className="recuperar__container">
                  <h3 className="recuperar__title">Reasignar contraseña</h3>
                  <p className="recuperar__paragraph">
                     Te enviaremos un correo electrónico con un enlace privado
                     para que reasignes tu contraseña este enlace será valido
                     por una hora
                  </p>
                  <form onSubmit={handleSubmit(onSubmit)}>
                     <label className="recuperar__correo">
                        <input
                           placeholder=" "
                           name="email"
                           autoComplete="off"
                           onChange={handleCorreo}
                           ref={register({ required: true })}
                        />
                        <span className={alerta.alert ? '--active' : ''}>
                           Correo Electronico
                        </span>
                     </label>

                     <div
                        className={`recuperar__alerta${
                           alerta.alert ? '--active' : ''
                        }`}
                     >
                        <span>{alerta.msg}</span>
                     </div>
                     <div className="recuperar__enlace">
                        <button className="btn btn-blue" type="submit">
                           Enviar Enlace
                        </button>
                     </div>
                  </form>
               </div>
            </div>
         }
      </Content>
   );
};
