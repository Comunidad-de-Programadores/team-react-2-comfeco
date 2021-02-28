import React from 'react';
import { Carousel } from './Carousel';
import Clock from './Clock';
import Comunidades from './Comunidades/Comunidades';

import Navegacion from '../Navegacion';
import Content from '../Content';

const HomePage = () => {
   return (
      <>
         <Content>
            <Comunidades />
            <Clock />
            <Carousel />
         </Content>
      </>
   );
};

export default HomePage;
