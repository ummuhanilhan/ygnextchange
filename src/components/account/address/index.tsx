import { AccountLayout } from "@layouts/AccountLayouts";
import { IconFrameCovered } from "@components/frames/IconFrame";
import React  from "react";
import { GeoAlt } from "@shared/icons";
import { FormFooter } from "@shared/footers";
import Communication from "./communication";
import AddressCreate from "./create";
import { AddressList } from "./list";
import { useForm, SubmitHandler } from "react-hook-form";
import { addressValues, AddressValues } from "./create";

export const Address = () => {
  const [address, setAddress] = React.useState({}) 
  
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
        <AccountLayout>
             <React.Fragment>
                <IconFrameCovered
                    icon={<GeoAlt className="menu-icon" />}
                    title='Adres Detay Bilgileri'
                >
                    <AddressCreate />
                </IconFrameCovered>

                <FormFooter />
            </React.Fragment>
            <AddressList />
        </AccountLayout>
    )
}

export default Address;


