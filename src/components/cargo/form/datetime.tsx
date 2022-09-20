import { TitleFrame } from "@components/frames/TitleFrame";
import { MultiSelectHook } from "@shared/elements/hooks";
import { SelectHook } from "@shared/elements/hooks/selectHook";
import { tagItems } from "@utils/mock";
import React from "react";



export const Datetime = ({control}:any) => {

    return (
        <React.Fragment>

            <div className='grid grid-cols-2 gap-2'>
                <TitleFrame title="Yükleme Tarih Aralığı">
                <SelectHook 
                        name="range" 
                        control={control} 
                        placeholder="Tarih Aralığı Seçiniz" 
                        className=' '
                        size='medium'
                        id='id'
                        items={tagItems}
                    />             
                </TitleFrame>
                <TitleFrame title="Boşaltma Zamanı">
                    <SelectHook 
                        name="range" 
                        control={control} 
                        placeholder="Gün Aralığı Seçiniz" 
                        className=' '
                        size='medium'
                        id='id'
                        items={tagItems}
                    />        
                </TitleFrame>
            </div>

            <div className='grid grid-cols-2 gap-2'>
                <TitleFrame title="Yükleme Adresi">
                    <AddressBox />
                </TitleFrame>
                <TitleFrame title="Boşaltma Adresi">
                    <AddressBox />
                </TitleFrame>
            </div>
 
        </React.Fragment>
    )
}


export default Datetime;

export const AddressBox = () => {

    return(
        <div className='bg-white p-3 h-32 flex flex-col justify-between'>

            <p className='text-gray-400'>Yükün Yükleneceği Konumu Seçiniz</p>


            <div className="w-full flex justify-end mt">
                <div className="bg-yg-orange p-2 px-4 text-white rounded-md  
                cursor-pointer text-sm">Yeni Adres Ekle</div>
                <div className="bg-yg-blue p-2 px-4 ml-2 text-white rounded-md 
                cursor-pointer text-sm" >Adres Seç</div>
            </div>

        </div>
    )
}