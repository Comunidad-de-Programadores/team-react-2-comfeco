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
                        <Carousel />
                     </div>

                     <button className="btn btn-blue">
                        Apoya Iniciativa
                     </button>

                     <div className="home-page__title">
                        <h3>Comunidades y Talleres</h3>
                     </div>

                     <div className="home-page__comunidades-talleres">
                        <Comunidades />
                     </div>

                     <div className="home-page__carousel-sponsors">
                        <h1>Componente--Carousel-Sponsors</h1>
                     </div>
                     <div className="home-page__title">
                        <h3>Prepárate, lo bueno está por venir</h3>
                     </div>

                     <div className="home-page__contador">
                        <Clock />
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
