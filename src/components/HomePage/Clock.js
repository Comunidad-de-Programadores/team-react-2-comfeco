import React, { useEffect, useState } from 'react'

const Contador = () => {

    const endTime = new Date("February 05, 2022 18:25:40");

    const [time, setTime] = useState({
        dias: 0,
        hrs: 0,
        min: 0,
        seg: 0,

    });

    const { dias, hrs, min, seg } = time;


    useEffect(() => {


        const total = endTime - new Date();
        const tiempoTranscurrido = setTimeout(() => {

            setTime({
                dias: Math.floor(total / (1000 * 60 * 60 * 24)),
                hrs: Math.floor((total / (1000 * 60 * 60)) % 24),
                min: Math.floor((total / 1000 / 60) % 60),
                seg: Math.floor((total / 1000) % 60),
            });
        }, 1000);

        document.querySelector('.clock__seconds').firstChild.style.setProperty('--size-seg', (seg * 101 / 60) + '%')
        document.querySelector('.clock__minutes').firstChild.style.setProperty('--size-min', (min * 101 / 60) + '%')
        document.querySelector('.clock__hours').firstChild.style.setProperty('--size-hrs', (hrs * 101 / 24) + '%')
        document.querySelector('.clock__days').firstChild.style.setProperty('--size-dias', (dias * 101 / 365) + '%')




        return () => {
            clearTimeout(tiempoTranscurrido)
        }
    }, [seg])


    return (
        <>

            <div className="clock">

                <div className="clock__content">

                    <div className="clock__days">
                        <span >{dias}  </span>
                        <div className="clock__smalltext">Días</div>
                    </div>
                    
                    <div className="clock__hours">
                        <span>{hrs}  </span>
                        <div className="clock__smalltext">Horas</div>
                    </div>
                    
                    <div className="clock__minutes">
                        <span>{min}  </span>
                        <div className="clock__smalltext">Minutos</div>
                    </div>

                    <div className="clock__seconds">
                        <span>{seg}  </span>
                        <div className="clock__smalltext">Segundos</div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Contador
