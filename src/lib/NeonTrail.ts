import { Ticker, biasedRandom, getVelocityVector } from "./math";
import { OptionalObjectOf, assertOrThrow, mergeOptionals } from "./type-utils";

const defaultOptions: OptionalObjectOf<NtOptions> = {
  density: 10,
  staticDensity: 5,
  fastSpeed: 2,
  slowSpeed: 0.5,
  timeout: 1000,
  maxSize: 7,
  waneSpeed: 0.25,
  burstDensity: 100,
  burstSpeed: 5,
  burstParticleSize: 7,
  enableClickBurst: true,
  glow: 10,
};

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

const weightedProbs: {
  [key in keyof typeof NEON_COLORS]: number;
} = {
  blue: 0.15,
  fuchsia: 0.1,
  green: 0.1,
  orange: 0.1,
  pink: 0.25,
  purple: 0.15,
  turquoise: 0.1,
  yellow: 0.05,
};

export class NeonTrail {
  private options: Required<NtOptions>;
  private getNeonColor: () => number;
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private mouseLoc: NtMouseLoc | null = null;
  private particles: NtParticle[] = [];
  private timeout: NodeJS.Timeout | null = null;
  private isStopped: boolean = true;
  private ticker: () => number;
  private shrinkMode: boolean = false;

  constructor(options: NtOptions) {
    this.options = mergeOptionals(options, defaultOptions);

    this.getNeonColor = NeonTrail.getWithWeightedProb(
      Object.entries(NEON_COLORS).map(([key, val]) => ({
        val,
        prob: weightedProbs[key as keyof typeof NEON_COLORS],
      }))
    ).get;

    this.canvas = document.createElement("canvas");
    this.canvas.classList.add("nt-canvas");
    document.body.appendChild(this.canvas);

    this.ctx = assertOrThrow(this.canvas.getContext("2d"));

    this.ticker = Ticker().tick;

    this.resizeCanvas();
    this.setupListeners();
  }

  private resizeCanvas() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  private setupListeners() {
    document.addEventListener("mousemove", this.onMouseMove);
    document.addEventListener("mouseleave", this.onMouseLeave);
    document.addEventListener("mouseenter", this.onMouseEnter);
    if (this.options.enableClickBurst)
      document.addEventListener("mousedown", (e: MouseEvent) => {
        this.addBurstParticles();
      });
  }

  private onMouseLeave = (e: MouseEvent) => {
    console.warn("Mouse left the screen");
    this.shrinkMode = true;
  };

  private onMouseEnter = () => {
    console.warn("Mouse entered the screen");
    this.shrinkMode = false;
  };

  private onMouseMove = (e: MouseEvent) => {
    this.isStopped = false;
    this.mouseLoc = {
      position: { x: e.clientX, y: e.clientY },
      velocity: getVelocityVector(
        { x: e.movementX, y: e.movementY },
        this.ticker()
      ),
    };

    this.addParticles();

    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.timeout = setTimeout(() => {
      this.isStopped = true;
    }, this.options.timeout);
  };

  private addParticles(isStatic: boolean = false) {
    if (this.shrinkMode) return;
    if (isStatic)
      for (let d = 0; d < this.options.staticDensity; d++) {
        this.particles.push(this.generateParticle(this.isStopped));
      }
    else
      for (let d = 0; d < this.options.density; d++) {
        this.particles.push(this.generateParticle());
      }
  }

  private generateParticle(slow: boolean = false): NtParticle {
    if (!this.mouseLoc) console.warn("MouseLoc is null");
    return {
      x: this.mouseLoc?.position.x ?? 0,
      y: this.mouseLoc?.position.y ?? 0,
      size: biasedRandom(-4) * this.options.maxSize + 1,
      color: `hsla(${this.getNeonColor()}, 100%, 50%, ${biasedRandom(4).toFixed(
        2
      )})`,
      speedX:
        (slow
          ? Math.random() * (this.options.slowSpeed * 2) -
            this.options.slowSpeed
          : Math.random() * (this.options.fastSpeed * 2) -
            this.options.fastSpeed) + (this.mouseLoc?.velocity.x ?? 0),
      speedY:
        (slow
          ? Math.random() * (this.options.slowSpeed * 2) -
            this.options.slowSpeed
          : Math.random() * (this.options.fastSpeed * 2) -
            this.options.fastSpeed) + (this.mouseLoc?.velocity.y ?? 0),
      glow: biasedRandom(4) * this.options.glow,
    };
  }

  private addBurstParticles() {
    for (let i = 0; i < this.options.burstDensity; i++) {
      if (!this.mouseLoc) console.warn("MouseLoc is null");
      this.particles.push({
        x: this.mouseLoc?.position.x ?? 0,
        y: this.mouseLoc?.position.y ?? 0,
        size: biasedRandom(-4) * this.options.burstParticleSize + 1,
        color: `hsla(${this.getNeonColor()}, 100%, 50%, ${biasedRandom(
          4
        ).toFixed(2)})`,
        speedX:
          Math.random() * (this.options.burstSpeed * 2) -
          this.options.burstSpeed +
          (this.mouseLoc?.velocity.x ?? 0),
        speedY:
          Math.random() * (this.options.burstSpeed * 2) -
          this.options.burstSpeed +
          (this.mouseLoc?.velocity.y ?? 0),
        glow: biasedRandom(4) * this.options.glow,
      });
    }
  }

  public init() {
    this.animate();
  }

  public stop() {
    this.stopAnimation();
  }

  private animate = () => {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Static particles
    if (this.mouseLoc !== null) this.addParticles(true);

    for (let i = 0; i < this.particles.length; i++) {
      this.ctx.save();
      this.ctx.fillStyle = this.particles[i].color;
      this.ctx.shadowBlur = this.particles[i].glow;
      this.ctx.shadowColor = this.particles[i].color;
      // Change this to get both circles and rects
      if (Math.random() > 1) {
        this.ctx.beginPath();
        this.ctx.arc(
          this.particles[i].x,
          this.particles[i].y,
          this.particles[i].size,
          0,
          2 * Math.PI
        );
        this.ctx.closePath();
        this.ctx.fill();
      } else {
        this.ctx.fillRect(
          this.particles[i].x,
          this.particles[i].y,
          this.particles[i].size,
          this.particles[i].size
        );
      }

      this.ctx.restore();

      this.particles[i].x += this.particles[i].speedX;
      this.particles[i].y += this.particles[i].speedY;
      this.particles[i].size -= this.options.waneSpeed;

      if (this.particles[i].size <= 0) {
        this.particles.splice(i, 1);
        i--;
      }
    }

    requestAnimationFrame(this.animate);
  };

  private stopAnimation() {
    // TODO: Implement this shat
  }

  static getWithWeightedProb<T>(values: { val: T; prob: number }[]): {
    get: () => T;
  } {
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
      return values[values.length - 1].val;
    };

    return { get };
  }
}
