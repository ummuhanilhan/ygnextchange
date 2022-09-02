import PrivateLayout from "@layouts/PrivateLayout";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { profileSchema } from "@utils/validations/account";
import classNames from "classnames";
import { CheckboxHook, FloatLabelHook, FloatLabelPhoneHook, VehicleRadioHook } from "@shared/elements/hooks";
import React from "react";
import { TitleFrame, TitleFrameCovered } from "@components/frames/TitleFrame";

export type SignupValues = {
    brand: string,
};

const initialValues = {
    brand:'tester',
    accept:false,
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

export const Vehicles = () => {
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
       <div id="vehicles">
          <div className="grid grid-cols-2 gap-2 w-full">
            <TitleFrame title="Araç Markası"><FloatLabelHook name="brand" type="text" placeholder="Araç Markası Seçiniz" example="" control={control} /></TitleFrame>
            <TitleFrameCovered title="Araç Modeli" name="model" placeholder="Araç Modeli Seçiniz"  control={control} /> 
            <TitleFrame title="Araç Model Yılı"><FloatLabelHook name="model_year" type="text" placeholder="Araç Model Yılını Seçiniz" example="" control={control} /></TitleFrame>
            <TitleFrameCovered title="Araç Plakası" name="plate" placeholder="Araç Plakasını Yazınız"  control={control} /> 
          </div>
          <div className="grid grid-cols-1 gap-2 w-full">
           <TitleFrame title="Araç Tipi">
                <VehicleRadioHook name="type" control={control} />
           </TitleFrame>
          </div>
          <div className="grid grid-cols-2 gap-2 w-full">
            <TitleFrameCovered title="Araç Özellikleri" name="a" placeholder="Araç Özellikleri Seçiniz"  control={control} /> 
            <TitleFrameCovered title="Araç Donanımı" name="a1" placeholder="Araç Donanımı Seçiniz"  control={control} /> 
            <TitleFrameCovered title="Araç Sigorta Tarihi" name="a2" placeholder="Araç Sigorta Tarihi Seçiniz"  control={control} /> 
            <TitleFrameCovered title="Araç Muayene Tarihi" name="a3" placeholder="Araç Muayene Tarihi Seçiniz"  control={control} /> 
            <TitleFrameCovered title="Araç Kasko Tarihi" name="a4" placeholder="Araç Kasko Tarihi Seçiniz"  control={control} /> 
            <TitleFrameCovered title="K1 Yetki Belgesi" name="a5" placeholder="K1 Yetki Belgesi Ekle (Opsiyonel)"  control={control} /> 
          </div>
            
       </div>
    )
}

Vehicles.Layout = PrivateLayout;

export default Vehicles;

