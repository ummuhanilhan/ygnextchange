import { IconFrameCovered } from "@components/frames/IconFrame";
import React from "react";
import { Person } from "@shared/icons";
import { FloatLabelHook, FloatLabelPhoneHook, MultiSelectHook } from "@shared/elements/hooks";


export const Communication = ({control, border}:any) =>{
   
    return (
       <IconFrameCovered
                icon={<Person className="menu-icon" />}
                title='Adres İletişim Bilgileri'
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mb-2 change-password">
                  <FloatLabelHook name="name" border={border} type="text" 
                  placeholder="İsim Soyisim" example="" control={control} />
                  <FloatLabelPhoneHook name="phone" border={border} type="text" 
                  placeholder="Cep Telefonu" example="(212) 12 34" control={control} />
                  <FloatLabelHook name="email" border={border} type="text" 
                  placeholder="Eposta Adresi" example="" control={control} />
              </div>
          </IconFrameCovered>
    )
  }

  
  export default Communication;