import * as React from "react";
import { SVGProps } from "react";

const SvgPersonCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
    <path d="M12 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm4-6a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM24 26c0 2-2 2-2 2H2s-2 0-2-2 2-8 12-8 12 6 12 8zm-2-.007c-.003-.493-.308-1.972-1.664-3.329C19.031 21.36 16.578 20 12 20s-7.031 1.36-8.336 2.664C2.307 24.021 2.003 25.499 2 25.993h20zM31.707 10.293a.999.999 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414 0l-3-3a.999.999 0 1 1 1.414-1.414L25 15.586l5.293-5.293a.999.999 0 0 1 1.414 0z" />
  </svg>
);

export default SvgPersonCheck;
