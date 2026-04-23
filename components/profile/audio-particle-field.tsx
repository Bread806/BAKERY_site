"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

export type AudioParticleTheme = {
  particleColor: string;
  particleGlow: string;
  particleDensity: number;
  particleSpeed: number;
  particleAmplitude: number;
};

type AudioParticleFieldProps = {
  identity: string;
  theme: AudioParticleTheme;
};

type Speck = {
  alpha: number;
  drift: number;
  phase: number;
  size: number;
  speed: number;
  x: number;
  y: number;
};

export function AudioParticleField({
  identity,
  theme,
}: AudioParticleFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduceMotion = Boolean(useReducedMotion());

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    let animationFrame = 0;
    let specks: Speck[] = [];
    let disposed = false;
    let viewportWidth = 0;
    let viewportHeight = 0;

    const resizeCanvas = () => {
      viewportWidth = window.innerWidth;
      viewportHeight = window.innerHeight;

      const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.floor(viewportWidth * ratio);
      canvas.height = Math.floor(viewportHeight * ratio);
      canvas.style.width = `${viewportWidth}px`;
      canvas.style.height = `${viewportHeight}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);

      specks = buildSpecks(identity, theme, viewportWidth, viewportHeight);
      drawFrame(reduceMotion ? 0 : performance.now());
    };

    const drawFrame = (timestamp: number) => {
      if (disposed) {
        return;
      }

      const isMobile = viewportWidth < 768;
      const time = timestamp / 1000;
      const rows = Math.round((isMobile ? 38 : 54) * theme.particleDensity);
      const rowGap = isMobile ? 6.5 : 7.25;
      const dotStep = isMobile ? 8.5 : 7;
      const centerX = viewportWidth / 2;
      const centerY = viewportHeight * 0.5;
      const maxWidth = Math.min(
        viewportWidth * (isMobile ? 0.34 : 0.38),
        isMobile ? 240 : 460,
      );

      context.clearRect(0, 0, viewportWidth, viewportHeight);

      for (let row = -rows; row <= rows; row += 1) {
        const distance = Math.abs(row) / rows;
        const envelope = Math.pow(1 - distance, 1.65);
        const wave =
          0.78 +
          Math.sin(time * theme.particleSpeed * 1.7 + row * 0.18) *
            0.12 *
            theme.particleAmplitude +
          Math.sin(time * theme.particleSpeed * 0.85 - row * 0.08) * 0.05;
        const halfWidth = maxWidth * envelope * Math.max(0.12, wave);
        const segments = Math.max(12, Math.floor((halfWidth * 2) / dotStep));
        const baseY = centerY + row * rowGap;

        for (let segment = 0; segment <= segments; segment += 1) {
          const progress = segment / segments;
          const edge = Math.abs(progress * 2 - 1);
          const brightness = 1 - Math.pow(edge, 1.35);
          const signal =
            0.5 +
            0.5 *
              Math.sin(
                segment * 0.42 + row * 0.31 + time * theme.particleSpeed * 2.1,
              );

          if (signal < 0.18 + edge * 0.14) {
            continue;
          }

          const x = centerX - halfWidth + segment * dotStep;
          const yJitter =
            Math.sin(
              segment * 0.16 + row * 0.27 + time * theme.particleSpeed * 1.05,
            ) *
            (0.7 + (1 - envelope) * 1.4);
          const alpha = Math.min(
            1,
            0.08 + brightness * envelope * (isMobile ? 0.72 : 0.82),
          );
          const coreAlpha = Math.min(1, alpha * 0.4 + envelope * 0.18);
          const width = brightness > 0.82 ? 2.2 : 1.4;

          context.fillStyle = withAlpha(theme.particleGlow, coreAlpha);
          context.fillRect(
            x - 0.4,
            baseY + yJitter - 0.4,
            width + 0.8,
            isMobile ? 1.8 : 2.2,
          );

          context.fillStyle = withAlpha(theme.particleColor, alpha);
          context.fillRect(x, baseY + yJitter, width, isMobile ? 1.2 : 1.5);
        }
      }

      for (const speck of specks) {
        const twinkle =
          0.3 + 0.7 * (0.5 + 0.5 * Math.sin(time * speck.speed + speck.phase));
        const drift = reduceMotion
          ? 0
          : Math.sin(time * speck.speed * 0.65 + speck.phase) * speck.drift;

        context.fillStyle = withAlpha(
          theme.particleColor,
          speck.alpha * twinkle,
        );
        context.fillRect(speck.x, speck.y + drift, speck.size, speck.size);
      }

      if (!reduceMotion) {
        animationFrame = window.requestAnimationFrame(drawFrame);
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    return () => {
      disposed = true;
      window.removeEventListener("resize", resizeCanvas);
      window.cancelAnimationFrame(animationFrame);
    };
  }, [identity, reduceMotion, theme]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-[1] h-full w-full opacity-85"
    />
  );
}

function buildSpecks(
  identity: string,
  theme: AudioParticleTheme,
  width: number,
  height: number,
) {
  const isMobile = width < 768;
  const count = Math.round((isMobile ? 28 : 54) * theme.particleDensity);
  const random = mulberry32(
    Math.floor(
      Array.from(identity).reduce((total, char) => total + char.charCodeAt(0), 0) +
        width +
        height,
    ),
  );

  return Array.from({ length: count }, () => ({
    alpha: 0.18 + random() * 0.3,
    drift: 2 + random() * 7,
    phase: random() * Math.PI * 2,
    size: random() > 0.82 ? 2 : 1.2,
    speed: 0.35 + random() * 1.4,
    x: random() * width,
    y: random() * height,
  }));
}

function mulberry32(seed: number) {
  let value = seed || 1;

  return () => {
    value |= 0;
    value = (value + 0x6d2b79f5) | 0;
    let t = Math.imul(value ^ (value >>> 15), 1 | value);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function withAlpha(hex: string, alpha: number) {
  const normalized = hex.replace("#", "");
  const value =
    normalized.length === 3
      ? normalized
          .split("")
          .map((part) => `${part}${part}`)
          .join("")
      : normalized;

  const red = Number.parseInt(value.slice(0, 2), 16);
  const green = Number.parseInt(value.slice(2, 4), 16);
  const blue = Number.parseInt(value.slice(4, 6), 16);

  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}
