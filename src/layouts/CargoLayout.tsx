import { Frame } from "@components/frames/MainFrame";
import { CargoTab } from "@components/tabs/CargoTab"
import { useRouter } from "next/router"
import React, { useState } from "react"

export enum CargoType {
    Rent = 1,
    Datetime = 2,
    Payload = 3,
}

export enum CargoRoute {
    'rent' = 1,
    'datetime' = 2,
    'payload' = 3,
}

export const CargoLayout = ({children, selected, setSelected}:any) => {
    const router = useRouter();
    const {pathname} = router;
    return (
        <Frame>
            <div id="cargo">
                <CargoTab 
                    selected={selected} 
                    setSelected={setSelected} 
                    name={pathname}
                />
                {children}
            </div>
        </Frame>

    )
}