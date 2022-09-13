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
    routes:object,
    change?: Function
    pathname?: string
    frame?: boolean
    numeric?: boolean
}

export const TabLayout = (props:TabProps) => {
    const router = useRouter();
    const [selected, setSelected] = React.useState(String(1))
    const {pathname} = router;
    const context = (
        <div id={props.type} className='my-4'>
            <Tabs 
                pathname={pathname}
                {...props}
                selected={props.numeric?selected:props.selected}
                setSelected={props.numeric?setSelected:props.setSelected}
            />
            <React.Fragment>
                {props.children} 
            </React.Fragment>
        </div>
    )
    return props.frame ? (
        <Frame>{context}</Frame>
    ) : context;
}

export default TabLayout;