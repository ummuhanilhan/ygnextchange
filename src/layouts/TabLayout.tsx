import { Frame } from "@components/frames/MainFrame";
import Tabs from "@components/tabs/index"
import { useRouter } from "next/router"
import React, { useState } from "react"

export enum TabRoute {
    'rent' = 1,
}

export const TabLayout = ({name, children, selected, setSelected}:any) => {
    const router = useRouter();
    const {pathname} = router;
    return (
        <Frame>
            <div id={name}>
                <Tabs 
                    selected={selected} 
                    setSelected={setSelected} 
                    name={pathname}
                />
                {children}
            </div>
        </Frame>

    )
}