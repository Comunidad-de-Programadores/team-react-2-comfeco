import React, { useContext } from 'react';

import { AuthContext } from '../../context/AuthContext';
import { Carousel } from './Carousel';
import Clock from './Clock';

import Content from '../Content';

const HomePage = () => {

   const { user, setUser } = useContext(AuthContext);

   return (
      <>

         {
            (user?.logged && !user?.perfil) ? (
               <Content>

                  <Clock />
                  <Carousel />

               </Content>

            )
            : (
                  <h3>Componente Perfil</h3>
             )
         }

      </>
   );
};

export default HomePage;
