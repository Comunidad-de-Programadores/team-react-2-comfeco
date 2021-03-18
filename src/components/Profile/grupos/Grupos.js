import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import GroupsApiFake from '../../../shared/api/groupsFake';
import { AuthContext } from '../../../context/AuthContext';

const Grupos = () => {
   const [grupos, setGrupos] = useState([]);
   const { user } = useContext(AuthContext);
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
         <h1>Grupos</h1>
         <div className="grupos">
            <div className="grupos-migrupo">
               <ul className="grupos-migrupo_card">
                  <li className="grupos-migrupo_card-title">
                     <h2>Mi Grupo</h2>
                     <a href="#">Ir al grupo</a>
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
                     <button className="btn btn-white">Abandonar</button>
                     <button className="btn btn-white">Ir al chat</button>
                  </li>
               </ul>
            </div>
            <div className="grupos-teams">
               <form>
                  <div className="grupos-input">
                     <div className="grupos-input--control">
                        <select name="languages" id="languages">
                           <option value="" disabled selected>
                              Filtrar por lenguaje
                           </option>
                           <option value="C++">C++</option>
                           <option value="JAVA">JAVA</option>
                           <option value="Javascript">Javascript</option>
                           <option value="Ruby">Ruby</option>
                           <option value="PHP">PHP</option>
                        </select>
                     </div>
                     <div className="grupos-input--control">
                        <input
                           type="text"
                           name="filter"
                           id="filter"
                           placeholder="Buscar Grupo"
                        />
                     </div>
                  </div>
               </form>
               <div className="grupos-grid">
                  {grupos.map((item) => {
                     return (
                        <div className="grupos-grid_item">
                           <ul key={item.id}>
                              <li>{item.title}</li>
                              <li>{item.description}</li>
                              <li>{item.lenguaje}</li>
                              <li>
                                 <button className="btn btn-white">
                                    Unirte
                                 </button>
                              </li>
                           </ul>
                           <br />
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
