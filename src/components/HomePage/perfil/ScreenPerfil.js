import React from 'react'

export const ScreenPerfil = () => {
    return (
        <div class="contain">
            <div class="wrapper">
                <div class="form">
                    <form>
                        <div className="grid-container" >
                            <div className="grid-item-center" >
                                <label>Editar Perfil</label>
                                <img src="http://site-834781.mozfiles.com/files/834781/arbol.jpg" ></img>
                            </div>
                        </div>

                        <div className="grid-container-colum-2" >
                            <div className="grid-item" >
                                <label>Nick</label>
                                <input type="text" placeholder="Nick de usuario" />
                            </div>
                            <div className="grid-item" >
                            <label >Correo</label>
                                <input type="email" placeholder="example@gmail.com" />
                            </div>
                        </div>
                        <div className="grid-container-3" >
                            <div className="grid-item" >
                                <label>Genero</label>
                                <input type="text" placeholder="Nick de usuario" />
                            </div>
                            <div className="grid-item" >
                                <label >Fecha Nacimiento</label>
                                <input type="email" placeholder="example@gmail.com" />
                            </div>
                            <div className="grid-item" >
                                <label >Pais</label>
                                <input type="email" placeholder="example@gmail.com" />
                            </div>
                        </div>
                        <div className="grid-container-colum-2" >
                            <div className="grid-item" >
                                <label>Contraseña</label>
                                <input type="text" placeholder="Nick de usuario" />
                            </div>
                            <div className="grid-item" >
                            <label >Repita contraseña</label>
                                <input type="email" placeholder="example@gmail.com" />
                            </div>
                        </div>
                        <div className="grid-container-colum-4" >
                            <div className="grid-item" >
                                <label>facebook</label>
                            </div>
                            <div className="grid-item" >
                                <input type="email" placeholder="example@gmail.com" />
                            </div>
                            <div className="grid-item" >
                                <label>github</label>
                            </div>
                            <div className="grid-item" >
                                <input type="email" placeholder="example@gmail.com" />
                            </div>
                        </div>
                        <div className="grid-container-colum-4" >
                            <div className="grid-item" >
                                <label>Linkendin</label>
                            </div>
                            <div className="grid-item" >
                                <input type="email" placeholder="example@gmail.com" />
                            </div>
                            <div className="grid-item" >
                                <label>Twiter</label>
                            </div>
                            <div className="grid-item" >
                                <input type="email" placeholder="example@gmail.com" />
                            </div>
                        </div>
                        <div className="grid-container" >
                            <div className="grid-item" >
                                <label>Biografia</label>
                                <textarea type="text" ></textarea>
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
