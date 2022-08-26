import React, { ReactNode } from "react";
import { useRouter } from "next/router";
import Truck from '@public/assets/truck.svg';

type DefaultState = {
    children: ReactNode
}

export const SignLayout = ({children}:DefaultState) => {

    React.useEffect(()=>{
        document.body.style.background = '#f6f8fb'
    })
    return (
        <div id="auth" className="flex justify-between w-full">
            <div className="w-2/3 md:w-2/4">
                {children}
            </div>
            <div className="introduce w-1/3 bg-yukgetir-blue h-screen flex flex-col items-center justify-center">
                <Truck className="truck ml-[-10em] mt-4 mb-2" height="29em" />    
                <div className="w-full">
                    <h1 className="text-5xl text-white font-light mr-4 mt-[-2em] max-w-sm text-right ">Lojistiğini Cepten Yönet</h1>
                </div>
            </div>       
        </div>
    )
}