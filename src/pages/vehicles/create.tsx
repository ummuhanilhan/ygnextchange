import PrivateLayout from "@layouts/PrivateLayout";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { profileSchema } from "@utils/validations/account";
import React from "react";
import { Frame } from "@components/frames/MainFrame";
import { TitleFrame, TitleFrameCovered } from "@components/frames/TitleFrame";
import { tagItems } from "@utils/mock";
import { SelectHook } from "@shared/elements/hooks/selectHook";
import classNames from "classnames";
import { VehicleRadioHook } from "@shared/elements/hooks/checkboxHook";
// import { FormFooter } from "@pages/account";
// import { CalendarHook, CheckboxHook, FileUploadHook, FloatLabelHook, FloatLabelPhoneHook, MultiSelectHook, VehicleRadioHook } from "@shared/elements/hooks";

export type SignupValues = {
    brand: object[],
    m_date: Date,
};

const initialValues = {
    brand:[],
    accept:false,
    m_date: new Date("Sat Sep 03 2011 01:52:19 GMT+0300 (GMT+03:00)")
}

export enum VehicleType {
    SemiTruck = 'semitruck',
    Truck = 'truck',
    Trailer = 'trailer',
    Wheeler18 = '18wheeler',
    Refrigerated = 'refrigerated',
    Forklift = 'forklift',
    TractorTrailer = 'tractortrailer',
  }

export const VehicleCreate = () => {
    const form = useForm<SignupValues>({
        defaultValues: initialValues,
        resolver: yupResolver(profileSchema),
    });
    const { register, control, handleSubmit, watch, setValue, formState: { errors } } = form;
    const onSubmit: SubmitHandler<SignupValues> = data => {
        console.log(data)
        alert(JSON.stringify(data))
    };
    const onError = (errors:any) => {
        console.log(errors)

    };

     return (
      <Frame>
        <form onSubmit={handleSubmit(onSubmit, onError)} id="vehicles">
            <div className="grid grid-cols-2 gap-2 w-full">
                <TitleFrame title="Araç Markası">
                    
                    <SelectHook 
                        name="brand" 
                        control={control} 
                        placeholder="Araç Özellikleri Seçiniz" 
                        size='medium'
                        id='id'
                        items={tagItems}
                    />             

                </TitleFrame>
                <TitleFrame title="Araç Modeli">
                    <SelectHook 
                        name="model" 
                        control={control} 
                        placeholder="Araç Modeli Seçiniz" 
                        size='medium'
                        id='id'
                        items={tagItems}
                    />        
                </TitleFrame>
                <TitleFrame title="Araç Model Yılını">
                
                {/** <MultiSelectHook name="model_year" control={control} placeholder="Araç Model Yılını Seçiniz"  />                  */}
                </TitleFrame>    
                <TitleFrameCovered title="Araç Plakası" name="plate" placeholder="Araç Plakasını Yazınız"  control={control} /> 
            </div>

            <div className="grid grid-cols-1 w-full">
                    <TitleFrame title="Araç Tipi">
                        <VehicleRadioHook name="type" control={control} /> 
                    </TitleFrame>
            </div>
            <div className="grid grid-cols-2 gap-2 w-full">

                    <TitleFrame title="Araç Özellikleri">
                    {/**   <MultiSelectHook name="b" control={control} placeholder="Araç Özellikleri Seçiniz" />                   */}
                    </TitleFrame>
                    <TitleFrame title="Araç Donanımı">
                    {/** <MultiSelectHook name="b1" control={control} placeholder="Araç Donanımı Seçiniz"  />                   */}
                    </TitleFrame>

                    <TitleFrameCovered title="Araç Sigorta Tarihi" name="a2" placeholder="Araç Sigorta Tarihi Seçiniz"  control={control} /> 

                    <TitleFrame title="Araç Muayene Tarihi">
                    {/**
                       <CalendarHook name="m_date" control={control} placeholder="Araç Muayene Tarihi Seçiniz"  />                 
                    */}
                    </TitleFrame>   

                    <TitleFrame title="Araç Kasko Tarihi">
                    {/**
                      <CalendarHook name="k_date" control={control} placeholder="Araç Kasko Tarihi Seçiniz"  />                 
                    */}
                    </TitleFrame>   

                    <TitleFrame title="K1 Yetki Belgesi">
                    {/** <FileUploadHook name="k_date" control={control} placeholder="K1 Yetki Belgesi Ekle (Opsiyonel)"  />                  */}
                    </TitleFrame>   

            </div>
                {/** <FormFooter control={control} label="Araç Bilgilerim'in doğru olduğunu onaylıyorum ve teklif verdiğim ilan sahipleriyle paylaşılmasına izin veriyorum." />                 */}

        </form>
      </Frame>
    )
}

VehicleCreate.Layout = PrivateLayout;

export default VehicleCreate;

