import * as React from "react";
import { SVGProps } from "react";

const SvgForward = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
    <path d="M19.004 11.026a.289.289 0 0 0-.404.268v2.007a1 1 0 0 1-1 1H5v5.8h12.6a1 1 0 0 1 1 1v2.007c0 .216.219.351.404.268l7.967-5.866a.959.959 0 0 1 .085-.056.294.294 0 0 0 0-.505.959.959 0 0 1-.085-.056l-7.967-5.866zm-2.404.267c0-1.791 1.939-2.866 3.449-1.976a.959.959 0 0 1 .085.056l7.987 5.88c1.438.894 1.438 2.997 0 3.891l-7.987 5.88a1.13 1.13 0 0 1-.085.056c-1.511.89-3.449-.185-3.449-1.976v-1.007H4a1 1 0 0 1-1-1v-7.8a1 1 0 0 1 1-1h12.6V11.29z" />
  </svg>
);

export default SvgForward;
