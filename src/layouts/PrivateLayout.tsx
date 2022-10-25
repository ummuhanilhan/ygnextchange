import { ReactNode } from "react";
import Main from "@containers/Main";
import { Frame } from "@components/frames/MainFrame";
import React from "react";
  
type DefaultState = {
    children: ReactNode
    title?: string
}

export const Private = ({children}: DefaultState) => {

    const content = (
        <div className="flex flex-center items-center">
            <div className="max-w-[1669px] w-full">
                <Main>
                    {children}
                </Main>
            </div>
        </div>
    )

    const basic = (
        <Main className='max-w-[1669px]' >
            {children}
        </Main>
    )
    return content;
}

export default Private;