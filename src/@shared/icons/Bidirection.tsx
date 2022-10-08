import * as React from "react";
import { SVGProps } from "react";

const SvgBidirection = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
    <path d="M.833 15.992c0 .601.487 1.088 1.088 1.088h25.671l-6.849 6.849a1.088 1.088 0 1 0 1.539 1.539l8.707-8.707a1.088 1.088 0 0 0 0-1.539l-8.707-8.707a1.088 1.088 0 1 0-1.539 1.539l6.849 6.849H1.921c-.601 0-1.088.487-1.088 1.088z" />
    <path d="M31.31 15.992c0 .601-.487 1.088-1.088 1.088H4.551l6.849 6.849a1.088 1.088 0 1 1-1.539 1.539l-8.707-8.707a1.088 1.088 0 0 1 0-1.539l8.707-8.707A1.088 1.088 0 1 1 11.4 8.054l-6.849 6.849h25.671c.601 0 1.088.487 1.088 1.088z" />
  </svg>
);

export default SvgBidirection;
