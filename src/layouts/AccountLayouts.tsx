import { ProfileTab } from "@components/tabs/ProfileTab"
import React, { useState } from "react"

export enum AccountType {
    Profile = 1,
    ChangePassword = 2,
    AddressList = 3,
    Favorites = 4,
    Settings = 5,
}

export const AccountLayout = ({children, selected, setSelected}:any) => {

    return (
        <div id="account">
            <ProfileTab 
                selected={selected} 
                setSelected={setSelected} 
            />
            {children}
        </div>
    )
}