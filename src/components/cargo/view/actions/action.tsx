import { Heart, HeartFill } from "@yukgetir-icons"
import cx from "classnames"
import { useEffect, useState } from "react"
import { useAppDispatch } from "stores/store"

export const Action = ({path, color, title, outline, disabled, onClick}:any) => {
    const disabledItem =  <a href={path} className={cx(
        ` py-1 px-2 border border-transparent cursor-pointer text-sm rounded-md inline-block ml-2`,
        `bg-gray-300 text-white inline-block float-left h-min w-max`
    )} onClick={onClick} >{title}</a>

    const normalItem = <div // href={path} 
    className={cx(
        ` py-1 px-2 border border-transparent cursor-pointer text-sm rounded-md inline-block ml-2`,
        `bg-yg-${color} text-white inline-block float-left h-min w-max`,
        `hover:border-yg-${color} hover:bg-transparent hover:text-yg-${color}`
    )} onClick={onClick} >{title}</div>

    const outlinedItem = <a href={path} className={cx(
        ` py-1 px-2 border cursor-pointer text-sm rounded-md inline-block ml-2`,
        `bg-transparent text-yg-${color} border-yg-${color} inline-block float-left h-min w-max`,
        `hover:border-yg-${color} hover:bg-transparent hover:text-yg-${color}`
    )} onClick={onClick} >{title}</a>

    return !outline? (
       disabled ? disabledItem : normalItem
    ): outlinedItem
}