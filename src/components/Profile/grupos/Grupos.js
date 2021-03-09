import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import GroupsApiFake from '../../../shared/api/groupsFake';

const Grupos = () => {
   const [grupos, setGrupos] = useState([]);
   useEffect(() => {
      GroupsApiFake.groupsFetch().then((data) => {
         //  console.log(data);
         setGrupos(data);
      });
   }, []);

   if (grupos.length == 0) return <h2> Cargando ... </h2>;

   return (
      <>
         <Link to="home/profile">Atras</Link>
         <h1>Component grupos:</h1>
         {grupos.map((item) => {
            return (
               <div>
                  <ul key={item.id}>
                     <li>{item.title}</li>
                     <li>{item.description}</li>
                     <li>{item.lenguaje}</li>
                  </ul>
                  <br />
               </div>
            );
         })}
      </>
   );
};

export default Grupos;
