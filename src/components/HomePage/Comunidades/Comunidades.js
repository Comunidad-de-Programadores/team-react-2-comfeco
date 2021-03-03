import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faBook, faCodeBranch } from '@fortawesome/free-solid-svg-icons'
import Popup from 'reactjs-popup';

import MasConunidades from './MasComunidades';
import { getComunidades } from '../selectors/getComunidades';
import { getTallerByFrameWork } from '../selectors/getTallerByFramework';


const Comunidades = () => {

   const comunidades = getComunidades();
   const talleres = getTallerByFrameWork("react");

   return (
      <>
         <div className="comunidades card-comunidad">
            <div className="comunidades__header ">
               <FontAwesomeIcon icon={faUsers} />
               <h2>Comunidades</h2>
            </div>

            <ul className="comunidades__lista">
               {
                  comunidades.map(com => (
                     <li className="comunidades__item" key={com.name}>

                        <div className="comunidades__logo">
                           <FontAwesomeIcon icon={faCodeBranch} />
                        </div>
                        <div className="comunidades__content">
                          
                           <h3>{com.name}</h3>
                           <a href={com.url}>Unirme</a>

                        </div>
                     </li>
                  ))
               }
            </ul>

            <Popup
               trigger={<button className="btn btn-blue" href="javascript:void(0)"> Ver más comunidades</button>}
               modal
               lockScroll
            >
               {(close) => (
                  <div className="modal">
                     <span className="close" onClick={close}>
                        &times;
                     </span>
                     <MasConunidades />
                  </div>
               )}
            </Popup>
         </div>
         <div className="talleres card-comunidad">
            <div className="talleres__header ">
               <FontAwesomeIcon icon={faBook} />
               <h2>Talleres</h2>
            </div>
            <ul>
               {
                  talleres.map(taller => (
                     <li key={taller.taller} className="talleres__item">
                        <div className="talleres__logo">
                           <img src={taller.logo} />
                        </div>
                        <div className="talleres__content">
                           <h4>{taller.taller}</h4>
                           <span>{taller.hrs}</span>
                           <p>Por: {taller.by}</p>
                        </div>
                     </li>
                  ))
               }
            </ul>
            <button className="btn btn-blue" href="javascript:void(0)"> Ver  más  talleres   </button>
         </div>


      </>
   );
};

export default Comunidades;
