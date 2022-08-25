import * as React from "react";
import { SVGProps } from "react";

const SvgChatLeftText = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
    <path d="M28 2a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8.828A3.995 3.995 0 0 0 6 23.172l-4 4V4a2 2 0 0 1 2-2h24zM4 0a4 4 0 0 0-4 4v25.586c0 .891 1.077 1.337 1.707.707l5.707-5.707A2 2 0 0 1 8.828 24H28a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4H4z" />
    <path d="M6 7a1 1 0 0 1 1-1h18a1 1 0 0 1 0 2H7a1 1 0 0 1-1-1zm0 5a1 1 0 0 1 1-1h18a1 1 0 0 1 0 2H7a1 1 0 0 1-1-1zm0 5a1 1 0 0 1 1-1h10a1 1 0 0 1 0 2H7a1 1 0 0 1-1-1z" />
  </svg>
);

export default SvgChatLeftText;
