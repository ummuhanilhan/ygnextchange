import Profile from "@components/account/profile";
import PrivateLayout from "@layouts/PrivateLayout";
import React from "react"

export const ProfilePage = () => {
  return(
      <Profile />
  )
}

ProfilePage.Layout = PrivateLayout;
export default ProfilePage;


