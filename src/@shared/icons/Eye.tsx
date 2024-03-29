import * as React from "react";
import { SVGProps } from "react";

const SvgEye = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 32" {...props}>
    <path d="M30.476 16.564S24.762 6.088 15.238 6.088 0 16.564 0 16.564 5.714 27.04 15.238 27.04s15.238-10.476 15.238-10.476zm-28.242 0a25.037 25.037 0 0 1 3.161-3.891c2.455-2.455 5.807-4.68 9.844-4.68s7.389 2.225 9.844 4.68a25.037 25.037 0 0 1 3.161 3.891 25.1 25.1 0 0 1-3.161 3.892c-2.455 2.455-5.807 4.68-9.844 4.68s-7.388-2.225-9.844-4.68a24.974 24.974 0 0 1-3.161-3.892z" />
    <path d="M15.238 11.802a4.762 4.762 0 1 0 0 9.524 4.762 4.762 0 0 0 0-9.524zm-6.667 4.762a6.667 6.667 0 1 1 13.334 0 6.667 6.667 0 0 1-13.334 0z" />
  </svg>
);

export default SvgEye;
