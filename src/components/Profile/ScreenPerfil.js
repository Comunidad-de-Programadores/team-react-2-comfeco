import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

import DatePicker from "react-datepicker";
import CountrySelect from 'react-bootstrap-country-select';

import 'bootstrap/dist/css/bootstrap.css'; 
import 'react-bootstrap-country-select/dist/react-bootstrap-country-select.css';

import "react-datepicker/dist/react-datepicker.css";
import { saveDataFirebase } from '../../actions/auth';
import { AuthContext } from '../../context/AuthContext';
import { useForm } from 'react-hook-form';


export const ScreenPerfil = () => {

    
    const { register, handleSubmit, setValue } = useForm();    
    
    const { user, setDataUser, dataUser } = useContext( AuthContext );
    
    const [ country, setCountry ] = useState(( dataUser.value !== '' ) ? `${ dataUser.value }`: 'fr');
    
    const [ startDate, setStartDate ] = useState( new Date() );

    const onSubmit = ( data ) => {

        saveDataFirebase( user.uid, data, startDate, country, setDataUser );
    };

    useEffect(() => {
        if ( dataUser ) {
            setValue( "nick", dataUser.nick );
            setValue( "email", dataUser.email );
            setValue( "genero", dataUser.genero );
            setValue( "facebook", dataUser.facebook );
            setValue( "Biography", dataUser.Biography );
            setValue( "Biography", dataUser.Biography );
            setValue( "linkedin", dataUser.linkedin );
            setValue( "twitter", dataUser.twitter );
            setValue( "gitHub", dataUser.gitHub );
            setValue( "confirmPassword", dataUser.confirmPassword );
            setValue( "password", dataUser.password );
        }
    }, [ dataUser ]);
     
    return (
        <div className="contain">
            <div className="wrapper">
                <div className="form">
                    <form >
                        <div className="grid-container" >
                            <div className="grid-item-center" >
                                <div className="container-center" >
                                    <div className="content-block dx-card responsive-paddings">
                                        <div className="form-avatar">
                                            <label className="label-title">Editar Perfil</label>
                                            <img src="https://midu.dev/images/tags/github.png"/>
                                            <label className="label-subtitle">cambiar</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <div className="grid-container-colum-2" >
                            <div className="grid-item" >
                                <label className="label" >Nick</label>  
                                <input className="gg-bound-control-input"
                                    type="text" 
                                    name="nick"
                                    placeholder="Nick de usuario" 
                                    ref={ register }
                                />
                            </div>
                            <div className="grid-item" >
                            <label className="label">Correo</label>
                                <input className="gg-bound-control-input"
                                    type="email" 
                                    name="email"
                                    autoComplete="off"
                                    placeholder="example@gmail.com"  
                                    ref={ register }
                                />
                            </div>
                        </div>
                        <div className="grid-container-3" >
                            <div className="grid-item" >
                                <label className="label">Genero</label>
                                <select className="gg-bound-control-input form-control" type="text" name="genero" id="genero"
                                    ref={ register }
                                >
                                    <option value="femenino">Femenino</option>
                                    <option value="masculino">Masculino</option>
                                </select>
                            </div>
                            <div className="grid-item" >
                                <label className="label" >Fecha Nacimiento</label>
                                <DatePicker
                                    selected={ startDate }
                                    onChange={ date => setStartDate( date )} 
                                />
                            </div>
                            <div className="grid-item" >
                                <label className="label" >Pais</label>
                                <CountrySelect
                                    value={ country }
                                    onChange={setCountry}
                                    valueAs='id'
                                />
                            </div>
                        </div>
                        <div className="grid-container-colum-2" >
                            <div className="grid-item" >
                                <label className="label">Contraseña</label>
                                <input className="gg-bound-control-input" type="password" name="password" placeholder="Contraseña"
                                    ref={ register }
                                />
                            </div>
                            <div className="grid-item" >
                            <label className="label">Repita contraseña</label>
                                <input className="gg-bound-control-input" type="password" name="confirmPassword" placeholder="Repita contraseña" 
                                    ref={ register }
                                />
                            </div>
                        </div>
                        <div className="grid-container-colum-4" >
                            <div className="grid-item" >
                                <FontAwesomeIcon icon={ faFacebook } size="lg"
                                />
                            </div>
                            <div className="grid-item" >
                                <input className="gg-bound-control-input" type="text" name="facebook" placeholder="facebook.com/example" 
                                    ref={ register }
                                />
                            </div>
                            <div className="grid-item" >
                                <FontAwesomeIcon icon={ faGithub } size="lg"/>
                            </div>
                            <div className="grid-item" >
                                <input className="gg-bound-control-input" type="text" name="gitHub" placeholder="github.com/example"
                                    ref={ register }
                                />
                            </div>
                        </div>
                        <div className="grid-container-colum-4" >
                            <div className="grid-item" >
                                <FontAwesomeIcon icon={ faLinkedin } size="lg"/>
                            </div>
                            <div className="grid-item" >
                                <input className="gg-bound-control-input" type="text" name="linkedin" placeholder="linkedin.com/in/example" 
                                    ref={ register }
                                />
                            </div>
                            <div className="grid-item" >
                                <FontAwesomeIcon icon={ faTwitter } size="lg"/>
                            </div>
                            <div className="grid-item" >
                                <input className="gg-bound-control-input" type="text" name="twitter" placeholder="twitter.com/example" 
                                    ref={ register }
                                />
                            </div>
                        </div>
                        <div className="grid-container" >
                            <div className="grid-item" >
                                <label className="label">Biografia</label>
                                <textarea className="gg-bound-control-input" name="Biography" type="text" rows="4" 
                                    ref={ register }
                                ></textarea>
                            </div>
                        </div>
                        <div className="grid-container" onClick={ handleSubmit( onSubmit ) }>
                            <div className="profile-btn">
                                <p className="profile-btn-text" onClick={ handleSubmit( onSubmit ) } >
                                    <b>Guardar Cambios</b>
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            </div>
    )
}
