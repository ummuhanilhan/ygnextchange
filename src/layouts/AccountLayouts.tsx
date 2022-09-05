import { ProfileTab } from "@components/tabs/ProfileTab"
import { useRouter } from "next/router"
import React, { useState } from "react"

export enum AccountType {
    Profile = 1,
    ChangePassword = 2,
    AddressList = 3,
    Favorites = 4,
    Settings = 5,
}


export enum AccountRoute {
    'profile' = 1,
    'change-password' = 2,
    'address' = 3,
    'favorites' = 4,
    'settings' = 5,
}

export const AccountLayout = ({children, selected, setSelected}:any) => {
    const router = useRouter();
    const {pathname} = router;
    return (
        <div id="account">
            <ProfileTab 
                selected={selected} 
                setSelected={setSelected} 
                name={pathname}
            />
            {children}
        </div>
    )
}