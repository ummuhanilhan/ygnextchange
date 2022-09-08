import React, { useRef, useEffect } from "react";

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutside(ref:any, cb:Function) {
  /* eslint-disable */
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event:any) {
      if (ref.current && !ref.current.contains(event.target)) {
        cb()
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

/**
 * Component that alerts if you click outside of it
 */
export default function Outside(props:any) {
  const wrapperRef = useRef(null);
  useOutside(wrapperRef, props.cb);

  return <div ref={wrapperRef}>{props.children}</div>;
}