import PrivateLayout from "@layouts/PrivateLayout"
import React from "react"
import Codebase from "./codebase"

const Home = () => {

  return (
    <React.Fragment>
      <Codebase />
    </React.Fragment>
  )
}

Home.Layout = PrivateLayout

export default Home

 