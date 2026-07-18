import { useEffect, useRef } from "react";

const vertexSrc = `
attribute vec2 a_pos;
void main() {
  gl_Position = vec4(a_pos, 0.0, 1.0);
}
`;

/**
 * All light is computed in float precision then dithered before the 8-bit
 * quantization, which removes gradient banding entirely. Spots live in page
 * space (viewport-height units) so they scroll past with the content, each
 * with a slight parallax factor.
 */
const fragmentSrc = `
precision highp float;

uniform vec2 u_res;
uniform float u_scroll;
uniform float u_dpr;

const vec3 NIGHT = vec3(0.043, 0.043, 0.055);
const vec3 DEEP = vec3(0.022, 0.022, 0.030);
const vec3 WARM = vec3(0.80, 0.66, 0.46);

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
}

/* Gaussian pool of light. x in fractions of width, y in viewport heights
   (page space), r in fractions of viewport height. */
float pool(vec2 frag, float x, float yVh, float r, float parallax) {
  float vh = u_res.y;
  float yPage = yVh * vh;
  float yScreen = yPage - u_scroll * (1.0 - parallax);
  vec2 center = vec2(x * u_res.x, yScreen);
  float d = distance(frag, center) / (r * vh);
  return exp(-d * d * 2.2);
}

/* Soft diagonal shaft of light across the hero. */
float shaft(vec2 frag) {
  float vh = u_res.y;
  vec2 origin = vec2(0.62 * u_res.x, 0.1 * vh - u_scroll * 0.92);
  vec2 dir = normalize(vec2(0.42, 1.0));
  vec2 rel = frag - origin;
  float along = dot(rel, dir);
  float across = dot(rel, vec2(-dir.y, dir.x));
  float widthFall = exp(-pow(across / (0.34 * vh), 2.0));
  float lengthFall = exp(-pow((along - 0.55 * vh) / (0.85 * vh), 2.0));
  return widthFall * lengthFall;
}

void main() {
  vec2 frag = vec2(gl_FragCoord.x, u_res.y * u_dpr - gl_FragCoord.y) / u_dpr;
  float vh = u_res.y;
  float yPage = frag.y + u_scroll;

  /* Base: settle into deeper dark after the hero. */
  float settle = smoothstep(0.85 * vh, 2.1 * vh, yPage);
  vec3 color = mix(NIGHT, DEEP, settle * 0.85);

  /* Warm pools, page-anchored with slight parallax. */
  float light = 0.0;
  light += 0.105 * pool(frag, 0.06, 0.12, 0.95, 0.06);
  light += 0.085 * pool(frag, 0.97, 0.45, 0.85, 0.10);
  light += 0.050 * pool(frag, -0.04, 2.60, 0.95, 0.05);
  light += 0.048 * pool(frag, 1.05, 4.60, 0.90, 0.09);
  light += 0.042 * pool(frag, -0.02, 6.60, 0.85, 0.05);
  light += 0.050 * pool(frag, 0.93, 8.30, 0.80, 0.08);

  /* Hero light shaft. */
  light += 0.055 * shaft(frag);

  /* Lights soften as the page settles darker. */
  light *= 1.0 - settle * 0.45;

  color += WARM * light;

  /* Dither: breaks 8-bit banding without visible grain. */
  color += (hash(gl_FragCoord.xy) - 0.5) / 160.0;

  gl_FragColor = vec4(color, 1.0);
}
`;

export function Backdrop() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl", { antialias: false, depth: false });
    if (!gl) return;

    const compile = (type: number, src: string) => {
      const shader = gl.createShader(type)!;
      gl.shaderSource(shader, src);
      gl.compileShader(shader);
      return shader;
    };
    const program = gl.createProgram()!;
    gl.attachShader(program, compile(gl.VERTEX_SHADER, vertexSrc));
    gl.attachShader(program, compile(gl.FRAGMENT_SHADER, fragmentSrc));
    gl.linkProgram(program);
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(program, "a_pos");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(program, "u_res");
    const uScroll = gl.getUniformLocation(program, "u_scroll");
    const uDpr = gl.getUniformLocation(program, "u_dpr");

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uRes, window.innerWidth, window.innerHeight);
      gl.uniform1f(uDpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    let raf = 0;
    let lastScroll = -1;
    let needsDraw = true;
    const tick = () => {
      const scroll = window.scrollY;
      if (needsDraw || scroll !== lastScroll) {
        lastScroll = scroll;
        needsDraw = false;
        gl.uniform1f(uScroll, scroll);
        gl.drawArrays(gl.TRIANGLES, 0, 3);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    const onResize = () => {
      needsDraw = true;
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={ref} className="fixed inset-0 -z-10 h-full w-full" aria-hidden />;
}
