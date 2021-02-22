import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const LoginUsuario = (props) => {
   const { register, errors, clearErrors, handleSubmit } = useForm();

   function manejarSubmit(data) {
      console.log(data);
      const senddata = {
         email: data.email,
         isLogin: true,
      };
      props.LoginAppfunction(senddata);
      clearErrors();
   }

   return (
      <div className="login-form">
         <form
            className="login-form__content"
            onSubmit={handleSubmit(manejarSubmit)}
         >
            <input
               name="email"
               type="text"
               placeholder="Ingrese su email"
               className="input-container"
               autoComplete="off"
               ref={register({
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
               })}
            />
            {errors.email?.type === 'required' && (
               <span className="errors-msg"> Email es requerido </span>
            )}
            {errors.email?.type === 'pattern' && (
               <span className="errors-msg"> Email no es válido </span>
            )}
            <input
               name="password"
               type="password"
               placeholder="Ingrese su password"
               className="input-container"
               ref={register({ required: true })}
            />
            {errors.password && (
               <span className="errors-msg"> Password es requerido </span>
            )}

            <Link style={{ marginBottom: '20px' }} to="/auth/recuperar">
               ¿Olvidaste tu contraseña?
            </Link>

            <button type="submit" value="Ingresar" className="btn btn-purple">
               Iniciar Sesión
            </button>
         </form>
      </div>
   );
};

export default LoginUsuario;
