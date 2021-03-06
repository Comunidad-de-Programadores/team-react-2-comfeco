import React, { useContext } from 'react';

import { AuthContext } from '../../context/AuthContext';
import { CarouselLideres } from './Carousels/CarouselLideres';
import { CarouselSponsor } from './Carousels/CarouselSponsor';
import { Clock } from './Clock';

import Comunidades from './Comunidades/Comunidades';
import Content from '../Content';
import { Profile } from '../Profile/Profile';


const HomePage = () => {

   const { user, setUser } = useContext(AuthContext);

   return (
      <>
         {
            (user?.logged && !user?.perfil) ? (
               <div className="home-page">
                  <Content>
                     <div className="home-page__header">
                        <h1>Bienvenidos a Community Fest and Code</h1>
                        <div className="home-page__title">
                           <h3>¡Conoce gente, aprende y gana!</h3>
                        </div>
                        <p>La próxima edición regresa en el 2022, en la cual se planea involucrar a todos los programadores, independientemente del área de conocimiento en que se encuentre, todo con un mismo propósito, aprender en comunidad </p>
                     </div>

                     <div className="home-page__title">
                        <h3>Ellos ya creen en esta iniciativa</h3>
                     </div>

                     <div className="home-page__carousel-lideres">
                        <CarouselLideres />
                     </div>

                     <button className="btn btn-blue">
                        Apoya Iniciativa
                     </button>

                     <div className="home-page__title">
                        <h3>Comunidades y Talleres de comfeco</h3>
                     </div>

                     <div className="home-page__comunidades-talleres">
                        <Comunidades />
                     </div>
                     <div className="home-page__title">
                        <h3>Sponsors</h3>
                     </div>
                     <div className="home-page__carousel-sponsors">
                        <CarouselSponsor />
                     </div>
                     <div className="home-page__title">
                        <h3>Prepárate, lo bueno está por venir</h3>
                     </div>

                     <div className="home-page__clock">
                        <Clock />
                     </div>

                  </Content>
               </div>


            )
               : (
                  <Content>

                     <Profile />

                  </Content>
               )
         }

      </>
   );
};

export default HomePage;
