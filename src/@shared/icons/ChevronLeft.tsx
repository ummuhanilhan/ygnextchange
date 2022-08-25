import * as React from "react";
import { SVGProps } from "react";

const SvgChevronLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 32" {...props}>
    <path d="M21.618 28.102a.952.952 0 0 1-1.347 0L8.843 16.673a.952.952 0 0 1 0-1.347L20.271 3.897a.952.952 0 1 1 1.347 1.347L10.863 15.999l10.755 10.755a.952.952 0 0 1 0 1.347z" />
  </svg>
);

export default SvgChevronLeft;
