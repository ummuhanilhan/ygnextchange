import * as React from "react";
import { SVGProps } from "react";

const SvgPacket = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 32" {...props}>
    <path d="M16.519 2.082a1.002 1.002 0 0 0-.746 0L3.779 6.879 8.61 8.811l12.367-4.947-4.457-1.783zm7.163 2.865L11.315 9.894l4.831 1.932 12.367-4.947-4.831-1.932zm6.531 3.416L17.15 13.588v15.923l13.063-5.225V8.363zM15.141 29.511V13.588L2.078 8.363v15.923l13.063 5.225zM15.026.216a3.019 3.019 0 0 1 2.239 0l14.326 5.73c.381.153.632.522.632.933v17.407c0 .822-.5 1.561-1.263 1.866l-14.441 5.776c-.24.096-.507.096-.746 0L1.332 26.152a2.009 2.009 0 0 1-1.263-1.866V6.879c0-.411.25-.78.632-.933L15.027.216z" />
  </svg>
);

export default SvgPacket;
