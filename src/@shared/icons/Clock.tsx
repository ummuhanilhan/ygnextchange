import * as React from "react";
import { SVGProps } from "react";

const SvgClock = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 32" {...props}>
    <path d="M16.8 7a1 1 0 0 0-2 0v11c0 .359.192.69.504.868l7 4a1 1 0 0 0 .992-1.736L16.8 17.42V7z" />
    <path d="M16.8 32c8.836 0 16-7.164 16-16s-7.164-16-16-16C7.963 0 .8 7.163.8 16s7.163 16 16 16zm14-16c0 7.732-6.268 14-14 14s-14-6.268-14-14 6.268-14 14-14 14 6.268 14 14z" />
  </svg>
);

export default SvgClock;
