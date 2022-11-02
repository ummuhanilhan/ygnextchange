import { AccountLayout } from "@layouts/AccountLayouts";
import { IconFrameCovered } from "@components/frames/IconFrame";
import React  from "react";
import { GeoAlt } from "@shared/icons";
import { FormFooter } from "@shared/footers";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch } from "stores/store";
import { addAddress } from "stores/slices/addressSlice";
import AddressCreate from "@components/account/address/create";
import PrivateLayout from "@layouts/PrivateLayout";

const AddressCreatePage = () => {

    return(
        <AccountLayout> 
          <IconFrameCovered
                icon={<GeoAlt className="menu-icon" />}
                title='Adres Detay Bilgileri'
            >
                <AddressCreate footer={<FormFooter close={()=>{
                    // redirect
                }} />} />
            </IconFrameCovered>
        </AccountLayout>
    )
}

AddressCreatePage.Layout = PrivateLayout;
export default AddressCreatePage;
