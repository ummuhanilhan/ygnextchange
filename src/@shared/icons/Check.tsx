import * as React from "react";
import { SVGProps } from "react";

const SvgCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 32" {...props}>
    <path d="M33.844 1.052a3.46 3.46 0 0 1 4.944 4.845L20.362 28.929a1.28 1.28 0 0 1-.085.095 3.46 3.46 0 0 1-4.895 0L3.168 16.81a3.46 3.46 0 1 1 4.895-4.895l9.662 9.662L33.751 1.156c.028-.036.059-.071.092-.104z" />
  </svg>
);

export default SvgCheck;
