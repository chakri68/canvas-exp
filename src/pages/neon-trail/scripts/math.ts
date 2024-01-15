export function getVelocityVector(displacementVector: NtVector, time: number) {
  return {
    x: displacementVector.x / time,
    y: displacementVector.y / time,
  } as NtVector;
}

export function getDisplacementVector(oldDis: NtVector, newDis: NtVector) {
  return { x: newDis.x - oldDis.x, y: newDis.y - oldDis.y } as NtVector;
}

export function compareVectors(a: NtVector, b: NtVector) {
  return a.x === b.x && a.y === b.y;
}

export function Ticker() {
  let time = Date.now();

  const tick = () => {
    const oldTime = time;
    time = Date.now();
    return time - oldTime;
  };

  return { tick };
}

export function generateRandomColor() {
  // Generate random values for each color channel (red, green, blue, alpha)
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const alpha = Math.random().toFixed(2); // Random alpha value between 0 and 1, rounded to 2 decimal places

  // Create the RGBA color string
  const rgbaColor = `rgba(${red},${green},${blue},${alpha})`;

  return rgbaColor;
}

export const NEON_COLORS = {
  blue: 210,
  pink: 300,
  green: 120,
  yellow: 60,
  purple: 270,
  turquoise: 180,
  fuchsia: 300,
  orange: 30,
} as const;

export function getRandomNeonicHue(): number {
  const colors = Object.keys(NEON_COLORS) as (keyof typeof NEON_COLORS)[];
  return NEON_COLORS[colors[Math.floor(Math.random() * colors.length)]];
}

export function getWithWeightedProb<T>(values: { val: T; prob: number }[]) {
  // Check if the probs addup to more than 1
  if (values.reduce((acc, cur) => acc + cur.prob, 0) > 1)
    throw new Error("probabilities can't addup to more than 1");

  // Generate the cumulative probabilities
  const cumulativeProbs = values.reduce((acc: number[], cur) => {
    return [...acc, cur.prob + (acc[acc.length - 1] ?? 0)];
  }, []);

  const get = () => {
    const r = Math.random();
    for (let i = 0; i < cumulativeProbs.length; i++) {
      if (cumulativeProbs[i] > r) {
        return values[i].val;
      }
    }
    return values[values.length - 1];
  };

  return { get };
}

export function getFromPDF<T>(
  pdf: (val: T) => number,
  normalizeFun: (num: number) => T
) {
  return pdf(normalizeFun(Math.random()));
}

export function biasedRandom(bias: number = 2) {
  if (bias === 0) return Math.random();
  if (bias > 0) {
    // Higher values are preffered
    return 1 - Math.pow(Math.random(), bias + 1);
  }
  // Lower values are preffered
  return Math.pow(Math.random(), -bias + 1);
}
