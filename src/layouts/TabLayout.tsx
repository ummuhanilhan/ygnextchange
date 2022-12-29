import { Frame } from "@components/frames/MainFrame";
import Tabs from "@components/tabs/index"
import { useRouter } from "next/router"
import React, { useState } from "react"

export interface TabProps {
    type:'vehicle'|'cargo'|'offer'|'account',
    children?:JSX.Element,
    selected:any,
    setSelected:Function,
    data:object[],
    routes:object,
    change?: Function
    pathname?: string
    frame?: boolean
    numeric?: boolean
    filter?: string|number
    filterize?: boolean
}

export const TabLayout = (props:TabProps) => {
    const {selected, setSelected} = props;
    const router = useRouter();
    const {pathname} = router;
    const context = (
        <div id={props.type} className=''>
            <Tabs 
                pathname={pathname}
                {...props}
                selected={selected}
                setSelected={setSelected}
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