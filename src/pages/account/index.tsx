import Account from "@components/account";
import PrivateLayout from "@layouts/PrivateLayout";
import React from "react"

export const AccountPage = () => {
  return(
      <Account />
  )
}

AccountPage.Layout = PrivateLayout;
export default AccountPage;
