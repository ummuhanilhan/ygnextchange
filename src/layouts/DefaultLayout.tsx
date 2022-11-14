import React, { ReactNode, useEffect } from "react";
import { useRouter } from "next/router";
import Main from "@containers/Main";
import { useAppDispatch } from "stores/store";
import { me, selectAuth } from "stores/slices/authSlice";
import { useSelector } from "react-redux";
import { LoadingState } from "stores/types";


type DefaultState = {
    children: ReactNode
    title?: string
}

export const Default = ({children}: DefaultState) => {
    const router = useRouter()
    const [mobile, setMobile] = React.useState(false)
    const dispatch = useAppDispatch();
    React.useEffect(()=>{dispatch(me())},[])
    return (
        <Main>
            {children}
        </Main>
    )
}

export default Default;