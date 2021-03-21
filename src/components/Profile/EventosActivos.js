import React, { useContext } from 'react';
import BannerButtons from './BannerButtons';
import { AuthContext } from '../../context/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

export const EventosActivos = () => {
   const evento = [
      {
         nombre: 'Evento2',
         image:
            'https://blog.addthiscdn.com/wp-content/uploads/2014/11/addthis-react-flux-javascript-scaling.png',
         descripcion: 'lorem ipsum dolor 2222',
      },
      {
         nombre: 'Evento3',
         image:
            'https://blog.addthiscdn.com/wp-content/uploads/2014/11/addthis-react-flux-javascript-scaling.png',
         descripcion: 'lorem ipsum dolor 3333',
      },
      {
         nombre: 'Evento4',
         image:
            'https://blog.addthiscdn.com/wp-content/uploads/2014/11/addthis-react-flux-javascript-scaling.png',
         descripcion: 'lorem ipsum dolor 4444',
      },
      {
         nombre: 'Evento5',
         image:
            'https://blog.addthiscdn.com/wp-content/uploads/2014/11/addthis-react-flux-javascript-scaling.png',
         descripcion: 'lorem ipsum dolor 5555',
      },
   ];
   const { user } = useContext(AuthContext);
   console.log(evento);
   return (
      <>
         <div className="profile-grid">
            <div className="profile-grid-left">
               <BannerButtons />
            </div>
            <div className="profile-grid-right eventos">
               <div className='eventos__content-title'>
                  <FontAwesomeIcon icon={faCalendarAlt} />
                  <h2>Eventos Activos</h2>
               </div>
               <div className="eventos-grid">
                  {evento.map((value) => {
                     return (
                        <div className="eventos-grid__evento">
                           <img src={value.image} alt={value.nombre} />
                           <div className="info-cont">
                              <h4>{value.nombre}</h4>
                              <p>{value.descripcion}</p>
                           </div>
                           <button className="btn btn-blue">Participar</button>
                        </div>
                     );
                  })}
               </div>
            </div>
         </div>
      </>
   );
};