import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { Actividades } from './Actividades';
import { Eventos } from './Eventos';
import { BannerInsignias } from './BannerInsignias';
import BannerButtons from './BannerButtons';
import { faTwitterSquare, faFacebookSquare, faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AuthContext } from '../../context/AuthContext';
import defaultPicture from '../../assets/user-icon.png';

export const Profile = () => {
   const history = useHistory();

   const handleEditProfile = () => {
      history.push('/home/profile');
   };
   const { dataUser } = useContext( AuthContext );
    
   const { user } = useContext(AuthContext);

   //console.log(user);
   console.log(dataUser);
   const openInNewTab = (url) => {
      const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
      if (newWindow) newWindow.opener = null
    }
   return (
      <>
         {(user?.logged) && (
            <div className="profile-grid">
               <div className='profile-grid-left'>
                  <div className='profile'>
                     <BannerButtons />
                     <div className='profile-container'>
                        <div className='profile-image'>
                           <img src={(user.picture.thumbnail ? user.picture.thumbnail : defaultPicture)} />
                        </div>
                        <div className='profile-name-box'>
                           <div className='profile-name'>{user.name}</div>
                           <div className='profile-edit' onClick={handleEditProfile}>
                              <FontAwesomeIcon icon={faExternalLinkAlt} />
                           </div>
                        </div>
                        <div className='profile-title'>Frontend Developer</div>
                        <div className='profile-content'>
                           {!dataUser.Biography?'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. ':
                           dataUser.Biography}
                        </div>
                        <div className='profile-media'>
                           <ul className='profile-media-list'>
                              <li onClick={() => openInNewTab(dataUser.facebook)}>
                                 <FontAwesomeIcon icon={faFacebookSquare}/>
                              </li>
                              <li>
                                 <FontAwesomeIcon icon={faTwitterSquare}/>
                              </li>
                              <li>
                                 <FontAwesomeIcon icon={faLinkedin}/>
                              </li>
                              <li>
                                 <FontAwesomeIcon icon={faGithubSquare}/>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
               <div className='profile-grid-right'>
                  <BannerInsignias />
                  <Actividades />
                  <Eventos />
               </div>
            </div>
         )}
      </>
   );
};
