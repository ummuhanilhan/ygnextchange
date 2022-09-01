import { ReactNode } from "react";
import Main from "@containers/Main";
import { Frame } from "@components/frames/MainFrame";


type DefaultState = {
    children: ReactNode
    title?: string
}

export const Private = ({children}: DefaultState) => {
    return (
        <Main>
           <Frame>
               {children}
           </Frame>
        </Main>
    )
}

export default Private;