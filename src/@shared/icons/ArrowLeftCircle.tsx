import * as React from "react";
import { SVGProps } from "react";

const SvgArrowLeftCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 32" {...props}>
    <path d="M1.905 16.15c0 7.364 5.97 13.333 13.333 13.333s13.333-5.97 13.333-13.333c0-7.364-5.97-13.333-13.333-13.333S1.905 8.787 1.905 16.15zm28.571 0c0 8.416-6.822 15.238-15.238 15.238S0 24.566 0 16.15 6.822.912 15.238.912 30.476 7.734 30.476 16.15zm-8.571-.952a.952.952 0 1 1 0 1.904H10.871l4.088 4.088a.952.952 0 1 1-1.347 1.347l-5.714-5.714a.952.952 0 0 1 0-1.347l5.714-5.714a.952.952 0 1 1 1.347 1.347l-4.088 4.088h11.034z" />
  </svg>
);

export default SvgArrowLeftCircle;
