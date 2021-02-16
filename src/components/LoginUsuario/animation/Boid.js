import p5 from "p5";


class Boid {

    constructor(p5) {
        this.position = p5.createVector(p5.random(p5.width), p5.random(p5.height));
        this.velocity = p5.constructor.Vector.random2D();
        // this.velocity.setMag(p5.random(0.5, 1.5));
        this.velocity.setMag(p5.random(2, 4));

        this.acceleration = p5.createVector();
        this.maxForce = 1;
        this.maxSpeed = 4;
        // this.color = [255, p5.random(100, 200), 0];
        this.color = p5.color(255, p5.random(100, 200), 0, 150);
    }

    edges(p5){

        if(this.position.x > p5.width){
            this.position.x = 0;
        }else if(this.position.x < 0){
            this.position.x =  p5.width;
        }

        if(this.position.y > p5.height){
            this.position.y = 0;
        }else if(this.position.y < 0){
            this.position.y = p5.height;
        }
    }

    align(boids, p5) {

        let perceptionRadius = 50;
        let steering = p5.createVector();
        let total = 0;
        for (const other of boids) {
            let d = p5.dist(
                this.position.x,
                this.position.y,
                other.position.x,
                other.position.y
            );

            if (other != this && d < perceptionRadius) {
                steering.add(other.velocity);
                total++;
            }
        }
        if (total > 0) {

            steering.div(total);
            steering.setMag(this.maxSpeed);
            steering.sub(this.velocity);
            steering.limit(this.maxForce);

        }

        return steering;

    }

    separation(boids, p5) {

        let perceptionRadius = 50;
        let steering = p5.createVector();
        let total = 0;
        for (const other of boids) {
            let d = p5.dist(
                this.position.x,
                this.position.y,
                other.position.x,
                other.position.y
            );

            if (other != this && d < perceptionRadius) {

                let diff = p5.constructor.Vector.sub(this.position, other.position);
                diff.div(d * d);
                steering.add(diff);
                total++;
            }
        }
        if (total > 0) {

            steering.div(total);
       
            steering.setMag(this.maxSpeed);
            steering.sub(this.velocity);
            steering.limit(this.maxForce);

        }

        return steering;

    }

    cohesion(boids, p5) {

        let perceptionRadius = 80;
        let steering = p5.createVector();
        let total = 0;
        for (const other of boids) {
            let d = p5.dist(
                this.position.x,
                this.position.y,
                other.position.x,
                other.position.y
            );

            if (other != this && d < perceptionRadius) {
                steering.add(other.position);
                total++;
            }
        }
        if (total > 0) {

            steering.div(total);
            steering.sub(this.position);
            steering.setMag(this.maxSpeed);
            steering.sub(this.velocity);
            steering.limit(this.maxForce);

        }

        return steering;

    }

    flock(boids, p5){
        
        let alignment = this.align(boids, p5);
        let cohesion = this.cohesion(boids, p5);
        let separation = this.separation(boids, p5);
        alignment.mult(1.8);
        cohesion.mult(0.4);
        separation.mult(1.5);
        
        this.acceleration.add(alignment);
        this.acceleration.add(cohesion);
        this.acceleration.add(separation);
    }


    update() {

        this.position.add(this.velocity);
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.maxSpeed);
        this.acceleration.mult(0);


    }
    show(p5) {
        
        p5.strokeWeight(8);
        p5.stroke(this.color);
        p5.point(this.position.x, this.position.y);

    }

}

export default Boid;