import React from "react"
import { Calendar, ChevronRightClosed, Clock, People, PinAngle } from "@yukgetir-icons"
import classNames from "classnames"
import { Actions } from "./Actions"

export const VehicleItem = ({item, type='normal'}:any) => {

    console.log('item', item)
    return (
        <div className={classNames(
            'cargo-item bg-white px-4 my-3 rounded-lg py-4',
            {'grayscale': item.outdated}
        )}>
            <div className="flex justify-between mb-[1.2rem]">
                <div className="flex items-start">
                 
                    <div className="tag rounded-lg p-1 px-3 border border-1 
                    border-yg-blue m-r2 flex items-start w-max"> 
                        <People className='fill-yg-blue' width={20} /> 
                        <p className='text-yg-blue ml-1 text-sm'>{item.corporate?'Kurumsal Araç':'Bireysel Araç'}</p>
                    </div>

                    <ul className="flex items-start justify-center">
                        <li className="flex flex-start mx-1 ml-2 text-sm">
                            <PinAngle width={15} />
                            <p className='ml-1'> Araç No: 25959 </p>
                        </li>
                        <li className="flex flex-start mx-1 ml-2 text-sm">
                            <ChevronRightClosed width={8} className='fill-yg-blue' />
                            <b className='ml-1 text-yg-blue fond-medium'> Araç Markası: </b> 
                            <p className='text-gray ml-1'>Scania</p>
                        </li>
                        <li className="flex flex-start mx-1 ml-2 text-sm">
                            <ChevronRightClosed width={8} className='fill-yg-blue' />
                            <b className='ml-1 text-yg-blue fond-medium'> Araç Modeli: </b> 
                            <p className='text-gray ml-1'>500S</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex justify-between mt-[-1em]">
                <div className={classNames({
                     'mt-6-':item.tax 
                })}>
                    <ul className='mt-1'>
                        <li className='flex items-start'>
                            <ChevronRightClosed width={8} className='fill-yg-blue mr-2' />
                             <p className="text-yg-blue text-sm mr-2">Araç Tipi:</p>
                             <p className='text-gray-400 text-sm'>Dorse</p> 
                        </li>
                        <li className='flex items-start'>
                            <ChevronRightClosed width={8} className='fill-yg-blue mr-2' />
                             <p className="text-yg-blue text-sm mr-2">Araç Özelliklei:</p>
                             <p className='text-gray-400 text-sm'>10 Teker Kamyon Kapalı, 10 Teker Kamyon Açık</p> 
                        </li>
                        <li className='flex items-start'>
                            <ChevronRightClosed width={8} className='fill-yg-blue mr-2' />
                             <p className="text-yg-blue text-sm mr-2">Donanım Özellikleri:</p>
                             <p className='text-gray-400 text-sm'>Adr, Isı Kontrolü</p> 
                        </li>
                    </ul>
                </div>
               <Actions item={item} actionType='vehicle-active' />
            </div>
        </div>
    )
}

