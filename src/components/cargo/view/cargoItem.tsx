import React from "react"
import { Calendar, Capslock, ChevronDoubleRight, CircleFill, CircleHalf, Clock, Eye, Forward, Geo, Heart, HeartFill, People, PinAngle, Truck } from "@yukgetir-icons"
import classNames from "classnames"
import { FaMapPin } from "react-icons/fa"
import { FiInfo } from "react-icons/fi"
import { Actions } from "./Actions"

export const CargoItem = ({item, actionType='', status}:any) => {
  console.log(actionType)
    return (
        <div className={classNames(
            'cargo-item bg-white px-4 mb-3 rounded-lg py-4',
            {'grayscale': item.progress=='outdated'}
        )}>
            <div className=''>
                <div className='flex justify-between '>
                    <ul className='w-full -flex items-start
                    '>
                        
                       <li className='inline-block float-left'>
                        <div className='tag rounded-lg p-1 px-1 w-fit border border-1 
                            border-yg-blue flex items-start h-min'> 
                                <People className='fill-yg-blue' width={20} /> 
                                <p className='text-yg-blue ml-1 text-sm'>
                                    {item.corporate?'Kurumsal İlan':'Bireysel İlan'}
                                </p>
                            </div>
                       </li>
                        
                       <li className='inline-block float-left'>
                            <div className=" flex items-start mt-1 h-fit justify-center ml-2">
                                <PinAngle width={15} />
                                <p className='ml-1 text-sm '> İlan No: 25959 </p>
                            </div>
                       </li>

                        <li className='inline-block float-left'>
                            <div className='flex items-start'>
                                <div><Geo width={20} className='fill-yg-blue ml-1' /></div>
                                <p className='text-gray-500 pl-1'>Ankara</p>
                                <div><ChevronDoubleRight width={20} className='fill-yg-orange mt-[.1rem]' /></div>
                                <p className='text-gray-500 px-1'>Mersin</p>
                            </div>
                        </li>
                        
                        <li className='inline-block float-left'>
                            <div className="flex items-start ml-3">  
                                {item.type ? 
                                <div><CircleFill width={15} className='fill-yg-blue mt-[.25rem] ml--1' /></div> : 
                                <div><CircleHalf width={15} className='fill-yg-blue mt-[.25rem] ml--1' /></div> }
                                <p className="text-gray-400 ml-1">{!item.type? 'Parsiyel':'Komple'}</p>
                            </div>
                        </li>
                        
                    </ul>
                    <div className='flex items-end flex-col'>
                        <h2 className='text-2xl font-bold'>{item.price}{item.currency}</h2>
                        <p className='text-gray-400 text-sm w-max'>({item.vat?'KDV Dahil':'+KDV'})</p>
                    </div>
                  </div>
            </div>    
            <div className="flex flex-col lg:flex-row justify-between --mt-[-1em]">
                <div className={classNames(
                    'flex-[5] md:flex-[3] sm:mt-[-1.3em]',
                    {'mt-6-':item.tax }
                )}>
                
                <ul className='mt-1 grid grid-cols-1'>
                    <li className='flex w-screen mb-1 mt-2'>
                        <div><Calendar width={17} className='fill-yg-blue mr-2 mb-1' /></div>
                        <p className="text-yg-blue text-sm mr-2">Yükleme Tarihi:</p>
                        <p className='text-gray-400 text-sm'>{item.date}</p>
                     </li>
                    <li className='flex w-screen mb-1'>
                        <div> <Clock width={17} className='fill-yg-blue mr-2 mb-1' /></div>
                        <p className="text-yg-blue text-sm mr-2">Boşaltma Zamanı:</p>
                        <p className='text-gray-400 text-sm'>{item.time}</p>
                    </li>  
                </ul>
                <ul className='mt-1 grid grid-cols-1'>
                <li className='flex w-screen mb-1'>
                    <div> <Truck width={17} className='fill-yg-blue mr-2 mb-1' /></div>
                    <p className="text-yg-blue text-sm mr-2">Araç Tipi:</p>
                    <p className='text-gray-400 text-sm'>{item.vehicle}</p>
                </li>
                <li className='flex w-screen mb-1 --ml-8'>
                    <div> <Capslock width={17} className='fill-yg-blue mr-2 mb-1' /></div>
                    <p className='text-gray-400 text-sm'>{item.weight}</p>
                </li>
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
                   <Actions item={item} actionType={actionType} status={status} />
            </div>
        </div>
    )
}

