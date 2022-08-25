import * as React from "react";
import { SVGProps } from "react";

const SvgTruckFront = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
    <path d="M10 22a2 2 0 1 1-3.999.001A2 2 0 0 1 10 22zM26 22a2 2 0 1 1-3.999.001A2 2 0 0 1 26 22zM14 20a2 2 0 1 0 0 4h4a2 2 0 1 0 0-4h-4zM8 4a2 2 0 0 0-2 2v7.801a2.017 2.017 0 0 0 2.34 1.986C10.151 15.495 13.585 15 16 15s5.849.495 7.66.787A2.017 2.017 0 0 0 26 13.801V6a2 2 0 0 0-2-2H8zm0 2h16v7.801c0 .003 0 .001 0 0 0 0-.001.004-.004.007s-.007.004-.009.005h-.008C22.175 13.522 18.595 13 16 13s-6.175.521-7.979.813h-.008l-.009-.005C8 13.805 8 13.803 8 13.803c.001.001 0 .003 0 0V6z" />
    <path d="M2 5a5 5 0 0 1 5-5h18a5 5 0 0 1 5 5v18a4.992 4.992 0 0 1-2 4v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-3H10v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-4a4.994 4.994 0 0 1-2-4V5zm5-3a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H7z" />
  </svg>
);

export default SvgTruckFront;
