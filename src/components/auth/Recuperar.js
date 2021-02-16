import React from 'react';
import validator from 'validator';
import { useForm } from "react-hook-form";

export const Recuperar = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        console.log( data );
        console.log( validator.isEmail( data.email ));
    };
    console.log(watch("example")); // watch input value by passing the name of it


    return (
        <div className="container">
            <div className="sub-container" >
                <h3 className="title" >Reasignar contraseña</h3>
                <p className="paragraph" >Te enviaremos un correo electrónico con un enlace privado para que reasignes tu contraseña este enlace será valido por una hora
                </p>
                <form onSubmit={handleSubmit(onSubmit)}  >
                    <br/>
                        <input 
                            className="input-container" 
                            placeholder="Correo electrónico" 
                            name="email"
                            ref={register({ required: true })}
                        />
                    <br/>
                    <br/>
                    { 
                        errors.email &&
                            <div style={{ marginBottom:7 }}>
                                 <span>
                                    Este campo es requerido
                                </span>
                            </div>
                    }
                    <div className="colum" >
                        <button className="btn-send" type="submit" >Enviar Enlace</button>
                        <button className="btn-login" >Iniciar Sessión</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
