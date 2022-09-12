import { Frame } from "@components/frames/MainFrame";
import { ProfileTab } from "@components/tabs/ProfileTab"
import { useRouter } from "next/router"
import React, { useState } from "react"

export const AccountLayout = ({children, selected, setSelected}:any) => {
    const router = useRouter();
    const {pathname} = router;
    return (
        <Frame>
            <div id="account">
                <ProfileTab 
                    selected={selected} 
                    setSelected={setSelected} 
                    name={pathname}
                />
                {children}
            </div>
        </Frame>

    )
}