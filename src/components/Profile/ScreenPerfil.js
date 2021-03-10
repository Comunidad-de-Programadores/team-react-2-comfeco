import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

import DatePicker from "react-datepicker";
import CountrySelect from 'react-bootstrap-country-select';

import 'bootstrap/dist/css/bootstrap.css'; 
import 'react-bootstrap-country-select/dist/react-bootstrap-country-select.css';

import "react-datepicker/dist/react-datepicker.css";


export const ScreenPerfil = () => {

    const [ startDate, setStartDate ] = useState( new Date() );

    const [ value, setValue ] = React.useState('fr');
 
    const handleClick = ( e ) => {
        e.preventDefault();
        console.log("Hello")
    }
     
    return (
        <div className="contain">
            <div className="wrapper">
                <div className="form">
                    <form>
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
                                <input className="gg-bound-control-input" type="text" placeholder="Nick de usuario" />
                            </div>
                            <div className="grid-item" >
                            <label className="label">Correo</label>
                                <input className="gg-bound-control-input" type="email" placeholder="example@gmail.com" />
                            </div>
                        </div>
                        <div className="grid-container-3" >
                            <div className="grid-item" >
                                <label className="label">Genero</label>
                                <select className="gg-bound-control-input form-control" type="text" name="genero" id="genero" >
                                    <option value="femenino">Femenino</option>
                                    <option value="masculino">Masculino</option>
                                </select>
                            </div>
                            <div className="grid-item" >
                                <label className="label" >Fecha Nacimiento</label>
                                <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
                            </div>
                            <div className="grid-item" >
                                <label className="label" >Pais</label>
                                    <CountrySelect
                                        value={value}
                                        onChange={setValue}
                                        valueAs='id'
                                        flush={false}
                                        />
                            </div>
                        </div>
                        <div className="grid-container-colum-2" >
                            <div className="grid-item" >
                                <label className="label">Contraseña</label>
                                <input className="gg-bound-control-input" type="password" placeholder="Contraseña" />
                            </div>
                            <div className="grid-item" >
                            <label className="label">Repita contraseña</label>
                                <input className="gg-bound-control-input" type="password" placeholder="Repita contraseña" />
                            </div>
                        </div>
                        <div className="grid-container-colum-4" >
                            <div className="grid-item" >
                                <FontAwesomeIcon icon={ faFacebook } size="lg"
/>
                            </div>
                            <div className="grid-item" >
                                <input className="gg-bound-control-input" type="text" placeholder="facebook.com/example" />
                            </div>
                            <div className="grid-item" >
                                <FontAwesomeIcon icon={ faGithub } size="lg"/>
                            </div>
                            <div className="grid-item" >
                                <input className="gg-bound-control-input" type="text" placeholder="github.com/example" />
                            </div>
                        </div>
                        <div className="grid-container-colum-4" >
                            <div className="grid-item" >
                                <FontAwesomeIcon icon={ faLinkedin } size="lg"/>
                            </div>
                            <div className="grid-item" >
                                <input className="gg-bound-control-input" type="text" placeholder="linkedin.com/in/example" />
                            </div>
                            <div className="grid-item" >
                                <FontAwesomeIcon icon={ faTwitter } size="lg"/>
                            </div>
                            <div className="grid-item" >
                                <input className="gg-bound-control-input" type="text" placeholder="twitter.com/example" />
                            </div>
                        </div>
                        <div className="grid-container" >
                            <div className="grid-item" >
                                <label className="label">Biografia</label>
                                <textarea className="gg-bound-control-input" type="text" rows="4" ></textarea>
                            </div>
                        </div>
                        <div className="grid-container"   >
                            <div className="profile-btn">
                                <p className="profile-btn-text" onClick={ handleClick } ><b>Guardar Cambios</b></p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            </div>
    )
}
