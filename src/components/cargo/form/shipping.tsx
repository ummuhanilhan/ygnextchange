import React from "react";
import { TitleFrame } from "@components/frames/TitleFrame";
import { CalendarHook } from "@shared/elements/hooks/calendarHook";
import { SelectHook } from "@shared/elements/hooks/selectHook";
import { definitions } from "@utils/dummy/definitions";
import { AddressBox } from "./addressbox";

export const Shipping = ({
    control, 
    errors, 
    dirtyFields, 
    setValue, 
    getValues
}:any) => {

    return (
        <React.Fragment>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
                <TitleFrame title="Yükleme Tarih Aralığı">
                    <CalendarHook 
                        name="shipping.range" 
                        control={control} 
                        placeholder="Tarih Aralığı Seçiniz" 
                        selectionMode='range'
                    />             
                </TitleFrame>
                <TitleFrame title="Boşaltma Zamanı">
                    <SelectHook 
                        name="shipping.time" 
                        control={control} 
                        placeholder="Gün Aralığı Seçiniz" 
                        size='medium'
                        id='_id'
                        label='name'
                        items={definitions.unload}
                    />        
                </TitleFrame>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
                <TitleFrame title="Yükleme Adresi">
                    <AddressBox  
                        type='load' 
                        setValue={setValue} 
                        getValues={getValues}
                        dirtyFields={dirtyFields}
                        errors={errors}
                    />
                </TitleFrame>
                <TitleFrame title="Boşaltma Adresi">
                    <AddressBox 
                        type='unload' 
                        setValue={setValue} 
                        getValues={getValues}
                        dirtyFields={dirtyFields}
                        errors={errors}

                    />
                </TitleFrame>
            </div>
 
        </React.Fragment>
    )
}


export default Shipping;
