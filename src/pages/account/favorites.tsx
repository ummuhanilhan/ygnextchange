import Favorites from "@components/account/favorites";
import PrivateLayout from "@layouts/PrivateLayout";
import React from "react"

export const FavoritesPage = () => {
  return(
      <Favorites />
  )
}

FavoritesPage.Layout = PrivateLayout;
export default FavoritesPage;
