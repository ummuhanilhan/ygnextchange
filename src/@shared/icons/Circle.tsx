import * as React from "react";
import { SVGProps } from "react";

const SvgCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 32" {...props}>
    <path d="M15.238 29.898c-7.364 0-13.333-5.97-13.333-13.333S7.875 3.232 15.238 3.232s13.333 5.97 13.333 13.333c0 7.364-5.97 13.333-13.333 13.333zm0 1.904c8.416 0 15.238-6.822 15.238-15.238S23.654 1.326 15.238 1.326 0 8.148 0 16.564s6.822 15.238 15.238 15.238z" />
  </svg>
);

export default SvgCircle;
