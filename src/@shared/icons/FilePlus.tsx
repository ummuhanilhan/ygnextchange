import * as React from "react";
import { SVGProps } from "react";

const SvgFilePlus = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 32" {...props}>
    <path d="M16.19 11.81a.952.952 0 1 0-1.904 0v2.857h-2.857a.952.952 0 1 0 0 1.904h2.857v2.857a.952.952 0 1 0 1.904 0v-2.857h2.857a.952.952 0 1 0 0-1.904H16.19V11.81z" />
    <path d="M3.81 4.19A3.81 3.81 0 0 1 7.62.38h15.238a3.81 3.81 0 0 1 3.81 3.81v22.857a3.81 3.81 0 0 1-3.81 3.81H7.62a3.81 3.81 0 0 1-3.81-3.81V4.19zm19.047-1.904H7.619a1.905 1.905 0 0 0-1.905 1.905v22.857c0 1.052.853 1.905 1.905 1.905h15.238a1.905 1.905 0 0 0 1.905-1.905V4.191a1.905 1.905 0 0 0-1.905-1.905z" />
  </svg>
);

export default SvgFilePlus;
