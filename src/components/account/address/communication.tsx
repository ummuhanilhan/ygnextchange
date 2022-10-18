import { useForm, SubmitHandler } from "react-hook-form";
import { IconFrameCovered } from "@components/frames/IconFrame";
import React from "react";
import { Person } from "@shared/icons";
import { FloatLabelHook, FloatLabelPhoneHook, MultiSelectHook } from "@shared/elements/hooks";
import { addressValues, AddressValues } from "./create";


export const Communication = () =>{
    const form = useForm<AddressValues>({
        defaultValues: addressValues,
        // resolver: yupResolver(),
    });
    const { register, control, handleSubmit, watch, setValue, formState: { errors } } = form;
    const onSubmit: SubmitHandler<AddressValues> = data => {
        console.log(data)
        alert(JSON.stringify(data))
    };
    const onError = (errors:any) => {
        console.log(errors)
  
    };
    return (
       <IconFrameCovered
                icon={<Person className="menu-icon" />}
                title='Adres İletişim Bilgileri'
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mb-2 change-password">
                  <FloatLabelHook name="name" type="text" 
                  placeholder="İsim Soyisim" example="" control={control} />
                  <FloatLabelPhoneHook name="phone" type="text" 
                  placeholder="Cep Telefonu" example="(212) 12 34" control={control} />
                  <FloatLabelHook name="email" type="text" 
                  placeholder="Eposta Adresi" example="" control={control} />
              </div>
          </IconFrameCovered>
    )
  }

  
  export default Communication;