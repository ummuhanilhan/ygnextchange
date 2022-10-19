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
import { useAppDispatch } from "stores/store";
import { addAddress } from "stores/slices/addressSlice";

export const Address = () => {

    return (
        <AccountLayout> 
            <IconFrameCovered
                icon={<GeoAlt className="menu-icon" />}
                title='Adres Detay Bilgileri'
            >
                <AddressCreate footer={<FormFooter />} />
            </IconFrameCovered>

            <AddressList  />
            
        </AccountLayout>
    )
}

export default Address;


