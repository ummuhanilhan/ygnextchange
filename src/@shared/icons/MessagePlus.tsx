import * as React from "react";
import { SVGProps } from "react";

const SvgMessagePlus = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 32" {...props}>
    <path d="M32.062 1.371a1 1 0 0 0-1.3-1.3L1.668 11.709c-1.135.454-1.279 2.002-.248 2.658l9.989 6.357 3.063 4.813a1 1 0 0 0 1.688-1.073l-2.751-4.323L28.397 5.153l-3.791 9.477a1 1 0 1 0 1.857.743l5.6-14zm-5.08 2.367L11.994 18.726l-8.677-5.522 23.665-9.466z" />
    <path d="M32.134 25a7 7 0 1 1-14 0 7 7 0 0 1 14 0zm-7-4a1 1 0 0 0-1 1v2h-2a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2h-2v-2a1 1 0 0 0-1-1z" />
  </svg>
);

export default SvgMessagePlus;
