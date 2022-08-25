import * as React from "react";
import { SVGProps } from "react";

const SvgBoxArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
    <path d="M20 25a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v4a1 1 0 0 0 2 0V7a3 3 0 0 0-3-3H3a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3v-4a1 1 0 0 0-2 0v4z" />
    <path d="M31.707 16.707a.999.999 0 0 0 0-1.414l-6-6a.999.999 0 1 0-1.414 1.414L28.586 15H11a1 1 0 0 0 0 2h17.586l-4.293 4.293a.999.999 0 1 0 1.414 1.414l6-6z" />
  </svg>
);

export default SvgBoxArrowRight;
