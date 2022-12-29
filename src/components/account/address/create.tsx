import { useForm, SubmitHandler } from "react-hook-form";
import React from "react";
import { FloatLabelHook } from "@shared/elements/hooks";
import Turkiye from '@utils/dummy/turkiye.json'
import { SelectHook } from "@shared/elements/hooks/selectHook";
import { useSelector } from "react-redux";
import { addAddress, create, update as up, selectAddress } from "stores/slices/addressSlice";
import { addresses, item } from "@utils/mock";
import { MapView } from "@shared/maps";
import Communication from "./communication";
import { useAppDispatch } from "stores/store";
import { generateRandomNDigits } from "@utils/helper";
import { FormFooter } from "@shared/footers";
import { useModal } from "stores/features/useModal";

export type AddressValues = {
    _id?:number | string,
    no:number | string,
    geolocation: {
      lat: string | number
      lng: string | number
    },
    place?: {
      title?: string
      description?: string
      address: string
      street: string
    },
    direction?: {
      city: string  
      district: string
      country: {
        code:string
        name:string
      }
    },
    contact?: {
      phone:string
      name: string
    }
}

export const addressValues =  addresses[0]

export const AddressCreate = ({
  border=false, 
  defaultAddress, 
  update,
  id, 
  type,
  cb, 
}:{
  /** 
   * border
   */
  border?:boolean,
  /** 
   * onloading data
  */
  defaultAddress?: object,
  /** 
   * If updatable it will call defaults
  */
  update?:boolean,
  /** 
   * top form extension for seperating by modal
  */
  type?:string,
  /** 
   * input id for same form in different fields
  */
  id?:string,
  /** 
   * set data to another form with callback
   */
   cb?:(data:any)=>void,
}) => {
  console.log('default', defaultAddress)

    const close = useModal((state:any)=>state.close); 
    const dispatch = useAppDispatch();
    const form = useForm<AddressValues>({
      defaultValues: defaultAddress,
        // resolver: yupResolver(),
    });
    const { register, control, handleSubmit, watch, setValue, formState: { errors } } = form;
    const onSubmit: SubmitHandler<AddressValues> = data => {
       if(cb){
        cb(data)
       }else{
          if (update)
              dispatch(up({id:data._id, values:data})) // dispatch(updateAddress(data));
          else 
              dispatch(create(data)) // dispatch(addAddress(data));
       }
        close()
    };
    const onError = (errors:any) => {
        console.log('err:',errors)
    };
    
    const getAddr:any = useSelector(selectAddress);
    const addr = getAddr.addr;

    return (
      <form onSubmit={handleSubmit(onSubmit, onError)}>           
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 -h-[350px]'>
                <div className='h-full'>
                     {/** <FloatLabelHook name="place.address" border={border} type="text" className='mb-2' placeholder="Ankara Şirket Adresim" example="" control={control} />  **/}
                      <FloatLabelHook name="place.title" border={border} type="text" className='mb-2' placeholder="Adres Başlığı" example="" control={control} />
                      <FloatLabelHook name="place.address" border={border} type="text" disabled
                      placeholder="Haritadan Seçili Adres Detayları" className='mb-2' example="" control={control} />
                      <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
                         <SelectHook
                              name='direction.city'
                              placeholder='İl'
                              size='medium'
                              id='value'
                              removable
                              searchable
                              items={Turkiye}
                              control={control}
                              className='mb-2'
                              border={border}
                              disabled
                          />
                          <FloatLabelHook
                            name="direction.district"
                            type="text"
                            border={border}
                            className='mb-2'
                            placeholder="İlçe"
                            control={control}
                            disabled
                          />
                      </div>
                      <FloatLabelHook
                          name="place.description"
                          type="text"
                          border={border}
                          className=''
                          placeholder="Adres Tarifi İçin 
                          Ek Detay Ekleyiniz (Opsiyonel)"
                          example=""
                          control={control}
                        />
                </div>
              <div className='grid grid-cols-1 bg-gray-'>
                <MapView
                      id={id} 
                      border={border} 
                      setValue={setValue}
                  />
              </div>
            </div>
            <Communication control={control} border />
            <FormFooter close={close} className='mb-4' />
      </form> 
    )
}

export default AddressCreate;