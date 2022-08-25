import * as React from "react";
import { SVGProps } from "react";

const SvgPerson = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
    <path d="M16 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm4-6a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM28 26c0 2-2 2-2 2H6s-2 0-2-2 2-8 12-8 12 6 12 8zm-2-.007c-.003-.493-.308-1.972-1.664-3.329C23.031 21.36 20.578 20 16 20s-7.031 1.36-8.336 2.664C6.307 24.021 6.003 25.499 6 25.993h20z" />
  </svg>
);

export default SvgPerson;
