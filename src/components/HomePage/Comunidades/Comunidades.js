import React from 'react';

import MasConunidades from './MasComunidades';
import Popup from 'reactjs-popup';

const Comunidades = () => {
   return (
      <>
         <div className="comunidades">
            <h1 className="comunidades-header">Las comunidades:</h1>
            <Popup
               trigger={<a href="javascript:void(0)"> Ver Mas </a>}
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
            <ul className="comunidades-lista">
               <li className="comunidades-lista--item">
                  <h3>La web del Programador</h3>
                  <a
                     href="https://www.lawebdelprogramador.com/"
                     target="_blank"
                  >
                     unirse
                  </a>
               </li>
               <li className="comunidades-lista--item">
                  <h3>Chicas Programadoras Club</h3>
                  <a
                     href="http://www.chicasprogramadoras.club/"
                     target="_blank"
                  >
                     unirse
                  </a>
               </li>
               <li className="comunidades-lista--item">
                  <h3>FrontCafe</h3>
                  <a href="https://frontend.cafe/" target="_blank">
                     unirse
                  </a>
               </li>
            </ul>
         </div>
      </>
   );
};

export default Comunidades;
