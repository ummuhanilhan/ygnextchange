import { TitleFrame } from "@components/frames/TitleFrame";
import { CalendarHook } from "@shared/elements/hooks/calendarHook";
import { SelectHook } from "@shared/elements/hooks/selectHook";
import Classic from "@shared/modals/classic";
import { definitions } from "@utils/dummy/definitions";
import { tagItems } from "@utils/mock";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Turkiye from '@utils/dummy/turkiye.json'
import { FloatLabelHook } from "@shared/elements/hooks";
import { MapView } from "@pages/account/address";



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
            <CreateAddressModal />
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

export const CreateAddressModal = ({className}:any) => {
    const form = useForm<any>({
        defaultValues: {
            
        },
        // resolver: yupResolver(),
    });
    const { register, control, handleSubmit, watch, setValue, formState: { errors } } = form;
    const onSubmit: SubmitHandler<any> = data => {
        console.log(data)
        alert(JSON.stringify(data))
    };
    const onError = (errors:any) => {
        console.log(errors)

    };
    return(
        <React.Fragment>
               <form onSubmit={handleSubmit(onSubmit, onError)} className={className}>
                    <div className="grid grid-cols-2 gap-2">
                        <FloatLabelHook border name="place.address" type="text" className='mb-2' placeholder="Ankara Şirket Adresim" example="" control={control} />
                        <FloatLabelHook border name="address_search" type="text" className='mb-2' placeholder="Mersin Lİmanı" example="" control={control} />
                    </div>
                    <div className='grid grid-cols-2 gap-2'>
                        <div>
                              <FloatLabelHook border name="address_detail" type="text" 
                              placeholder="Haritadan Seçili Adres Detayları" className='mb-2' disabled example="" control={control} />
                              <div className='grid grid-cols-2 gap-2'>
                                  <SelectHook
                                        name='direction.city'
                                        placeholder='İl Seçiniz'
                                        size='medium'
                                        id='value'
                                        removable
                                        searchable
                                        border
                                        items={Turkiye}
                                        control={control}
                                        className='mb-2'
                                        />
                                    <SelectHook
                                        name='direction.district'
                                        placeholder='İl Seçiniz'
                                        size='medium'
                                        id='value'
                                        removable
                                        searchable
                                        border
                                        items={Turkiye}
                                        control={control}
                                        className='mb-2'
                                    />
                              </div>
                             <FloatLabelHook border name="directions" type="text" className='mb-2' placeholder="Adres Tarifi İçin Ek Detay Ekleyiniz (Opsiyonel)" example="" control={control} />
                        </div>
                        <MapView control={control} border />
                        <div></div>
                    </div>
                </form>
        </React.Fragment>
    )
}