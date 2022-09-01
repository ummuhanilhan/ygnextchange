import { ProfileTab } from "@components/tabs/ProfileTab"
import React from "react"


export const AccountLayout = ({children}:any) => {

    return (
        <React.Fragment>
            <ProfileTab />
            {children}
        </React.Fragment>
    )
}