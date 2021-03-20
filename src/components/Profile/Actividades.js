import { faCheckCircle, faBookmark } from '@fortawesome/free-solid-svg-icons';
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
            <div className="actividades__content">
                <div className='actividades__content-title'>
                    <FontAwesomeIcon icon={faBookmark}/>
                    <h2>Actividad reciente </h2>
                </div>
                {
                    (actividades.length > 0) && (
                        actividades.map(actividad => (
                            <li className="actividades__item" key={actividad}>
                                {actividad}
                                <FontAwesomeIcon icon={faCheckCircle}/>
                            </li>
                        ))
                    )
                }
            </div>
        </div>
    )
}
