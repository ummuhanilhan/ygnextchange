import * as React from "react";
import { SVGProps } from "react";

const SvgBoxArrowInRight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
    <path d="M12 7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H13a1 1 0 0 1-1-1v-4a1 1 0 0 0-2 0v4a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H13a3 3 0 0 0-3 3v4a1 1 0 0 0 2 0V7z" />
    <path d="M23.707 16.707a.999.999 0 0 0 0-1.414l-6-6a.999.999 0 1 0-1.414 1.414L20.586 15H3a1 1 0 0 0 0 2h17.586l-4.293 4.293a.999.999 0 1 0 1.414 1.414l6-6z" />
  </svg>
);

export default SvgBoxArrowInRight;
