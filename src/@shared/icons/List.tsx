import * as React from "react";
import { SVGProps } from "react";

const SvgList = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
    <path d="M5 23a1 1 0 0 1 1-1h20a1 1 0 0 1 0 2H6a1 1 0 0 1-1-1zM5 15a1 1 0 0 1 1-1h20a1 1 0 0 1 0 2H6a1 1 0 0 1-1-1zM5 7a1 1 0 0 1 1-1h20a1 1 0 0 1 0 2H6a1 1 0 0 1-1-1z" />
  </svg>
);

export default SvgList;
