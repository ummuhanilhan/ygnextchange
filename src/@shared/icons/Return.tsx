import * as React from "react";
import { SVGProps } from "react";

const SvgReturn = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
    <path d="M30.878 2.931c.601 0 1.088.487 1.088 1.088v10.449a5.442 5.442 0 0 1-5.442 5.442H5.206l7.285 7.285a1.088 1.088 0 1 1-1.539 1.539l-9.143-9.143a1.088 1.088 0 0 1 0-1.539l8.707-8.707a1.088 1.088 0 1 1 1.539 1.539l-6.849 6.849h21.318a3.265 3.265 0 0 0 3.265-3.265V4.019c0-.601.487-1.088 1.088-1.088z" />
  </svg>
);

export default SvgReturn;
