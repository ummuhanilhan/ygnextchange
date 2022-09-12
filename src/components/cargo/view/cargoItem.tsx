import React from "react"
import { Calendar, Capslock, ChevronDoubleRight, CircleFill, CircleHalf, Clock, Eye, Forward, Geo, Heart, HeartFill, People, PinAngle, Truck } from "@yukgetir-icons"
import classNames from "classnames"
import { FaMapPin } from "react-icons/fa"
import { FiInfo } from "react-icons/fi"

export const CargoItem = ({item, type='normal'}:any) => {

    return (
        <div className={classNames(
            'cargo-item bg-white px-4 my-3 rounded-lg py-4',
            {'grayscale': item.outdated}
        )}>
            <div className="flex justify-between">
                <div className="flex items-start">
                <div className="tag rounded-lg p-1 px-3 border border-1 
                    border-yg-blue m-r2 flex items-start w-max mr-2"> 
                        <FaMapPin className='fill-yg-blue' width={20} /> 
                        <p className='text-yg-blue ml-1 text-sm'>Araç no: 253347</p>
                    </div>
                    <div className="tag rounded-lg p-1 px-3 border border-1 
                    border-yg-blue m-r2 flex items-start w-max"> 
                        <People className='fill-yg-blue' width={20} /> 
                        <p className='text-yg-blue ml-1 text-sm'>{item.corporate?'Kurumsal İlan':'Bireysel İlan'}</p>
                    </div>
                    <div className="flex items-start justify-center">
                        <div className="flex flex-start mx-1 ml-2">
                            <PinAngle width={15} />
                            <p className='ml-1'> İlan No: 25959 </p>
                        </div>
                        

                        <Geo width={20} className='fill-yg-blue ml-1' />
                        <p className='text-gray-500 pl-1'>Ankara</p>
                        <ChevronDoubleRight width={20} className='fill-yg-orange mt-[.1rem]' />
                        <p className='text-gray-500 px-1'>Mersin</p>
                        <Forward width={20} />
                        <p className="ml-1 mr-3">{item.distance}</p>
                        {item.type ? 
                        <CircleFill width={15} className='fill-yg-blue mt-[.25rem] ml-1' /> : 
                        <CircleHalf width={15} className='fill-yg-blue mt-[.25rem] ml-1' />}
                        <p className="text-gray-400 ml-1">{!item.type? 'Parsiyel':'Komple'}</p>
                    </div>
                </div>
                <div className='flex items-end flex-col'>
                    <h2 className='text-2xl font-bold'>{item.price}{item.currency}</h2>
                    <p className='text-gray-400 text-sm'>({item.vat?'KDV Dahil':'+KDV'})</p>
                </div>
            </div>
            <div className="flex justify-between mt-[-1em]">
                <div className={classNames({
                     'mt-6-':item.tax 
                })}>
                    <ul className='mt-1'>
                        <li className='flex items-start'>
                            <Calendar width={17} className='fill-yg-blue mr-2 mb-1' />
                            <p className="text-yg-blue text-sm mr-2">Yükleme Tarihi:</p>
                             <p className='text-gray-400 text-sm'>{item.date}</p> </li>
                        <li className='flex items-start'>
                            <Clock width={17} className='fill-yg-blue mr-2 mb-1' />
                            <p className="text-yg-blue text-sm mr-2">Boşaltma Zamanı:</p>
                             <p className='text-gray-400 text-sm'>{item.time}</p> </li>
                    </ul>
                    <ul className='flex items-start'>
                        <li className='flex items-start'>
                            <Truck width={17} className='fill-yg-blue mr-2 mb-1' />
                            <p className="text-yg-blue text-sm mr-2">Araç Tipi:</p>
                             <p className='text-gray-400 text-sm'>{item.vehicle}</p> </li>
                        <li className='flex items-start ml-8'>
                            <Capslock width={17} className='fill-yg-blue mr-2 mb-1' />
                             <p className='text-gray-400 text-sm'>{item.weight}</p> </li>
                    </ul>
                   
                   {/*** SHIPMENT  **/}
                   {false && (
                        <p className='text-yg-green flex items-center justify-start text-sm'>  
                            <FiInfo size={17} className='text-yg-green mr-1' /> 
                            Durum: Sevkiyat Devam Ediyor    
                        </p>
                    )}
                     {false && (
                        <p className='text-red-600 flex items-center justify-start text-sm'>  
                            <FiInfo size={17} className='text-red-600 mr-1' /> 
                            Durum: İlan Sahibinden Teslimat Onayı Bekliyor    
                        </p>
                    )}
                      {true && (
                        <p className='flex items-center justify-start text-sm'>  
                            <FiInfo size={17} className=' mr-1' /> 
                            Durum: Sevkiyat Tamamlandı    
                        </p>
                    )}

                </div>
               <Actions item={item} type='normal' />
            </div>
        </div>
    )
}




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
            <Action title='İlan Detayını Gör' color='orange' path='#' />
            <Action title='Detay Gör' color='orange' path='#' />
            <Action title='Teklif Gönder' color='blue' path='#' />
            <Action title='Düzenle' color='blue' path='#' />
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