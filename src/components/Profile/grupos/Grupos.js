import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import GroupsApiFake from '../../../shared/api/groupsFake';
import { AuthContext } from '../../../context/AuthContext';

const Grupos = () => {
   const [grupos, setGrupos] = useState([]);
   const [filterL, setFilterL] = useState('');
   const [buscarG, setBuscarG] = useState('');
   const { user } = useContext(AuthContext);
   useEffect(() => {
      GroupsApiFake.groupsFetch().then((data) => {
         //  console.log(data);
         setGrupos(data);
      });
   }, []);

   if (grupos.length == 0) return <h2> Cargando ... </h2>;

   function handleSelect(e) {
      e.preventDefault();

      console.log(e.target.value);
      setFilterL(e.target.value);
   }

   function handleBuscarG(e) {
      e.preventDefault();

      setBuscarG(e.target.value);
      console.log(buscarG);
   }

   return (
      <>
         <Link to="home/profile">Atras</Link>
         <h1>Grupos</h1>
         <div className="grupos">
            <div className="grupos-migrupo">
               <ul className="grupos-migrupo_card">
                  <li className="grupos-migrupo_card-title">
                     <h2>Mi Grupo</h2>
                     <a href="#" className="grupos-link">
                        Ir al grupo
                     </a>
                  </li>
                  <li className="grupos-migrupo_card-user">Integrantes</li>
                  <li className="grupos-migrupo_card-user">
                     <div className="user-profile">
                        {' '}
                        <div>
                           <div className="circle"></div>
                        </div>
                        <div className="user-name">
                           <div>Jesus</div>
                           <div>novato</div>
                        </div>
                     </div>
                     <div>
                        <h4>Lider</h4>
                     </div>
                  </li>
                  <li className="grupos-migrupo_card-user">
                     <div className="user-profile">
                        {' '}
                        <div>
                           <img src={user.picture.thumbnail} alt="perfil" />
                        </div>
                        <div className="user-name">
                           <div>{user.name}</div>
                           <div>novato</div>
                        </div>
                     </div>
                     <div>
                        <h4>Integrante</h4>
                     </div>
                  </li>
                  <li className="grupos-migrupo_card-user">
                     <div className="user-profile">
                        {' '}
                        <div>
                           <div className="circle"></div>
                        </div>
                        <div className="user-name">
                           <div>Mauricio</div>
                           <div>novato</div>
                        </div>
                     </div>
                     <div>
                        <h4>Integrante</h4>
                     </div>
                  </li>
                  <li className="grupos-migrupo_card-user">
                     <div className="user-profile">
                        {' '}
                        <div>
                           <div className="circle"></div>
                        </div>
                        <div className="user-name">
                           <div>Bryan</div>
                           <div>novato</div>
                        </div>
                     </div>
                     <div>
                        <h4>Integrante</h4>
                     </div>
                  </li>
                  <li className="grupos-migrupo_card-user">
                     <div className="user-profile">
                        {' '}
                        <div>
                           <div className="circle"></div>
                        </div>
                        <div className="user-name">
                           <div>Gonzalo</div>
                           <div>novato</div>
                        </div>
                     </div>
                     <div>
                        <h4>Integrante</h4>
                     </div>
                  </li>
                  <li className="grupos-migrupo_card-user">
                     <div className="user-profile">
                        {' '}
                        <div>
                           <div className="circle"></div>
                        </div>
                        <div className="user-name">
                           <div>Ruby</div>
                           <div>novato</div>
                        </div>
                     </div>
                     <div>
                        <h4>Integrante</h4>
                     </div>
                  </li>

                  <li className="grupos-migrupo_card-btn">
                     <button className="btn btn-white-2">Abandonar</button>
                     <button className="btn btn-blue">Ir al chat</button>
                  </li>
               </ul>
            </div>
            <div className="grupos-teams">
               <div className="grupos-input">
                  <div className="grupos-input--control">
                     <select
                        name="languages"
                        id="languages"
                        onChange={handleSelect}
                     >
                        <option value="" disabled selected>
                           Filtrar por lenguaje
                        </option>
                        <option value="C++">C++</option>
                        <option value="JAVA">JAVA</option>
                        <option value="Javascript">Javascript</option>
                        <option value="Ruby">Ruby</option>
                        <option value="PHP">PHP</option>
                        <option value="Todos">Todos</option>
                     </select>
                  </div>

                  <div className="grupos-input--control">
                     <input
                        type="text"
                        name="filter"
                        id="filter"
                        placeholder="Buscar Grupo"
                        value={buscarG}
                        onChange={handleBuscarG}
                     />
                  </div>
               </div>

               <div className="grupos-grid">
                  {grupos
                     .filter((data) => {
                        // console.log('filter data: ', buscarG);
                        if (buscarG != '') {
                           return data.title === buscarG;
                        }

                        if (filterL === 'Todos') return data;

                        if (filterL != '') {
                           return data.lenguaje === filterL;
                        }
                        return data;
                     })
                     .map((item) => {
                        return (
                           <div className="grupos-grid_item">
                              <ul key={item.id}>
                                 <li>{item.title}</li>
                                 <li>{item.description}</li>
                                 <li>{item.lenguaje}</li>
                                 <li>
                                    <button className="btn btn-blue">
                                       Unirte
                                    </button>
                                 </li>
                              </ul>
                           </div>
                        );
                     })}
               </div>
            </div>
         </div>
      </>
   );
};

export default Grupos;
