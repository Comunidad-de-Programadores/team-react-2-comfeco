import React, { useState, useEffect } from 'react';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { getSponsor } from '../../../selectors/getSponsor';


export const CarouselSponsor = () => {
   const sponsor = getSponsor();
   const [active, setActive] = useState({
      comienzo: true,
      sentido: 'derecha',
   });
   const [slide, setSlide] = useState([
      sponsor[0],
      sponsor[1],
      sponsor[2],
      sponsor[3],
      sponsor[4],
      sponsor[5],
   ]);

   useEffect(() => {
      if (active.comienzo) {
         if (active.sentido === 'derecha') {
            setSlide((prev) => {
               const ultimo = sponsor
                  .map((sponsor) => {
                     return sponsor.id;
                  })
                  .lastIndexOf(`${prev[prev.length - 1].id}`);
               prev.shift();
               if (ultimo >= sponsor.length - 1) {
                  return [...prev, sponsor[0]];
               }
               return [...prev, sponsor[ultimo + 1]];
            });
         }
         if (active.sentido === 'izquierda') {
            setSlide((prev) => {
               const primero = sponsor
                  .map((sponsor) => {
                     return sponsor.id;
                  })
                  .indexOf(`${prev[0].id}`);

               prev.pop();

               if (primero == 0) {
                  return [sponsor[sponsor.length - 1], ...prev];
               }

               return [sponsor[primero - 1], ...prev];
            });
         }
      }
   }, [active]);

   const handleChangeColor = (sentido) => {
      setActive({
         comienzo: true,
         sentido: sentido,
      });
   };
   
   return (
      <>
         <section className="carousel-sponsor">
            <div className="carousel-sponsor__container">
               <span onClick={() => handleChangeColor('izquierda')}>
                  {<FontAwesomeIcon icon={faAngleLeft} />}
               </span>{' '}
               {slide.map((sponsor) => (
                  <div key={sponsor.id} className="sponsor-image">
                     <img src={sponsor.img} alt={sponsor.name} />
                  </div>
               ))}
               <span onClick={() => handleChangeColor('derecha')}>
                  {<FontAwesomeIcon icon={faAngleRight} />}
               </span>{' '}
            </div>
         </section>
      </>
   );
};
