import * as React from "react";
import { SVGProps } from "react";

const SvgArrowRightCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
    <path d="M2 16c0 7.732 6.268 14 14 14s14-6.268 14-14S23.732 2 16 2 2 8.268 2 16zm30 0c0 8.836-7.164 16-16 16S0 24.836 0 16C0 7.163 7.163 0 16 0s16 7.163 16 16zM9 15a1 1 0 0 0 0 2h11.586l-4.293 4.293a.999.999 0 1 0 1.414 1.414l6-6a.999.999 0 0 0 0-1.414l-6-6a.999.999 0 1 0-1.414 1.414L20.586 15H9z" />
  </svg>
);

export default SvgArrowRightCircle;
