import React, { useContext } from 'react';
import BannerButtons from './BannerButtons';
import { AuthContext } from '../../context/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedal } from '@fortawesome/free-solid-svg-icons';

export const Insignias = () => {

    const insignia = [
        
        {
            name:'Sociable',
            image:'https://blog.addthiscdn.com/wp-content/uploads/2014/11/addthis-react-flux-javascript-scaling.png',
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
            howWin: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt'
        },

        {
            name:'Sociable',
            image:'https://blog.addthiscdn.com/wp-content/uploads/2014/11/addthis-react-flux-javascript-scaling.png',
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
            howWin: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt'
        },

        {
            name:'Sociable',
            image:'https://blog.addthiscdn.com/wp-content/uploads/2014/11/addthis-react-flux-javascript-scaling.png',
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
            howWin: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt'
        },

        {
            name:'Sociable',
            image:'https://blog.addthiscdn.com/wp-content/uploads/2014/11/addthis-react-flux-javascript-scaling.png',
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
            howWin: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt'
        },

        {
            name:'Sociable',
            image:'https://blog.addthiscdn.com/wp-content/uploads/2014/11/addthis-react-flux-javascript-scaling.png',
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
            howWin: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt'
        },

        {
            name:'Sociable',
            image:'https://blog.addthiscdn.com/wp-content/uploads/2014/11/addthis-react-flux-javascript-scaling.png',
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
            howWin: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut'
        }
    ]
    
    const { user } = useContext(AuthContext);
    console.log(insignia)

    return (
        <div className="profile-grid">
            <div className="profile-grid-left">
               <BannerButtons />
            </div>

            <div className="profile-grid-right insignias">
                <div className='eventos__content-title'> 
                    <FontAwesomeIcon icon={faMedal}/> 
                    <h2>Mis Insignias</h2>
                </div>

                <div className="eventos-grid">
                   {
                       insignia.map((insignias) => {
                           return(
                                <div className="eventos-grid__evento">
                                    <img src={insignias.image} alt={insignias.name}/>
                                    <div className="info-cont">
                                        <h2 className="title">{insignias.name}</h2>
                                        <h4>Descripción</h4>
                                        <p>{insignias.description}</p>
                                        <hr />
                                        <h4>¿Cómo ganar?</h4>
                                        <p>{insignias.howWin}</p>
                                    </div>
                                </div>
                           )
                       }) 
                   }
                </div>
            </div>
        </div>
    )
}
