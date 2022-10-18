import Address from "@components/account/address";
import PrivateLayout from "@layouts/PrivateLayout";
import React from "react"

export const AddressPage = () => {
  return(
      <Address />
  )
}

AddressPage.Layout = PrivateLayout;
export default AddressPage;
