import { useForm, SubmitHandler } from "react-hook-form";
import React from "react";
import { FloatLabelHook } from "@shared/elements/hooks";
import Turkiye from '@utils/dummy/turkiye.json'
import { SelectHook } from "@shared/elements/hooks/selectHook";
import { useSelector } from "react-redux";
import { addAddress, selectAddress, updateAddress } from "stores/slices/addressSlice";
import { addresses, item } from "@utils/mock";
import { MapView } from "@shared/maps";
import Communication from "./communication";
import { useAppDispatch } from "stores/store";
import { generateRandomNDigits } from "@utils/helper";

export type AddressValues = {
    no:number | string,
    geolocation: {
      lat: string | number
      lng: string | number
    },
    place?: {
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
  footer, 
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
   * border
   */
  footer:any,
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
    const dispatch = useAppDispatch();
    const form = useForm<AddressValues>({
      defaultValues: defaultAddress,
        // resolver: yupResolver(),
    });
    const { register, control, handleSubmit, watch, setValue, formState: { errors } } = form;
    const onSubmit: SubmitHandler<AddressValues> = data => {
        console.log(data)
        if(typeof cb != undefined){
            cb && cb(data)
        }else{
            if(update)
              dispatch(updateAddress(data));  
            else 
              dispatch(addAddress(data));
        }
    };
    const onError = (errors:any) => {
        console.log(errors)
    };

    const getAddr:any = useSelector(selectAddress);
    const addr = getAddr.addr;

    return (
      <form onSubmit={handleSubmit(onSubmit, onError)}>           
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
                <div>
                     {/** <FloatLabelHook name="place.address" border={border} type="text" className='mb-2' placeholder="Ankara Şirket Adresim" example="" control={control} />  **/}
                      <FloatLabelHook name="title" border={border} type="text" className='mb-2' placeholder="Adres Başlığı" example="" control={control} />
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
                          name="directions"
                          type="text"
                          border={border}
                          className='mb-2'
                          placeholder="Adres Tarifi İçin 
                          Ek Detay Ekleyiniz (Opsiyonel)"
                          example=""
                          control={control}
                        />
                </div>
                  <MapView
                      id={id} 
                      border={border} 
                      setValue={setValue}
                  />
            </div>

            <Communication control={control} border />
            
            {footer}

      </form> 
    )
}

export default AddressCreate;