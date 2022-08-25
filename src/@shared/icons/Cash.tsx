import * as React from "react";
import { SVGProps } from "react";

const SvgCash = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 32" {...props}>
    <path d="M12.19 15.619a3.048 3.048 0 1 0 0-6.096 3.048 3.048 0 0 0 0 6.096z" />
    <path d="M0 6.476c0-.842.682-1.524 1.524-1.524h21.333c.842 0 1.524.682 1.524 1.524v12.19c0 .842-.682 1.524-1.524 1.524H1.524A1.524 1.524 0 0 1 0 18.666V6.476zm4.571 0a3.048 3.048 0 0 1-3.048 3.048v6.095a3.048 3.048 0 0 1 3.048 3.048h15.238a3.048 3.048 0 0 1 3.048-3.048V9.524a3.048 3.048 0 0 1-3.048-3.048H4.571z" />
  </svg>
);

export default SvgCash;
