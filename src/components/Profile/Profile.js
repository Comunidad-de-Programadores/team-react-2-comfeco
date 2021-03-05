import React from 'react'
import { Actividades } from './Actividades'
import { BannerInsignias } from './BannerInsignias'

export const Profile = () => {

    
    return (
        <div className="profile">
            <div>
                Componente perfil Izquierda

                <BannerInsignias/>
            </div>
            <Actividades/>
            
            <div>Componente Eventos Derecha</div>
        </div>
    )
}
