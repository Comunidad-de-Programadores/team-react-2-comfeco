import React from 'react';
import P5 from 'p5';
import Boid from './Boid';


const containerCanvas = document.getElementById('fluid');
const AnimationLogin = () => {

    let s = (p5) => {

        const flock = [];

        p5.setup = () => {
            let size = document.querySelector('.login-form');
            // let size = document.querySelector('.container');
            const canva = p5.createCanvas(size.offsetWidth - 10, size.offsetHeight);
            canva.parent('fluid');
            for (let i = 0; i < 50; i++) {
                flock.push(new Boid(p5));
            }

        }


        p5.draw = () => {
            //#3d68ac
            // p5.background('#954fdb1f');
            p5.clear();
            for (let boid of flock) {
                boid.edges(p5);
                boid.flock(flock, p5)
                boid.update();
                boid.show(p5);
            }

        }

        p5.windowResized = () => {
            let size = document.querySelector('.login-form');
            p5.resizeCanvas(size.offsetWidth, size.offsetHeight);
        }


    }

    new P5(s, containerCanvas);

    return (
        <>
            <div id="fluid" className="login-form__animation">

            </div>
        </>
    )
}

export default AnimationLogin
