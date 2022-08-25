import * as React from "react";
import { SVGProps } from "react";

const SvgArrowRightShort = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
    <path d="M8 16a1 1 0 0 1 1-1h11.586l-4.293-4.293a.999.999 0 1 1 1.414-1.414l6 6a.999.999 0 0 1 0 1.414l-6 6a.999.999 0 1 1-1.414-1.414L20.586 17H9a1 1 0 0 1-1-1z" />
  </svg>
);

export default SvgArrowRightShort;
