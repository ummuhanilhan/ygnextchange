import * as React from "react";
import { SVGProps } from "react";

const SvgToggleOn = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
    <path d="M10 6C4.477 6 0 10.477 0 16s4.477 10 10 10h12c5.523 0 10-4.477 10-10S27.523 6 22 6H10zm12 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z" />
  </svg>
);

export default SvgToggleOn;
