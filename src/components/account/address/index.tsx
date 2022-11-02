import { AccountLayout } from "@layouts/AccountLayouts";
import React  from "react";

import { AddressList } from "./list";

export const Address = () => {

    return (
        <AccountLayout> 
          
            <AddressList  />
            
        </AccountLayout>
    )
}

export default Address;


