import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

export const Actividades = () => {


    const actividades = [
        'Te has Unido al evento Community Fest and Code', 
        'Te has unido al equipo de react-2', 
        'te has unido a la comunidad de react',
        'te has unido a la comunidad de angular',
    ];
    return (
        <div className="actividades">
            <div className="actividades__content card-comunidad">
                <h2>Actividad reciente </h2>
                {
                    (actividades.length > 0) && (
                        actividades.map(actividad => (
                            <li className="actividades__item" key={actividad}>{actividad}</li>
                        ))
                    )
                }
            <FontAwesomeIcon icon={faCalendarCheck}/>
            </div>
        </div>
    )
}
