import { ProfileTab } from "@components/tabs/ProfileTab"
import React from "react"


export const AccountLayout = ({children}:any) => {

    return (
        <div id="account">
            <ProfileTab />
            {children}
        </div>
    )
}