import React from 'react';
import { Carousel } from './Carousel';
import Clock from './Clock';

import Navegacion from '../Navegacion';
import Content from '../Content';

const HomePage = () => {
   return (
      <>
         <Content>
            <Clock />
            <Carousel />
         </Content>
      </>
   );
};

export default HomePage;
