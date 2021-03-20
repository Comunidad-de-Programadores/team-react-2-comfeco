import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import { startGoogleLogin } from '../../actions/auth';
import { AuthContext } from '../../context/AuthContext';
import { login } from '../../actions/auth';
import apiUser from '../../shared/api/userRamdom';

const LoginUsuario = (props) => {
   const { register, errors, clearErrors, handleSubmit } = useForm();

   const { user, setUser } = useContext(AuthContext);


   // *EVENTOS : 
   const handleCorreoLogin = (data) => {

      //? Iniciar un usuario " FICTICIO "
      apiUser.getUser().then((data) => {

         login(data[0].id.value, data[0].email, data[0].name.first, data[0].picture.large, setUser);

      });
      clearErrors();
   }

   const handleGoogleLogin = (e) => {
      e.preventDefault();
      startGoogleLogin(setUser);

   };


   return (
      <div className="login-form">
         <form
            className="login-form__content"
            onSubmit={handleSubmit(handleCorreoLogin)}
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

            <button type="submit" value="Ingresar" className="btn btn-blue">
               Iniciar Sesión
            </button>

            <br />
            <div className="google-btn">
               <div className="google-icon-wrapper">
                  <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
               </div>
               <p className="btn-text" onClick={handleGoogleLogin}>Login Google </p>
            </div>

            {/* <pre>{JSON.stringify(user)}</pre> */}
         </form>
      </div>
   );
};

export default LoginUsuario;
