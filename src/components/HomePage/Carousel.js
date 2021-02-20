import React from 'react';

export const Carousel = () => {

    //  <-------

    const handleChangeColor = () => {

        const cartas = [...document.querySelectorAll('.fs-block')];

        const colores = cartas.map(c => {
            return window.getComputedStyle(c).getPropertyValue('background-color');
        });

        console.log(`colores: ${colores}`)
        cartas.forEach((c, i) => {
            (i == colores.length - 1)
                ? c.style.setProperty(`--color-${i + 1}`, `${colores[0]}`)
                : c.style.setProperty(`--color-${i + 1}`, `${colores[i + 1]}`)
        });
    }


    return (
        <>
            <section className="fs-container">
                <div className="fs-wrapper">
                    <div className="fs-slider">
                        <div className="fs-block">
                            <figure>

                            </figure>
                        </div>
                        <div className="fs-block">
                            <figure>

                            </figure>
                        </div>
                        <div className="fs-block">
                            <figure>

                            </figure>
                        </div>
                        <div className="fs-temp">
                            <figure>

                            </figure>
                        </div>
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
