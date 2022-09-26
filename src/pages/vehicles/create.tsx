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
import { InputHook } from "@shared/elements/hooks/inputHook";
import { CalendarHook } from "@shared/elements/hooks/calendarHook";
import { TagHook } from "@shared/elements/hooks/tagHook";
import { FileUploadHook } from "@shared/elements/hooks/uploadHook";
import { FormFooter } from "@pages/account";
// import { FormFooter } from "@pages/account";
// import { CalendarHook, CheckboxHook, FileUploadHook, FloatLabelHook, FloatLabelPhoneHook, MultiSelectHook, VehicleRadioHook } from "@shared/elements/hooks";

export type SignupValues = {
    model: string,
    brand: string,
    type:string,
    plate:string,
    features:string[],
    options:string[],
    m_date: Date|string,
    model_year: Date|string,
    insurance_date: Date|string,
    examination_date: Date|string,
    casgo_date: Date|string,
    k1_file: string,
    accept:boolean
};

const initialValues = {
    accept:false,
    m_date: new Date("Sat Sep 03 2011 01:52:19 GMT+0300 (GMT+03:00)"),
    type: 'dorse',
    plate: '34 YKGTR 123',
    model_year: '20/09/2022',
    features:[],
    options:[],
    model:'10truck-open',
    brand:'dorse1',
    insurance_date: new Date(),
    examination_date: new Date(),
    casgo_date:new Date(),
    k1_file:'',
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
                        name='model_year' 
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
            <div className="grid grid-cols-2 gap-2 w-full">

                    <TitleFrame title="Araç Özellikleri">
                        <TagHook
                            name='feature'
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
                        />
                    </TitleFrame>   

                    <TitleFrame title="Araç Kasko Tarihi">
                
                     <CalendarHook 
                            name='casgo_date' 
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

