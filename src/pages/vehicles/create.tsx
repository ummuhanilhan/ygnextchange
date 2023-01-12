import PrivateLayout from "@layouts/PrivateLayout";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { profileSchema } from "@utils/validations/account";
import React, { useEffect, useState } from "react";
import { Frame } from "@components/frames/MainFrame";
import { TitleFrame, TitleFrameCovered } from "@components/frames/TitleFrame";
import { tagItems } from "@utils/mock";
import { SelectHook } from "@shared/elements/hooks/selectHook";
import classNames from "classnames";
import { VehicleRadioHook } from "@shared/elements/hooks/checkboxHook";
import { InputHook } from "@shared/elements/hooks/inputHook";
import { CalendarHook } from "@shared/elements/hooks/calendarHook";
import { TagHook } from "@shared/elements/hooks/tagHook";
import { FileUploadHook } from "@shared/elements/hooks/uploadHook";
import { FormFooter } from "@shared/footers";
import { vehicleSchema } from "@utils/validations/vehicle";
import { joiResolver } from "@hookform/resolvers/joi";
import { useAppDispatch } from "stores/store";
import { create, selectVehicle } from "stores/slices/vehicleSlice";
import { notify } from "@utils/helper";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { LoadingState } from "stores/types";
// import { FormFooter } from "@pages/account";
// import { CalendarHook, CheckboxHook, FileUploadHook, FloatLabelHook, FloatLabelPhoneHook, MultiSelectHook, VehicleRadioHook } from "@shared/elements/hooks";

export type VehicleValues = {
    model: string,
    brand: string,
    type:string,
    plate:string,
    features:string[],
    options:string[],
    year: Date|string,
    model_year: Date|string,
    insurance_date: Date|string,
    examination_date: Date|string,
    casco_date: Date|string,
    k1_file: string,
    accept:boolean
};

const initialValues = {
    accept:false,
    year: new Date("Sat Sep 03 2011 01:52:19 GMT+0300 (GMT+03:00)"),
    type: 'trailer',
    plate: '34 YKGTR 123',
    model_year: new Date(),
    features:[ '1','10truck-open', '10truck-close', 'truck1', 'dorse1' ],
    options:[ '1', '2', '3', '10truck-open' ],
    model:'10truck-open',
    brand:'dorse1',
    insurance_date: new Date(),
    examination_date: new Date(),
    casco_date:new Date(),
    k1_file:'k1_file.pdf',
}

export enum VehicleType {
    SemiTruck = 'semitruck',
    Truck = 'truck',
    Trailer = 'trailer',
    Wheeler18 = '18wheeler',
    Refrigerated = 'refrigerated',
    TractorTrailer = 'tractortrailer',
    Forklift = 'forklift',
  }

export const VehicleCreate = () => {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const {isLoading, isLoaded, error, message } = useSelector(selectVehicle);
    const form = useForm<VehicleValues>({
        resolver: joiResolver(vehicleSchema),
        //defaultValues: initialValues,
    });
    const { register, control, handleSubmit, watch, setValue, formState: { errors } } = form;
   
    const onSubmit: SubmitHandler<VehicleValues> = data => {
        //@ts-ignore
        delete data.accept
        console.log(data)
        dispatch(create(data));
    };

    useEffect(()=>{
        if(isLoaded) {
            notify('Created Successfully', {type:'success', position:'bottom-center' })
            router.push('/')
        }
    },[isLoading])
    
    useEffect(()=>{
        if(error && message) notify(message || 'Boş alanları doldurunuz!', { position:'bottom-center' })
    },[error])

    const onError = (errors:any) => {
        console.log('err',errors)
    };

     return (
      <Frame>
        <form onSubmit={handleSubmit(onSubmit, onError)} id="vehicles">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 w-full">
                <TitleFrame title="Araç Markası">
                    
                    <SelectHook 
                        name="brand" 
                        control={control} 
                        placeholder="Araç Özellikleri Seçiniz" 
                        size='medium'
                        id='slug'
                        items={tagItems}
                    />             

                </TitleFrame>
                <TitleFrame title="Araç Modeli">
                    <SelectHook 
                        name="model" 
                        control={control} 
                        placeholder="Araç Modeli Seçiniz" 
                        size='medium'
                        items={tagItems}
                        
                    />        
                </TitleFrame>
                <TitleFrame title="Araç Model Yılını">
                    <CalendarHook 
                        name='year' 
                        type="text" 
                        maxDate={new Date()} 
                        placeholder='Araç Model Yılını Seçiniz' 
                        control={control}
                        className=' bg-white'
                        size='medium'
                    />
                </TitleFrame>    
                <TitleFrameCovered title="Araç Plakası" name="plate" placeholder="Araç Plakasını Yazınız"  control={control} /> 
            </div>

            <div className="grid grid-cols-1 w-full">
                    <TitleFrame title="Araç Tipi">
                        <VehicleRadioHook name="type" control={control} /> 
                    </TitleFrame>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 w-full">

                    <TitleFrame title="Araç Özellikleri">
                        <TagHook
                            name='features'
                            placeholder='Araç Özellikleri Seçiniz'
                            size='medium'
                            items={tagItems}
                            removable
                            control={control}
                        />
                    </TitleFrame>
                    <TitleFrame title="Araç Donanımı">
                       <TagHook
                            name='options'
                            placeholder='Araç Donanımı Seçiniz'
                            size='medium'
                            items={tagItems}
                            removable
                            control={control}
                        />
                    </TitleFrame>

                    <TitleFrame title="Araç Sigorta Tarihi">

                        <CalendarHook 
                            name='insurance_date' 
                            type="text" 
                            placeholder='Araç Sigorta Tarihi Seçiniz' 
                            control={control}
                            className=' bg-white'
                            size='medium'
                        />
                    </TitleFrame>   


                    <TitleFrame title="Araç Muayene Tarihi">
                    
                        <CalendarHook 
                            name='examination_date' 
                            type="text" 
                            placeholder='Araç Muayene Tarihi' 
                            control={control}
                            className=' bg-white'
                            size='medium'
                            selectionMode='range'
                        />
                    </TitleFrame>   

                    <TitleFrame title="Araç Kasko Tarihi">
                
                     <CalendarHook 
                            name='casco_date' 
                            type="text" 
                            placeholder='Araç Kasko Tarihi' 
                            control={control}
                            className=' bg-white'
                            size='medium'

                        />
                    </TitleFrame>   

                    <TitleFrame title="K1 Yetki Belgesi">
                        <FileUploadHook 
                            name="k1_file" 
                            height='h-full'
                            placeholder="K1 Yetki Belgesi Ekle (Opsiyonel)"  
                            control={control}
                        />                 
                    </TitleFrame>   

            </div>
            <FormFooter 
                loading={isLoading}   
                control={control}
                label='Araç Bilgilerimin doğru olduğunu onaylıyorum ve teklif verdiğim ilan sahipleriyle paylaşılmasına izin veriyorum.'
                check={true}
            />
        </form>
      </Frame>
    )
}

VehicleCreate.Layout = PrivateLayout;

export default VehicleCreate;

