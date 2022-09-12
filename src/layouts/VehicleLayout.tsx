import { Frame } from "@components/frames/MainFrame";
import { VehicleTab } from "@components/tabs/VehicleTab"
import { useRouter } from "next/router"
import React, { useState } from "react"

export enum VehicleRoute {
    'rent' = 1,
    'datetime' = 2,
    'payload' = 3,
}

export const VehicleLayout = ({children, selected, setSelected}:any) => {
    const router = useRouter();
    const {pathname} = router;
    return (
        <Frame>
            <div id="vehicle">
                <VehicleTab 
                    selected={selected} 
                    setSelected={setSelected} 
                    name={pathname}
                />
                {children}
            </div>
        </Frame>

    )
}