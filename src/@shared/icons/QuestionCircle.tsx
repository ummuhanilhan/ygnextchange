import * as React from "react";
import { SVGProps } from "react";

const SvgQuestionCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
    <path d="M16 30C8.268 30 2 23.732 2 16S8.268 2 16 2s14 6.268 14 14-6.268 14-14 14zm0 2c8.836 0 16-7.164 16-16S24.836 0 16 0C7.163 0 0 7.163 0 16s7.163 16 16 16z" />
    <path d="M10.51 11.572a.475.475 0 0 0 .482.493h1.649c.276 0 .496-.225.533-.499.178-1.312 1.079-2.269 2.684-2.269 1.371 0 2.628.686 2.628 2.336 0 1.27-.749 1.854-1.93 2.742-1.346.978-2.412 2.12-2.336 3.974l.006.434a.5.5 0 0 0 .5.493h1.622a.5.5 0 0 0 .5-.5v-.211c0-1.435.546-1.854 2.019-2.971 1.219-.927 2.488-1.955 2.488-4.113C21.355 8.46 18.803 7 16.01 7c-2.534 0-5.311 1.181-5.5 4.572zm3.114 11.526c0 1.066.851 1.854 2.019 1.854 1.219 0 2.057-.787 2.057-1.854 0-1.104-.838-1.879-2.057-1.879-1.168 0-2.019.774-2.019 1.879z" />
  </svg>
);

export default SvgQuestionCircle;
