import clx from "classnames"
import React, { useState, useEffect } from "react"


export const Frame = ({children, className, nopadding}:any) => {
    return(
      <div 
      className={clx(
         `frame bg-white rounded-lg`, {'p-3 mt-3': nopadding}, className)}>
      <div className='bottomize bg-yg-lightblue bg-gray-100- p-3 rounded-md '>
        {children}
      </div>
    </div>
    )
  }

  
export const DoubleFrame = ({children, className, forwardRef, id}:any) => {

  return(
    <div id={id} ref={forwardRef} className={clx('frame bg-white p-3 rounded-md mt-3 ', className)}>
      {children}
  </div>
  )
}
