import { TitleFrame } from "@components/frames/TitleFrame";
import Classic, { defaultOverlays, defaultStyles } from "@shared/modals/classic";
import React, { useRef } from "react";
import { useModal } from "stores/features/useModal";
import cx from "classnames";
import { FormFooter } from "@shared/footers";

export const AddressBox = ({
    errors,
    dirtyFields,
    control,
    address,
    getValues,
    setValue, 
    type
}:any) => {
    const {open}:any = useModal(state=>state);

    const [addr, setAddr] = React.useState<any>({});
    React.useEffect(()=>{
           setAddr(getValues('shipping.'+type))
    },[addr])


    return(
       <React.Fragment>
        {/** Create new one  */}
   
        <div className={cx(
            'bg-white rounded-lg p-3 h-32 flex flex-col justify-between',
            {'border border-red-500': 
            dirtyFields.shipping && dirtyFields.shipping[type] 
            || errors.shipping && errors.shipping[type] 
        
        }
        )}>

         { !addr?.place?.title && <p className='text-gray-400'>Yükün Yükleneceği Konumu Seçiniz</p> }
          { addr?.place?.title && <h3 className='text-yg-blue text-2xlxl text-medium'>{addr?.place.title}</h3> }
            
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
                onClick={()=>{
                    open({type:'create-address', styles:{ height:'fit-content' }, values:{
                        border:true,
                        id:'cargo-modal',  update: !!addr, defaultAddress: addr, type ,
                        footer:<FormFooter />,
                        cb:true,
                        callback:(data:any) => {
                            const {geolocation, place, direction, contact } = data;

                            if(data){
                                setValue(`shipping.${type}`,  {geolocation, place, direction, contact } )
                                setAddr(data);
                            }
                        }
                    } })
                }}
                >{!addr ?'Yeni Adres Ekle':'Güncelle'}</div>
                <div className="bg-yg-blue p-2 px-4 ml-2 text-white rounded-md 
                cursor-pointer text-sm" 
                onClick={()=>{
                    open({type:'addresses', styles:{ height:'fit-content' }, values:{
                        border:true,
                        cb:true,
                        callback:(data:any)=>{
                            const {geolocation, place, direction, contact } = data;

                            setValue(`shipping.${type}`,  {geolocation, place, direction, contact })
                            setAddr(data);
                        }                        
                    } })
                    
                }}
                >Adres Seç</div>
            </div>

        </div>
       </React.Fragment>
    )
}

