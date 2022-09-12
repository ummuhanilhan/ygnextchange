import React from "react"
import { Eye, Heart, HeartFill } from "@yukgetir-icons"
import classNames from "classnames"


export const Actions = ({item, type, fav}:any) => {

    const faved = (
        <div className='heart rounded-md border border-1 border-yg-orange h-[1.85em] w-[1.85em] flex
                items-center justify-center mr-2 cursor-pointer hover:bg-yg-lightblue'> 
                {item.fav ? <HeartFill width={15} className='fill-yg-orange' /> : <Heart width={15} className='fill-yg-orange' />}
        </div>
    )
        
    const viewed = (
        <div className='view flex flex-col items-center mr-2'>
            <Eye width={15} className='fill-gray-400' />
            <p className='text-gray-400 text-sm'>{item.view}</p>
        </div>
    )

    return (
        <div className='flex items-end'>
            {viewed}
            {faved}
            <Action title='Sil' color='gray' path='#' outline />
            <Action title='Vazgeç' color='gray' path='#' outline />
            <Action title='Kopyala' color='blue' path='#' outline />
            <Action title='Detay Gör' color='orange' path='#' />
            <Action title='Teklif Gönder' color='blue' path='#' />
             {/**
            <Action title='Düzenle' color='blue' path='#' />
            <Action title='İlan Detayını Gör' color='orange' path='#' />
            <Action title='Sevkiyatı Tamamla' color='green' path='#' />
             **/}
        </div>
    )
}


export const Action = ({path, color, title, outline}:any) => {
 
    return !outline? (
        <a href={path} className={classNames(
            `button py-1 px-5 border border-transparent cursor-pointer text-sm rounded-md inline-block ml-1`,
            `bg-yg-${color} text-white`,
            `hover:border-yg-${color} hover:bg-transparent hover:text-yg-${color}`
        )}>{title}</a>
    ):(
        <a href={path} className={classNames(
            `button py-1 px-3 border cursor-pointer text-sm rounded-md inline-block ml-1`,
            `bg-transparent text-yg-${color} border-yg-${color}`,
            `hover:border-yg-${color} hover:bg-transparent hover:text-yg-${color}`
        )}>{title}</a>
    )
}
