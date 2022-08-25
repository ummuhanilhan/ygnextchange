import * as React from "react";
import { SVGProps } from "react";

const SvgCapslock = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 32" {...props}>
    <path d="M13.967 29.906c-.632.843-1.702.843-2.335 0L1.479 16.368C.521 15.091 1.246 13 2.646 13h4.553v-2c0-1.105.716-2 1.6-2h8c.884 0 1.6.895 1.6 2v2h4.553c1.401 0 2.125 2.091 1.167 3.368L13.966 29.906zM2.646 15l10.153 13.538L22.952 15h-4.553c-.884 0-1.6-.895-1.6-2v-2h-8v2c0 1.105-.716 2-1.6 2H2.646zM18.4 5c0 1.105-.716 2-1.6 2h-8c-.884 0-1.6-.895-1.6-2V3c0-1.105.716-2 1.6-2h8c.884 0 1.6.895 1.6 2v2zM8.8 5h8V3h-8v2z" />
  </svg>
);

export default SvgCapslock;
