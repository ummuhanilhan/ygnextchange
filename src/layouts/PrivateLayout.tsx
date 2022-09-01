import { ReactNode } from "react";
import { useRouter } from "next/router";
import Main from "@containers/Main";


type DefaultState = {
    children: ReactNode
    title?: string
}

export const Private = ({children}: DefaultState) => {
    const router = useRouter()

  
    return (
        <Main>
            {children}
        </Main>
    )
}

export default Private;