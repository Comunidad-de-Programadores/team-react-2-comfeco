import React, { useEffect, useState } from 'react';
import { getLideres } from './dataCarousel/getLideres';

export const Carousel = () => {



    const lideres = getLideres();
    const [animation, setAnimation] = useState({
        'ant': true,
    });



    const [slide, setSlide] = useState([
        lideres[0],
        lideres[1],
        lideres[2],
    ]);

    useEffect(() => {
       

        console.log(`en el efecto ${animation.ant}`)
        let timer = setTimeout(() => {
            setAnimation({
                ant: true
            });
        }, 500)
        return () => {
            clearTimeout(timer);
        }

    }, [slide])


    const handleChangeColor = () => {
        setAnimation({
            ant: false
        });
        setSlide(prev => {
            
            const last = lideres.map(lider => {
                return lider.id;
            }).lastIndexOf(`${prev[prev.length - 1].id}`);
            
            prev.shift();
            
            if (last >= 19) {
                return [
                    ...prev,
                    lideres[0]
                ]
            }
            return [
                ...prev,
                lideres[last + 1]
            ]
        });

    }


    return (
        <>
            <section className="fs-container">
                <div className="fs-wrapper">
                    <div className="fs-slider">
                        {
                            slide.map((lider, i) => (
                                <div className={`fs-block transition-${i}`} key={lider.id}>
                                    <figure className={ 
                                            animation.ant ? 'fs-transition': 'fs-remove'
                                    }>
                                        <img src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F744f9499-dbb7-4a55-92b2-1f0781448bb9%2F1_prCweEqN9wGLx19kngaW2A.jpeg?table=block&id=31a42319-8352-4cba-935e-f323bf41c7a5&width=2720&userId=&cache=v2" alt="image01" />
                                        <figcaption className={ 
                                            animation.ant ? 'fs-transition': 'fs-remove'
                                        }>
                                            <h3>{lider.name}</h3>
                                            <p>{lider.team}</p>
                                        </figcaption>
                                    </figure>
                                </div>
                            ))
                        }

                    </div>

                    <nav className="fs-navigation">
                        <span onClick={handleChangeColor} >Previo</span>
                        <span>Siguiente</span>
                    </nav>
                </div>
            </section>

        </>
    )
}


{/* <div className="fs-block">
</div>
<div className="fs-block">
    
</div>
<div className="fs-block">
    
</div>
<div className="fs-temp">
    
</div> */}