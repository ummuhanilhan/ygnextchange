import * as React from "react";
import { SVGProps } from "react";

const SvgCardImage = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
    <path d="M12.003 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
    <path d="M3 4a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3h26a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H3zm26 2a1 1 0 0 1 1 1v11.998l-7.55-3.893a1 1 0 0 0-1.154.187l-7.42 7.42-5.318-3.545a1 1 0 0 0-1.262.125l-5.293 4.707v1.079A1.023 1.023 0 0 1 2 24.999v-18a1 1 0 0 1 1-1h26z" />
  </svg>
);

export default SvgCardImage;
