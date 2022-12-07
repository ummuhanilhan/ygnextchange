import { ReactNode, useEffect } from "react";
import Main from "@containers/Main";
import { Frame } from "@components/frames/MainFrame";
import React from "react";
import { useAppDispatch } from "stores/store";
import { me, selectAuth } from "stores/slices/authSlice";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { LoadingState } from "stores/types";

type DefaultState = {
    children: ReactNode
    title?: string
}

export const Private = ({children}: DefaultState) => {
    const router = useRouter();
    const { isAuth, loading } = useSelector(selectAuth)
    const dispatch = useAppDispatch();
    React.useEffect(()=>{dispatch(me())},[])
    useEffect(()=>{
        if( loading == LoadingState.ERROR && !isAuth ) router.push('/')
    },[loading])


    const content = isAuth ? (
        <div className="flex flex-center items-center">
            <div className="max-w-[1669px] w-full">
                <Main>
                    {children}
                </Main>
            </div>
        </div>
    ) : <></>

    const basic = (
        <Main className='max-w-[1669px]' >
            {children}
        </Main>
    )
    return content;
}

export default Private;