import * as React from "react";
import { SVGProps } from "react";

const SvgPinMap = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 32" {...props}>
    <path d="M5.905 21.714a.952.952 0 0 1 .762-.381h4.762a.952.952 0 1 1 0 1.904H7.143l-4.286 5.714h24.762l-4.286-5.714h-4.286a.952.952 0 1 1 0-1.904h4.762c.3 0 .582.141.762.381l5.714 7.619a.954.954 0 0 1-.762 1.523H.952a.953.953 0 0 1-.762-1.523l5.714-7.619z" />
    <path d="M15.238 2.286a5.714 5.714 0 1 0 0 11.427 5.714 5.714 0 0 0 0-11.427zM7.619 8a7.619 7.619 0 1 1 8.571 7.56v10.535a.952.952 0 1 1-1.904 0V15.56A7.621 7.621 0 0 1 7.619 8z" />
  </svg>
);

export default SvgPinMap;
