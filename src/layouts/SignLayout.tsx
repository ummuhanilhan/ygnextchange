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
            <div className="w-2/3 lg:w-1/1">
                {children}
            </div>
            <div className="introduce w-1/3 lg:w-1/1 bg-yukgetir-blue h-screen flex flex-col items-center justify-center">
                <Truck className="truck ml-[-13em] mt-4 mb-2" height="70%" />    
                <div className="text-right mt-10- w-full flex justify-end">
                    <h1 className="text-5xl align-right text-white font-extralight mr-4 
                    mt-[-2em] max-w-sm text-right x-max-22 pr-6">
                        Lojistiğini Cepten Yönet
                    </h1>
                </div>
            </div>       
        </div>
    )
}