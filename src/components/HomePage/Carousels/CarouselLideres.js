import React, { useEffect, useState } from 'react';
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { getLideres } from '../../../selectors/getLideres';

export const CarouselLideres = () => {



    const lideres = getLideres();
    const [active, setActive] = useState({
        comienzo: true,
        sentido: 'derecha'
    });

    const [slide, setSlide] = useState([
        lideres[0],
        lideres[1],
        lideres[2],
        lideres[3],
    ]);


    useEffect(() => {
        let timer = setTimeout(() => {
            setActive({
                comienzo: !active.comienzo,
                sentido: 'derecha'
            });
        }, 500);
        return () => {
            clearTimeout(timer);
        }
    }, [slide])


    useEffect(() => {

        let timer = setTimeout(() => {

            if (active.comienzo) {



                //* Sentido de Derecha a Izquierda 
                if (active.sentido === 'derecha') {
                    setSlide(prev => {

                        const ultimo = lideres.map(lider => {
                            return lider.id;
                        }).lastIndexOf(`${prev[prev.length - 1].id}`);

                        prev.shift();

                        if (ultimo >= lideres.length - 1) {
                            return [
                                ...prev,
                                lideres[0]
                            ]
                        }
                        return [
                            ...prev,
                            lideres[ultimo + 1]
                        ]
                    });
                }


                if (active.sentido === 'izquierda') {
                    //* Sentido de Izq a Derecha 
                    setSlide(prev => {
                        const primero = lideres.map(lider => {
                            return lider.id;
                        }).indexOf(`${prev[0].id}`);

                        prev.pop();

                        if (primero == 0) {
                            return [
                                lideres[lideres.length - 1],
                                ...prev
                            ]
                        }

                        return [
                            lideres[primero - 1],
                            ...prev,

                        ];
                    });
                }
            }


        }, 1200);

        return () => {
            clearTimeout(timer);
        }

    }, [active])



    const handleChangeColor = (sentido) => {

        setActive({
            comienzo: true,
            sentido: sentido
        });
    }


    return (

        <>
            <section className="carousel-lideres">

                <div className="carousel-lideres__container">
                    <div className="carousel-lideres__slider">
                        {
                            slide.map((lider) => (
                                <div className={`carousel-lideres__block ${!active.comienzo ? 'carousel-lideres--transition' : 'carousel-lideres--remove'}`} key={lider.id}>
                                    
                                    <div className="carousel-lideres__img">
                                        <img src={lider.img} />
                                    </div>

                                    <div className="carousel-lideres__desc">
                                        <h3>{lider.name}</h3>
                                        <div className={`carousel-lideres__team carousel-lideres--${lider.team}`}>
                                           
                                        </div>
                                    </div>

                                </div>
                            ))
                        }
                    </div>

                    <nav className="carousel-lideres__navegacion">
                        <span onClick={() => handleChangeColor('derecha')} >
                            {<FontAwesomeIcon icon={faArrowLeft} />}
                        </span>
                        <span onClick={() => handleChangeColor('izquierda')}>
                            {<FontAwesomeIcon icon={faArrowRight} />}

                        </span>
                    </nav>
                </div>
            </section>

        </>
    )
}
