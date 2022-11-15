import classNames from "classnames"
import React, { useState, useEffect } from "react"


export const Frame = ({children, className}:any) => {
  

    return(
      <div 
      className={classNames(
         `frame bg-white p-3 rounded-lg mt-3`, className)}>
      <div className='bottomize bg-yg-lightblue bg-gray-100- p-3 rounded-md '>
        {children}
      </div>
    </div>
    )
  }

  
export const DoubleFrame = ({children, className, forwardRef, id}:any) => {

  return(
    <div id={id} ref={forwardRef} className={classNames('frame bg-white p-3 rounded-md mt-3 ', className)}>
      {children}
  </div>
  )
}
