import { TitleFrame } from "@components/frames/TitleFrame";
import { MultiSelectHook, VehicleRadioHook } from "@shared/elements/hooks";
import { TagHook } from "@shared/elements/hooks/tagHook";
import { CircleFill, CircleHalf } from "@shared/icons";
import { tagItems } from "@utils/mock";
import React from "react";
 
export const Rent = ({control}:any) => {
 
    return (
            <React.Fragment>
                    <TitleFrame title="Araç Markası">
                    <div className='grid grid-cols-2 gap-2'>
                        <div className='bg-white border border-1 border-yg-blue py-3 rounded-md w-full text-center 
                        flex justify-center items-center cursor-pointer'>
                            <div className='flex items-center'>
                                <CircleFill width={17} className='fill-yg-blue' />
                                <p className='ml-2 text-yg-blue'>Komple</p>
                            </div>
                        </div>
                        <div className='bg-white border border-1 border-transparent py-3 rounded-md w-full text-center justify 
                        flex-center items-center cursor-pointer'>
                            <div className='flex items-center'>
                                <CircleHalf width={17} className='fill-yg-gray' />
                                <p className='ml-2 text-yg-gray'>Parsiyel</p>
                            </div>
                        </div>
                    </div>
                </TitleFrame>
                        
                <div className="grid grid-cols-1 w-full">
                    <TitleFrame title="Araç Tipi">
                        <VehicleRadioHook name="type" control={control} />
                    </TitleFrame>
                </div>
                <div className='grid grid-cols-2 gap-2'>
                    <TitleFrame title="Araç Özellikleri">
                        <TagHook
                            name="feature"
                            control={control}
                            placeholder="Araç Özellikleri Seçiniz"
                            size='medium'
                            items={tagItems}
                            rotation='bottom'
                            removable
                        />
                    </TitleFrame>
                    <TitleFrame title="Donanım Seçenekleri">
                         <TagHook
                            name="options"
                            control={control}
                            placeholder="Donanım Özellikleri Seçiniz"
                            size='medium'
                            items={tagItems}
                            rotation='bottom'
                            removable
                        />
                    </TitleFrame>
                </div>
            </React.Fragment>
    )
}


export default Rent;



