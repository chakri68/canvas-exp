import { NeonTrail } from "./NeonTrail";

declare global {
  interface Window {
    NeonTrail: typeof NeonTrail;
  }

  type NtOptions = {
    density?: number;
    staticDensity?: number;
    slowSpeed?: number;
    fastSpeed?: number;
    timeout?: number;
    maxSize?: number;
    waneSpeed?: number;
    enableClickBurst?: boolean;
    burstSpeed?: number;
    burstDensity?: number;
    burstParticleSize?: number;
  };

  type NtVector = {
    x: number;
    y: number;
  };

  type NtMouseLoc = {
    position: NtVector;
    velocity: NtVector;
  };

  type NtParticle = {
    x: number;
    y: number;
    size: number;
    color: string;
    speedX: number;
    speedY: number;
  };
}
