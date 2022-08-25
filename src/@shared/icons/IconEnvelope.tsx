import * as React from "react";
import { SVGProps } from "react";

const SvgIconEnvelope = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
    <path d="M0 8a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V8zm4-2a2 2 0 0 0-2 2v.434l14 8.4 14-8.4V8a2 2 0 0 0-2-2H4zm26 4.766-9.416 5.65L30 22.211V10.767zm-.068 13.751-11.281-6.942-2.652 1.591-2.652-1.591-11.281 6.942A2.001 2.001 0 0 0 3.998 26h24a2 2 0 0 0 1.932-1.483zM2 22.21l9.416-5.795L2 10.765v11.444z" />
  </svg>
);

export default SvgIconEnvelope;
