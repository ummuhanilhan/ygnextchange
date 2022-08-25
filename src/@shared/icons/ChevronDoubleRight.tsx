import * as React from "react";
import { SVGProps } from "react";

const SvgChevronDoubleRight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
    <path d="M7.293 3.293a.999.999 0 0 1 1.414 0l12 12a.999.999 0 0 1 0 1.414l-12 12a.999.999 0 1 1-1.414-1.414L18.586 16 7.293 4.707a.999.999 0 0 1 0-1.414z" />
    <path d="M15.293 3.293a.999.999 0 0 1 1.414 0l12 12a.999.999 0 0 1 0 1.414l-12 12a.999.999 0 1 1-1.414-1.414L26.586 16 15.293 4.707a.999.999 0 0 1 0-1.414z" />
  </svg>
);

export default SvgChevronDoubleRight;
