import * as React from "react";
import { SVGProps } from "react";

const SvgShare = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
    <path d="M27 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm-5 3a5 5 0 1 1 1.205 3.256L9.77 14.497a5.016 5.016 0 0 1 0 3.008l13.435 6.241a5 5 0 1 1-.975 1.752L8.795 19.257a5 5 0 1 1 0-6.512L22.23 6.504A5.016 5.016 0 0 1 22 5zM5 13a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm22 11a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
  </svg>
);

export default SvgShare;
