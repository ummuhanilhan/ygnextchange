import { Frame } from "@components/frames/MainFrame";
import Tabs from "@components/tabs/index"
import { useRouter } from "next/router"
import React, { useState } from "react"

export interface TabProps {
    type:'vehicle'|'cargo'|'offer'|'account',
    children?:JSX.Element,
    selected:string,
    setSelected:Function,
    data:object[],
    routes:object[],
    change?: Function
    pathname?: string
}

export const TabLayout = (props:TabProps) => {
    const router = useRouter();
    const {pathname} = router;
    return (
        <Frame>
            <div id={props.type}>
                <Tabs 
                    pathname={pathname}
                    {...props}
                />
                <React.Fragment>
                    {props.children}
                </React.Fragment>
            </div>
        </Frame>

    )
}

export default TabLayout;