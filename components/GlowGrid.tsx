'use client';

import { useEffect, useRef } from 'react';

interface Pulse {
  x: number;
  y: number;
  dx: number;
  dy: number;
  speed: number;
  life: number;
  maxLife: number;
  hue: number;
}

export default function GlowGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    const cellSize = 60;
    const pulses: Pulse[] = [];

    const colors = [
      [0, 200, 255],
      [80, 120, 255],
      [120, 80, 246],
    ];

    // Precompute grid line positions
    let hLines: number[] = [];
    let vLines: number[] = [];

    function resize() {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
      // Build arrays of grid line pixel positions
      hLines = [];
      vLines = [];
      for (let y = 0; y <= canvas!.height; y += cellSize) hLines.push(y);
      for (let x = 0; x <= canvas!.width; x += cellSize) vLines.push(x);
    }

    function spawnPulse() {
      if (pulses.length > 4) return;
      const horizontal = Math.random() > 0.5;
      let x: number, y: number, dx: number, dy: number;

      if (horizontal) {
        // Pick an actual horizontal grid line from hLines
        y = hLines[Math.floor(Math.random() * hLines.length)];
        dx = Math.random() > 0.5 ? 1 : -1;
        dy = 0;
        x = dx > 0 ? -100 : canvas!.width + 100;
      } else {
        // Pick an actual vertical grid line from vLines
        x = vLines[Math.floor(Math.random() * vLines.length)];
        dy = Math.random() > 0.5 ? 1 : -1;
        dx = 0;
        y = dy > 0 ? -100 : canvas!.height + 100;
      }

      pulses.push({
        x, y, dx, dy,
        speed: 0.5 + Math.random() * 0.8,
        life: 0,
        maxLife: (horizontal ? canvas!.width : canvas!.height) + 250,
        hue: Math.floor(Math.random() * colors.length),
      });
    }

    function drawGrid() {
      ctx!.strokeStyle = 'rgba(0, 217, 255, 0.03)';
      ctx!.lineWidth = 1;

      for (const y of hLines) {
        ctx!.beginPath();
        ctx!.moveTo(0, y + 0.5);
        ctx!.lineTo(canvas!.width, y + 0.5);
        ctx!.stroke();
      }

      for (const x of vLines) {
        ctx!.beginPath();
        ctx!.moveTo(x + 0.5, 0);
        ctx!.lineTo(x + 0.5, canvas!.height);
        ctx!.stroke();
      }
    }

    function drawPulse(p: Pulse) {
      const [r, g, b] = colors[p.hue];
      const progress = p.life / p.maxLife;
      const fade = progress < 0.1
        ? progress / 0.1
        : progress > 0.7
          ? (1 - progress) / 0.3
          : 1;

      const headX = p.x + p.dx * p.life;
      const headY = p.y + p.dy * p.life;
      const trailLen = 90;
      const tailX = headX - p.dx * trailLen;
      const tailY = headY - p.dy * trailLen;

      // Core trail
      const grad = ctx!.createLinearGradient(tailX, tailY, headX, headY);
      grad.addColorStop(0, `rgba(${r}, ${g}, ${b}, 0)`);
      grad.addColorStop(0.6, `rgba(${r}, ${g}, ${b}, ${0.12 * fade})`);
      grad.addColorStop(1, `rgba(${r}, ${g}, ${b}, ${0.25 * fade})`);
      ctx!.beginPath();
      ctx!.strokeStyle = grad;
      ctx!.lineWidth = 1;
      ctx!.moveTo(tailX + 0.5, tailY + 0.5);
      ctx!.lineTo(headX + 0.5, headY + 0.5);
      ctx!.stroke();

      // Soft glow
      const glowGrad = ctx!.createLinearGradient(tailX, tailY, headX, headY);
      glowGrad.addColorStop(0, `rgba(${r}, ${g}, ${b}, 0)`);
      glowGrad.addColorStop(0.6, `rgba(${r}, ${g}, ${b}, ${0.02 * fade})`);
      glowGrad.addColorStop(1, `rgba(${r}, ${g}, ${b}, ${0.05 * fade})`);
      ctx!.beginPath();
      ctx!.strokeStyle = glowGrad;
      ctx!.lineWidth = 6;
      ctx!.moveTo(tailX + 0.5, tailY + 0.5);
      ctx!.lineTo(headX + 0.5, headY + 0.5);
      ctx!.stroke();

      // Head bloom
      const headGlow = ctx!.createRadialGradient(headX, headY, 0, headX, headY, 12);
      headGlow.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${0.2 * fade})`);
      headGlow.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, ${0.04 * fade})`);
      headGlow.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
      ctx!.fillStyle = headGlow;
      ctx!.fillRect(headX - 12, headY - 12, 24, 24);

      // Intersection flare
      const atVLine = vLines.some(lx => Math.abs(headX - lx) < 3);
      const atHLine = hLines.some(ly => Math.abs(headY - ly) < 3);
      if ((p.dx !== 0 && atVLine) || (p.dy !== 0 && atHLine)) {
        const flare = ctx!.createRadialGradient(headX, headY, 0, headX, headY, 16);
        flare.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${0.15 * fade})`);
        flare.addColorStop(0.4, `rgba(${r}, ${g}, ${b}, ${0.04 * fade})`);
        flare.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
        ctx!.fillStyle = flare;
        ctx!.fillRect(headX - 16, headY - 16, 32, 32);
      }
    }

    function animate() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);

      drawGrid();

      if (Math.random() < 0.008) spawnPulse();

      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i];
        p.life += p.speed;
        if (p.life >= p.maxLife) {
          pulses.splice(i, 1);
          continue;
        }
        drawPulse(p);
      }

      animationId = requestAnimationFrame(animate);
    }

    resize();
    animate();
    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
}
