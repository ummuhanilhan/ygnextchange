import { TitleFrame } from "@components/frames/TitleFrame";
import { MultiSelectHook, VehicleRadioHook } from "@shared/elements/hooks";
import { CircleFill, CircleHalf } from "@shared/icons";
import React from "react";
 
 

export const Rent = ({control}:any) => {
 
    return (
            <React.Fragment>
                    <TitleFrame title="Araç Markası">
                    <div className='grid grid-cols-2 gap-2'>
                        <div className='bg-white border border-1 border-yukgetir-blue py-3 rounded-md w-full text-center 
                        flex justify-center items-center cursor-pointer'>
                            <div className='flex items-center'>
                                <CircleFill width={17} className='fill-yukgetir-blue' />
                                <p className='ml-2 text-yukgetir-blue'>Komple</p>
                            </div>
                        </div>
                        <div className='bg-white border border-1 border-transparent py-3 rounded-md w-full text-center justify 
                        flex-center items-center cursor-pointer'>
                            <div className='flex items-center'>
                                <CircleHalf width={17} className='fill-yukgetir-gray' />
                                <p className='ml-2 text-yukgetir-gray'>Parsiyel</p>
                            </div>
                        </div>
                    </div>
                </TitleFrame>
                        
                <div className="grid grid-cols-1 w-full">
                <TitleFrame title="Araç Tipi">
                        <VehicleRadioHook name="type" control={control} />
                </TitleFrame>
                </div>
                {/** <TitleFrame title="Araç Tipi"></TitleFrame> **/}
                <div className='grid grid-cols-2'>
                    <TitleFrame title="Araç Özellikleri">
                        <MultiSelectHook name="feature" control={control} placeholder="Araç Özellikleri Seçiniz" />                 
                    </TitleFrame>
                    <TitleFrame title="Donanım Seçenekleri">
                        <MultiSelectHook name="options" control={control} placeholder="Yükünüze Uygun Ek Donanım Özellikleri Seçiniz" />                 
                    </TitleFrame>
                </div>
            </React.Fragment>
    )
}


export default Rent;



