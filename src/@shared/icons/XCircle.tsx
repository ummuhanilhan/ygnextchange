import * as React from "react";
import { SVGProps } from "react";

const SvgXCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 32" {...props}>
    <path d="M15.238 29.483c-7.364 0-13.333-5.97-13.333-13.333S7.875 2.817 15.238 2.817c7.364 0 13.333 5.97 13.333 13.333s-5.97 13.333-13.333 13.333zm0 1.905c8.416 0 15.238-6.822 15.238-15.238S23.654.912 15.238.912 0 7.734 0 16.15s6.822 15.238 15.238 15.238z" />
    <path d="M8.85 9.762a.952.952 0 0 1 1.347 0l5.041 5.041 5.041-5.041a.952.952 0 1 1 1.347 1.347l-5.041 5.041 5.041 5.041a.952.952 0 1 1-1.347 1.347l-5.041-5.041-5.041 5.041a.952.952 0 1 1-1.347-1.347l5.041-5.041-5.041-5.041a.952.952 0 0 1 0-1.347z" />
  </svg>
);

export default SvgXCircle;
