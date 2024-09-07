'use client'
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

class Particle {
    x: number;
    y: number;
    length: number;
    angle: number;
    speed: number;

    constructor(canvas: HTMLCanvasElement) {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.length = Math.random() * 300 + 100; // Longer rays
        this.angle = Math.PI / 1; // 45-degree angle from top-right to bottom-left
        this.speed = Math.random() * 1 + .5;
    }

    update(canvas: HTMLCanvasElement) {
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;

        // Wrap around to the opposite side when particle goes off-screen
        if (this.x < -this.length) this.x = canvas.width + this.length;
        if (this.x > canvas.width + this.length) this.x = -this.length;
        if (this.y < -this.length) this.y = canvas.height + this.length;
        if (this.y > canvas.height + this.length) this.y = -this.length;
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.strokeStyle = 'rgba(149, 247, 208, 0.5)'; // White with 50% opacity
        ctx.lineWidth = 4; // Slimmer lines
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(
            this.x - Math.cos(this.angle) * this.length,
            this.y - Math.sin(this.angle) * this.length
        );
        ctx.stroke();
    }

    speedUp() {
        this.speed *= 4; // Double the speed
    }
    
    slowDown() {
        this.speed /= 4; // Halve the speed
    }
}

export const particleAngle = Math.PI / 4; // 45-degree angle

const ParticleBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particles = useRef<Particle[]>([]);
    const pathname = usePathname();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const createParticles = () => {
            particles.current = [];
            for (let i = 0; i < 25; i++) {
                particles.current.push(new Particle(canvas));
            }
        };

        const animateParticles = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let particle of particles.current) {
                particle.update(canvas);
                particle.draw(ctx);
            }
            requestAnimationFrame(animateParticles);
        };

        resizeCanvas();
        createParticles();
        animateParticles();

        window.addEventListener('resize', resizeCanvas);

        return () => {
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    useEffect(() => {
        const speedUpParticles = () => {
            for (let particle of particles.current) {
                particle.speedUp();
            }
        };

        const slowDownParticles = () => {
            for (let particle of particles.current) {
                particle.slowDown();
            }
        };

        speedUpParticles();

        const timer = setTimeout(() => {
            slowDownParticles();
        }, 1000); // Slow down particles after 1 second

        return () => {
            clearTimeout(timer);
        };
    }, [pathname]);

    return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: 0, backgroundColor: 'black' }} />;
};

export default ParticleBackground;