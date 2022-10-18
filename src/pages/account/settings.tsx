import Settings from "@components/account/settings";
import PrivateLayout from "@layouts/PrivateLayout";
import React from "react"

export const SettingsPage = () => {
  return(
      <Settings />
  )
}

SettingsPage.Layout = PrivateLayout;
export default SettingsPage;
