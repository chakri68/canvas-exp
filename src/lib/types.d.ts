type NtOptions = {
  density?: number;
  staticDensity?: number;
  slowSpeed?: number;
  fastSpeed?: number;
  timeout?: number;
  maxSize?: number;
  waneSpeed?: number;
};

type NtVector = {
  x: number;
  y: number;
};

type NtMouseLoc = NtVector;

type NtParticle = {
  x: number;
  y: number;
  size: number;
  color: string;
  speedX: number;
  speedY: number;
};
