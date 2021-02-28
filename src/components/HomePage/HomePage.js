import React, { useContext } from 'react';

import { AuthContext } from '../../context/AuthContext';
import { Carousel } from './Carousel';
import Clock from './Clock';
import Comunidades from './Comunidades/Comunidades';

import Content from '../Content';

const HomePage = () => {

   const { user, setUser } = useContext(AuthContext);

   return (
      <>

         {
            (user?.logged && !user?.perfil) ? (
               <div className="home-page">
                  <Content>
                     <Comunidades />

                     <div className="home-page__content">
                        <Clock />
                        <Carousel />
                     </div>

                  </Content>
               </div>


            )
               : (
                  <h3>Componente Perfil</h3>
               )
         }

      </>
   );
};

export default HomePage;
