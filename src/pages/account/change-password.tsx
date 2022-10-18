import ChangePassword from "@components/account/change-password";
import PrivateLayout from "@layouts/PrivateLayout";
import React from "react"

export const ChangePasswordPage = () => {
  return(
      <ChangePassword />
  )
}

ChangePasswordPage.Layout = PrivateLayout;
export default ChangePasswordPage;
