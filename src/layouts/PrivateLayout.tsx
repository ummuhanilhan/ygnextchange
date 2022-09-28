import { ReactNode } from "react";
import Main from "@containers/Main";
import { Frame } from "@components/frames/MainFrame";


type DefaultState = {
    children: ReactNode
    title?: string
}

export const Private = ({children}: DefaultState) => {
    return (
        <div className="flex flex-center items-center">
            <div className="max-w-[1669px] w-full">
            <Main>
                {children}
            </Main>
        </div>
        </div>
    )
}

export default Private;