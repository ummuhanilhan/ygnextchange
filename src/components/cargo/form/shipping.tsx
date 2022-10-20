import { TitleFrame } from "@components/frames/TitleFrame";
import { CalendarHook } from "@shared/elements/hooks/calendarHook";
import { SelectHook } from "@shared/elements/hooks/selectHook";
import Classic, { defaultOverlays, defaultStyles } from "@shared/modals/classic";
import { definitions } from "@utils/dummy/definitions";
import { tagItems } from "@utils/mock";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Turkiye from '@utils/dummy/turkiye.json'
import { FloatLabelHook } from "@shared/elements/hooks";
import { MapView } from "@shared/maps";
import classNames from "classnames"; 
import SimpleBar from "simplebar-react";
import AddressCreate from "@components/account/address/create";
import { FormFooter } from "@shared/footers";
import { AddressList } from "@components/account/address/list";

export const Shipping = ({control, setValue, getValues}:any) => {

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
                    />
                </TitleFrame>
                <TitleFrame title="Boşaltma Adresi">
                    <AddressBox 
                        type='unload' 
                        setValue={setValue} 
                        getValues={getValues}
                    />
                </TitleFrame>
            </div>
 
        </React.Fragment>
    )
}


export default Shipping;

export const AddressBox = ({control, address, getValues, setValue, type}:any) => {
    const [newStatus, setNew] = React.useState(false);
    const [listStatus, setList] = React.useState(false);

    const [addr, setAddr] = React.useState<any>({});
    React.useEffect(()=>{
           setAddr(getValues('shipping.'+type))
    },[addr])
    return(
       <React.Fragment>
        {/** Create new one  */}
         <Classic status={newStatus} close={setNew} 
            styles={defaultStyles}
            overlay={defaultOverlays}
         >
            <AddressCreate  
                type={type}
                cb={(data)=>{
                    setValue(`shipping.${type}`, data)
                    setAddr(data);
                    console.log('data:',data)
                }}
                id='cargo-modal' 
                defaultAddress={addr} 
                update={!!addr} 
                footer={<FormFooter />} 
                border 
            />
        </Classic>
        {/** List old records  */}
        <Classic 
            status={listStatus}
            close={setList} 
            styles={defaultStyles}
            overlay={defaultOverlays}

        >
            <AddressList
                border 
                select={(data:any)=>{
                    setValue(`shipping.${type}`, data)
                    setAddr(data);
                }} 
            />
        </Classic>
        <div className='bg-white rounded-lg p-3 h-32 flex flex-col justify-between'>

         { !addr?.title && <p className='text-gray-400'>Yükün Yükleneceği Konumu Seçiniz</p> }
          { addr?.title && <h3 className='text-yg-blue text-2xlxl text-medium'>{addr.title}</h3> }
            
           {addr && (
             <div>
                <p className='text-sm'>{addr.place?.address}</p>
                {addr?.contact && (
                <div className="flex items-start">
                    <p className='text-gray-400 text-sm'>Yetkili:</p>
                    <p className='text-sm'>{addr.contact?.name} 
                    {addr.contact?.code ? `- +90 ` + addr.contact.code : null }  
                    {` `}{addr.contact?.phone}</p>
                </div>
                )}
            </div>
           )}

            <div className="w-full flex justify-end my-2">
                <div className="bg-yg-orange p-2 px-4 text-white rounded-md  
                cursor-pointer text-sm"
                onClick={()=>setNew(true)}
                >{!addr ?'Yeni Adres Ekle':'Güncelle'}</div>
                <div className="bg-yg-blue p-2 px-4 ml-2 text-white rounded-md 
                cursor-pointer text-sm" 
                onClick={()=>setList(true)}
                >Adres Seç</div>
            </div>

        </div>
       </React.Fragment>
    )
}
