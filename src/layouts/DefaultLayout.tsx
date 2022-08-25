import React, { ReactNode } from "react";
import { useRouter } from "next/router";
import Main from "@containers/Main";


type DefaultState = {
    children: ReactNode
    title?: string
}

export const Default = ({children}: DefaultState) => {
    const router = useRouter()
    const [mobile, setMobile] = React.useState(false)
    return (
        <Main>
            {children}
        </Main>
    )
}

export default Default;