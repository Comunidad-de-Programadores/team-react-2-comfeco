import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';


export const ScreenPerfil = () => {
    return (
        <div class="contain">
            <div class="wrapper">
                <div class="form">
                    <form>
                        <div className="grid-container" >
                            <div className="grid-item-center" >
                                <label className="label-title">Editar Perfil</label>
                                <img src="http://site-834781.mozfiles.com/files/834781/arbol.jpg" ></img>
                            </div>
                        </div>

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
                                <select className="gg-bound-control-input" type="text" name="genero" id="genero" >
                                    <option value="femenino">Femenino</option>
                                    <option value="masculino">Masculino</option>
                                </select>
                            </div>
                            <div className="grid-item" >
                                <label className="label" >Fecha Nacimiento</label>
                                <input className="gg-bound-control-input" type="email" placeholder="example@gmail.com" />
                            </div>
                            <div className="grid-item" >
                                <label className="label" >Pais</label>
                                <input className="gg-bound-control-input" type="text" placeholder="Estados unidos" />
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
                                <FontAwesomeIcon icon={ faFacebook } />
                            </div>
                            <div className="grid-item" >
                                <input className="gg-bound-control-input" type="email" placeholder="example@gmail.com" />
                            </div>
                            <div className="grid-item" >
                                <FontAwesomeIcon icon={ faGithub } />
                            </div>
                            <div className="grid-item" >
                                <input className="gg-bound-control-input" type="email" placeholder="example@gmail.com" />
                            </div>
                        </div>
                        <div className="grid-container-colum-4" >
                            <div className="grid-item" >
                                <FontAwesomeIcon icon={ faLinkedin } />
                            </div>
                            <div className="grid-item" >
                                <input className="gg-bound-control-input" type="email" placeholder="example@gmail.com" />
                            </div>
                            <div className="grid-item" >
                                <FontAwesomeIcon icon={ faTwitter } />
                            </div>
                            <div className="grid-item" >
                                <input className="gg-bound-control-input" type="email" placeholder="example@gmail.com" />
                            </div>
                        </div>
                        <div className="grid-container" >
                            <div className="grid-item" >
                                <label className="label">Biografia</label>
                                <textarea className="gg-bound-control-input" type="text" ></textarea>
                            </div>
                        </div>
                        <div className="grid-container" >
                            <div className="grid-item-button" >
                                <button> Guardar Cambios</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            </div>
    )
}
