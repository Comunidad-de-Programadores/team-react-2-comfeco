import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { startGoogleLogin } from '../../actions/auth';
import { AuthContext } from '../../context/AuthContext';

const LoginUsuario = () => {

   const { register, errors, clearErrors, handleSubmit } = useForm();
   
   const { user, setUser } = useContext( AuthContext );
   

   function manejarSubmit(data) {
      console.log(data);
      clearErrors();
   }

   const handleGoogleLogin = ( e ) => {
      e.preventDefault();

      startGoogleLogin( setUser );

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
               style={{ marginBottom: '20px' }}
               ref={register({ required: true })}
            />
            {errors.password && (
               <span className="errors-msg"> Password es requerido </span>
            )}

            <button type="submit" value="Ingresar" className="btn btn-purple" onClick={ handleGoogleLogin } >
               Iniciar Sesión
            </button>

            <br/>
            <pre>

               {
                  JSON.stringify( user )
               }
            </pre>
         </form>
      </div>
   );
};

export default LoginUsuario;
