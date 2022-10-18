import { AccountLayout } from "@layouts/AccountLayouts";
import { IconFrameCovered } from "@components/frames/IconFrame";
import React  from "react";
import { GeoAlt } from "@shared/icons";
import { FormFooter } from "@shared/footers";
import Communication from "./communication";
import AddressCreate from "./create";
import { AddressList } from "./list";
 
export const Address = () => {
    const [address, setAddress] = React.useState({})
    console.log('addressaddressaddressaddress', address)
    return (
        <AccountLayout>
             <React.Fragment>
                <IconFrameCovered
                    icon={<GeoAlt className="menu-icon" />}
                    title='Adres Detay Bilgileri'
                >
                    <AddressCreate />
                </IconFrameCovered>
                <Communication />
                <FormFooter />
            </React.Fragment>
            <AddressList />
        </AccountLayout>
    )
}

export default Address;


