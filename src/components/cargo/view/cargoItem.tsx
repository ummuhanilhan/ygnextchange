import React from "react"
import { Calendar, Capslock, ChevronDoubleRight, CircleFill, CircleHalf, Clock, Eye, Forward, Geo, Heart, HeartFill, People, PinAngle, Truck } from "@yukgetir-icons"
import classNames from "classnames"
import { FaMapPin } from "react-icons/fa"
import { FiInfo } from "react-icons/fi"
import { Actions } from "./Actions"

export const CargoItem = ({item, actionType='' }:any) => {

    return (
        <div className={classNames(
            'cargo-item bg-white px-4 my-3 rounded-lg py-4',
            {'grayscale': item.progress=='outdated'}
        )}>
            <div className="flex justify-between">
                <div className="flex items-start">

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
                    {item.progress == 'active' && (
                        <p className='text-yg-green flex items-center justify-start text-sm'>  
                            <FiInfo size={17} className='text-yg-green mr-1' /> 
                            Durum: Sevkiyat Devam Ediyor    
                        </p>
                    )}
                     {item.progress == 'pending' && (
                        <p className='text-red-600 flex items-center justify-start text-sm'>  
                            <FiInfo size={17} className='text-red-600 mr-1' /> 
                            Durum: İlan Sahibinden Teslimat Onayı Bekliyor    
                        </p>
                    )}
                    {item.progress == 'complated' && (
                        <p className='flex items-center justify-start text-sm'>  
                            <FiInfo size={17} className='mr-1' /> 
                            Durum: Sevkiyat Tamamlandı    
                        </p>
                    )}

                </div>
               <Actions item={item} actionType={actionType} />
            </div>
        </div>
    )
}

