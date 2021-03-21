import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"


export const Footer = () => {
    return (
        <>

        <div className="footer">
            <div className="footer__txt">
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, labore et dolore magna</p>
            </div>

            <div className="footer__iconos">
                <p>Siguenos:   </p>
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faTwitter} />
            </div>
        </div>
            
        </>
    )
}
