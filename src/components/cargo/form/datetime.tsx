import { TitleFrame } from "@components/frames/TitleFrame";
import {  MultiSelectHook } from "@shared/elements/hooks";
import { CalendarHook } from "@shared/elements/hooks/calendarHook";
import { SelectHook } from "@shared/elements/hooks/selectHook";
import Classic from "@shared/modals/classic";
import { definitions } from "@utils/dummy/definitions";
import { tagItems } from "@utils/mock";
import React from "react";



export const Datetime = ({control}:any) => {

    return (
        <React.Fragment>

            <div className='grid grid-cols-2 gap-2'>
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
                        className=' '
                        size='medium'
                        id='_id'
                        label='name'
                        items={definitions.unload}
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
    const [newStatus, setNew] = React.useState(false);
    const [listStatus, setList] = React.useState(false);

    return(
       <React.Fragment>
        {/** Create new one  */}
         <Classic status={newStatus} close={setNew} >

        </Classic>
        {/** List old records  */}
        <Classic status={listStatus} close={setList} >
            <h1 className='text-3xl'>Records</h1>
        </Classic>
        <div className='bg-white p-3 h-32 flex flex-col justify-between'>

            <p className='text-gray-400'>Yükün Yükleneceği Konumu Seçiniz</p>


            <div className="w-full flex justify-end mt">
                <div className="bg-yg-orange p-2 px-4 text-white rounded-md  
                cursor-pointer text-sm"
                onClick={()=>setNew(true)}
                >Yeni Adres Ekle</div>
                <div className="bg-yg-blue p-2 px-4 ml-2 text-white rounded-md 
                cursor-pointer text-sm" 
                onClick={()=>setList(true)}
                >Adres Seç</div>
            </div>

        </div>
       </React.Fragment>
    )
}