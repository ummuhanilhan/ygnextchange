import * as React from "react";
import { SVGProps } from "react";

const SvgToggleOff = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
    <path d="M22 8a8 8 0 0 1 0 16h-5.999C18.429 22.176 20 19.271 20 16s-1.571-6.176-3.999-8H22zM10 24a8 8 0 1 1 0-16 8 8 0 0 1 0 16zM0 16c0 5.523 4.477 10 10 10h12c5.523 0 10-4.477 10-10S27.523 6 22 6H10C4.477 6 0 10.477 0 16z" />
  </svg>
);

export default SvgToggleOff;
