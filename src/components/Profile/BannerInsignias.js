import React from 'react'
import { useContext } from 'react'

export const BannerInsignias = () => {

    const insignias = ['1', '2', '3', '4'];

    return (
        <div className="insignias">
            <div className="insignias__content">
                {
                    insignias.map((insignia) => (
                        <li 
                        className="insignias__item"
                        key ={insignia}>
                            {insignia}
                        </li>
                    ))
                }
            </div>
        </div>
    )
}
