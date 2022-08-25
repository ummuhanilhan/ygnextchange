import * as React from "react";
import { SVGProps } from "react";

const SvgCheckCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 32" {...props}>
    <path d="M15.238 29.483c-7.364 0-13.333-5.97-13.333-13.333S7.875 2.817 15.238 2.817c7.364 0 13.333 5.97 13.333 13.333s-5.97 13.333-13.333 13.333zm0 1.905c8.416 0 15.238-6.822 15.238-15.238S23.654.912 15.238.912 0 7.734 0 16.15s6.822 15.238 15.238 15.238z" />
    <path d="M20.895 10.378c-.014.013-.026.028-.038.043l-6.614 8.428-3.988-3.988a1.428 1.428 0 1 0-2.02 2.02l5.041 5.041a1.428 1.428 0 0 0 2.055-.039l7.604-9.505a1.429 1.429 0 0 0-2.04-2z" />
  </svg>
);

export default SvgCheckCircle;
