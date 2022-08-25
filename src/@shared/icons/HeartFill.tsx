import * as React from "react";
import { SVGProps } from "react";

const SvgHeartFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 32" {...props}>
    <path d="M15.238 3.265c8.454-8.69 29.589 6.517 0 26.069-29.589-19.551-8.454-34.758 0-26.069z" />
  </svg>
);

export default SvgHeartFill;
