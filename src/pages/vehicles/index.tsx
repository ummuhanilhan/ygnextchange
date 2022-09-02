import PrivateLayout from "@layouts/PrivateLayout";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { profileSchema } from "@utils/validations/account";
import classNames from "classnames";
import { CheckboxHook, FloatLabelHook, FloatLabelPhoneHook } from "@shared/elements/hooks";
import React from "react";
import { TitleFrame, TitleFrameCovered } from "@components/frames/TitleFrame";

export type SignupValues = {
    brand: string,
};

const initialValues = {
    brand:'tester',
    accept:false,
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
           <TitleFrame title="Araç Markası">
           
            <FloatLabelHook name="test" type="text" placeholder="Araç Markası Seçiniz" example="" control={control} />
           </TitleFrame>
          </div>

            
       </div>
    )
}

Vehicles.Layout = PrivateLayout;

export default Vehicles;