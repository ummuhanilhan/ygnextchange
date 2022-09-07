import { TitleFrame } from "@components/frames/TitleFrame";
import React from "react";



export const Datetime = ({control}:any) => {

    return (
        <React.Fragment>

            <div className='grid grid-cols-2 gap-2'>
                <TitleFrame title="Yükleme Tarih Aralığı">
                </TitleFrame>
                <TitleFrame title="Boşaltma Zamanı">
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
        <div className='bg-white p-3'>

            <p className='text-gray'>Yükün Yükleneceği Konumu Seçiniz</p>


            <div className="w-full flex justify-end mt-3">
                <div className="bg-yukgetir-orange p-2 px-4 text-white rounded-md  
                cursor-pointer text-xs">Yeni Adres Ekle</div>
                <div className="bg-yukgetir-blue p-2 px-4 ml-2 text-white rounded-md 
                cursor-pointer text-xs" >Adres Seç</div>
            </div>

        </div>
    )
}