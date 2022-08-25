import * as React from "react";
import { SVGProps } from "react";

const SvgTruck = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 32" {...props}>
    <path d="M1.4 7a3 3 0 0 1 3-3h18a3 3 0 0 1 3 3v3h2.039c.911 0 1.773.414 2.343 1.126l2.961 3.702c.426.532.657 1.193.657 1.874V21a3 3 0 0 1-3 3h-1a4 4 0 0 1-8 0h-10a4 4 0 1 1-7.996-.169A3.002 3.002 0 0 1 1.4 21V7zm2.588 14.911A3.995 3.995 0 0 1 7.4 20c1.481 0 2.773.804 3.465 2h11.07a4.02 4.02 0 0 1 1.465-1.465V7a1 1 0 0 0-1-1h-18a1 1 0 0 0-1 1v14a1 1 0 0 0 .588.911zM25.4 20c1.481 0 2.773.804 3.465 2H30.4a1 1 0 0 0 1-1v-4.298c0-.227-.077-.447-.219-.625l-2.961-3.701a1 1 0 0 0-.781-.375H25.4v8zm-18 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 7.4 22zm18 0a2 2 0 1 0-.001 3.999A2 2 0 0 0 25.4 22z" />
  </svg>
);

export default SvgTruck;
