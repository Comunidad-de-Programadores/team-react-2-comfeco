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
            'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe1257ed3-39e0-4090-ad74-49ba240b41c2%2FSubmdulo_Insignias-2.jpg?table=block&id=415f61ea-5d8e-4524-abcd-9da6518dfc14&width=3840&userId=&cache=v2',
         descripcion: 'lorem ipsum dolor 2222',
      },
      {
         nombre: 'Evento3',
         image:
            'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe1257ed3-39e0-4090-ad74-49ba240b41c2%2FSubmdulo_Insignias-2.jpg?table=block&id=415f61ea-5d8e-4524-abcd-9da6518dfc14&width=3840&userId=&cache=v2',
         descripcion: 'lorem ipsum dolor 3333',
      },
      {
         nombre: 'Evento4',
         image:
            'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe1257ed3-39e0-4090-ad74-49ba240b41c2%2FSubmdulo_Insignias-2.jpg?table=block&id=415f61ea-5d8e-4524-abcd-9da6518dfc14&width=3840&userId=&cache=v2',
         descripcion: 'lorem ipsum dolor 4444',
      },
      {
         nombre: 'Evento5',
         image:
            'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe1257ed3-39e0-4090-ad74-49ba240b41c2%2FSubmdulo_Insignias-2.jpg?table=block&id=415f61ea-5d8e-4524-abcd-9da6518dfc14&width=3840&userId=&cache=v2',
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
               <h2>
                  <FontAwesomeIcon icon={faCalendarAlt} />
                  Eventos Activos
               </h2>
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
