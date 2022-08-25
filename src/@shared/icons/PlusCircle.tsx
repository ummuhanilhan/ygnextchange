import * as React from "react";
import { SVGProps } from "react";

const SvgPlusCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 32" {...props}>
    <path d="M15.238 28.952c-7.364 0-13.333-5.97-13.333-13.333S7.875 2.286 15.238 2.286c7.364 0 13.333 5.97 13.333 13.333s-5.97 13.333-13.333 13.333zm0 1.905c8.416 0 15.238-6.822 15.238-15.238S23.654.381 15.238.381 0 7.203 0 15.619s6.822 15.238 15.238 15.238z" />
    <path d="M15.238 8c.526 0 .952.426.952.952v5.714h5.714a.952.952 0 1 1 0 1.904H16.19v5.714a.952.952 0 1 1-1.904 0V16.57H8.572a.952.952 0 1 1 0-1.904h5.714V8.952c0-.526.426-.952.952-.952z" />
  </svg>
);

export default SvgPlusCircle;
