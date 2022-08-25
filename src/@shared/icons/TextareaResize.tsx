import * as React from "react";
import { SVGProps } from "react";

const SvgTextareaResize = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
    <path d="M0 9a5 5 0 0 1 5-5h22a5 5 0 0 1 5 5v14a5 5 0 0 1-5 5H5a5 5 0 0 1-5-5V9zm5-3a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h22a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H5zm21.707 9.293a.999.999 0 0 1 0 1.414l-6 6a.999.999 0 1 1-1.414-1.414l6-6a.999.999 0 0 1 1.414 0zm0 5a.999.999 0 0 1 0 1.414l-1 1a.999.999 0 1 1-1.414-1.414l1-1a.999.999 0 0 1 1.414 0z" />
  </svg>
);

export default SvgTextareaResize;
