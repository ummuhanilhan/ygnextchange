import { TitleFrame } from "@components/frames/TitleFrame";
import { MultiSelectHook, RentRadioHook, VehicleRadioHook } from "@shared/elements/hooks";
import { TagHook } from "@shared/elements/hooks/tagHook";
import { definitions } from "@utils/dummy/definitions";
import { tagItems } from "@utils/mock";
import classNames from "classnames";
import React from "react";
 
export const Rent = ({control}:any) => {
 
    return (
            <React.Fragment>

                <TitleFrame title="Araç Markası">
                    <RentRadioHook
                        name='rent.type'
                        control={control}
                    />
                </TitleFrame>
                        
                <div className="grid grid-cols-1 w-full">
                    <TitleFrame title="Araç Tipi">
                        <VehicleRadioHook name="rent.vehicle" control={control} />
                    </TitleFrame>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 w-full'>
                    <TitleFrame title="Araç Özellikleri">
                        <TagHook
                            name="rent.features"
                            control={control}
                            placeholder="Araç Özellikleri Seçiniz"
                            size='medium'
                            items={definitions.feature}
                            rotation='bottom-16'
                            removable
                            id="_id"
                            label="name"
                        />
                    </TitleFrame>
                    <TitleFrame title="Donanım Seçenekleri">
                         <TagHook
                            name="rent.options"
                            control={control}
                            placeholder="Donanım Özellikleri Seçiniz"
                            size='medium'
                            id="_id"
                            label="name"
                            items={definitions.option}
                            rotation='bottom-16'
                            removable
                        />
                    </TitleFrame>
                </div>
            </React.Fragment>
    )
}


export default Rent;