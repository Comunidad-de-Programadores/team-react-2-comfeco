import {faCalendarAlt} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import {useHistory} from 'react-router';

export const Eventos = () => {
    const history = useHistory();
    const handleEvents = () => {
       history.push('/home/eventos');
    };

    const eventos = [
        'Te has Unido al evento Community Fest and Code', 
        'Te has unido al equipo de react-2', 
        'te has unido a la comunidad de react',
        'te has unido a la comunidad de angular',
    ];
    return (
        <div className="eventos">
            <div className="eventos__content">
                <div className='eventos__content-title'> 
                    <FontAwesomeIcon icon={faCalendarAlt}/> 
                    <h2>Eventos de tu inter&eacute;s</h2>
                </div>
                {
                    (eventos.length > 0) && (
                        eventos.map(actividad => (
                            <li className="actividades__item" key={actividad}>
                            {actividad}
                                <a href='#'>M&aacute;s informaci&oacute;n</a>
                            </li>
                        ))
                    )
                }
                <button onClick={handleEvents} className='btn btn-blue'>Ver m&aacute;s eventos</button>
            </div>
        </div>
    )
}
