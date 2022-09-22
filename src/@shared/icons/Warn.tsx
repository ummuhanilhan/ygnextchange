import * as React from "react";
import { SVGProps } from "react";

const SvgWarn = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 32" {...props}>
    <path d="M1.617 27.468a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0zM1.985 4.95a3.394 3.394 0 1 1 6.754 0L7.424 18.103a2.072 2.072 0 0 1-4.124 0L1.985 4.95z" />
  </svg>
);

export default SvgWarn;
