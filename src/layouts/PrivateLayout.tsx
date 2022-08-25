import React, { ReactNode } from "react";
import { useRouter } from "next/router";
import Main from "@containers/Main";


type DefaultState = {
    children: ReactNode
    title?: string
}

export const Private = ({children}: DefaultState) => {
    const router = useRouter()

    const [mobile, setMobile] = React.useState(false)
      
    let mini  = mobile ? 'translate-x-0':'-translate-x-96'
    let blur  = mobile ? 'filter blur-sm':''
    let event = mobile ? 'pointer-events-none':''

    return (
        <Main>
            {children}
        </Main>
    )
}

export default Private;