import React from 'react';
import { Carousel } from './Carousel';
import { CarouselSponsor } from './CarouselSponsor';
import Clock from './Clock';

import Navegacion from '../Navegacion';
import Content from '../Content';

const HomePage = () => {
   return (
      <>
         <Content>
            <Clock />
            <Carousel />
            <CarouselSponsor />
         </Content>
      </>
   );
};

export default HomePage;
