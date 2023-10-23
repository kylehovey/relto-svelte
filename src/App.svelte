<script lang="ts">
  import { onMount } from "svelte";

  import Project from "./lib/Project.svelte";
  import ProjectDetails from "./lib/ProjectDetails.svelte";
  import BottomBar from "./lib/BottomBar.svelte";

  import { projects } from "./data/projects";
  import { selectedProject } from "./state/projects";

  type Vector = [number, number];

  interface Boid {
    pos: Vector;
    dS: Vector;
    d2S: Vector;
  }

  onMount(() => {
    const canvas = <HTMLCanvasElement>document.getElementById("boids-canvas");
    const context = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    resize();

    const draw = ({ pos: [x, y], dS: [dx, dy] }: Boid) => {
      if (context === null) {
        return;
      }

      const angle = Math.atan2(dy, dx);
      context.save();
      context.translate(x, y);
      context.rotate(angle);

      // Draw a little arrow
      context.beginPath();
      context.moveTo(10, 0);
      context.lineTo(-10, 5);
      context.lineTo(-10, -5);
      context.closePath();
      context.fillStyle = "#83a598";
      context.fill();

      context.restore();
    };

    const maxSpeed: number = 2.0;
    const radius = 300;
    const sepStrength = 3;
    const cohesionStrength = 3;

    const add = ([x, y]: Vector, [u, v]: Vector): Vector => [x + u, y + v];
    const sub = ([x, y]: Vector, [u, v]: Vector): Vector => [x - u, y - v];
    const mul = (s: number, [u, v]: Vector): Vector => [s * u, s * v];
    const norm = ([x, y]: Vector): number => Math.sqrt(x * x + y * y);
    const metric = (u: Vector, v: Vector): number => norm(sub(u, v));
    const normalize = (v: Vector): Vector => {
      const len = norm(v);
      return len !== 0 ? mul(1 / len, v) : v;
    };

    const drivers = (me: Boid, universe: Boid[]): [Vector, Vector, Vector] => {
      let count = 0;
      let avgDir: Vector = [0, 0];
      let avgPos: Vector = [0, 0];

      for (const other of universe) {
        const dist = metric(other.pos, me.pos);

        if (dist > 0 && dist <= radius) {
          count += 1;
          avgDir = add(avgDir, mul(1 / dist, other.dS));
          avgPos = add(avgPos, other.pos);
        }
      }

      const sep = mul(sepStrength, normalize(mul(-1, avgDir)));

      let cohesion: Vector = [0, 0];

      if (count > 0) {
        cohesion = mul(cohesionStrength, normalize(sub(avgPos, me.pos)));
      }

      return [sep, cohesion, [0, 0]];
    };

    const update = (boid: Boid, universe: Boid[]): Boid => {
      const [sep, cohesion] = drivers(boid, universe);

      // Move the boid
      const pos = add(boid.pos, boid.dS);
      const _dS: Vector = add(boid.dS, boid.d2S);
      const d2S: Vector = add(add(sep, cohesion), boid.d2S);

      const mag = norm(_dS);
      const dS = mag > maxSpeed ? mul(maxSpeed, normalize(_dS)) : _dS;

      // Wrap around the canvas
      if (pos[0] > canvas.width) pos[0] = 0;
      if (pos[0] < 0) pos[0] = canvas.width;
      if (pos[1] > canvas.height) pos[1] = 0;
      if (pos[1] < 0) pos[1] = canvas.height;

      return { pos, dS, d2S };
    };

    const boids: Boid[] = [];

    for (let i = 0; i < 200; i++) {
      const angle = Math.random() * 2 * Math.PI;
      boids.push({
        pos: [Math.random() * canvas.width, Math.random() * canvas.height],
        dS: [Math.cos(angle), Math.sin(angle)],
        d2S: [0, 0],
      });
    }

    const animate = () => {
      requestAnimationFrame(animate);
      context.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < boids.length; i++) {
        draw(boids[i]);
        boids[i] = update(boids[i], boids);
      }
    };

    animate();
  });
</script>

<main>
  <div class="container">
    <canvas id="boids-canvas" class="full-canvas" />
    <div class="content">
      <div class="main">
        <div class="description">
          <div class="logo" />
          {#if $selectedProject === null}
            <div>
              <h2>Project Portfolio</h2>
              <p>
                Hi! My name is Kyle. I grew up in a small community in the
                Sierra Nevada mountains. In 2019, I graduated Utah State
                University with a BS in Computational Mathematics. My passions
                include mathematics, electrical engineering, programming, music,
                hiking, climbing, and philosophy. Here you can see some
                highlights from my past/current projects. Check out my blog for
                posts on math and programming.
              </p>
            </div>
          {/if}
        </div>
        {#if $selectedProject === null}
          <ul class="projects-list">
            {#each projects as project}
              <Project {project} />
            {/each}
          </ul>
        {/if}
        {#if $selectedProject !== null}
          <ProjectDetails />
        {/if}
        <BottomBar />
      </div>
    </div>
  </div>
</main>
