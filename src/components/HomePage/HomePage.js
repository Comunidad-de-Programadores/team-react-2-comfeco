import React from 'react';
import { Carousel } from './Carousel';
import Clock from './Clock';

import Navegacion from '../Navegacion';

const HomePage = () => {
   return (
      <>
         <Navegacion>
            <Clock />
            <Carousel />
         </Navegacion>
      </>
   );
};

export default HomePage;
