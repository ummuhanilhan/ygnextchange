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
        <div id="auth" className="flex justify-end items-center flex-col lg:flex-row w-full lg:w-screen ">
            <div className="lg:w-2/3">
                {children}
            </div>
            <div className="introduce w-full h-auto lg:h-screen
            bg-yg-blue flex flex-col-reverse lg:flex-col 
            items-center justify-end lg:justify-center ">
                <Truck className="truck lg:ml-[-5em] 2xl:ml-[-13em] mb-2 object-contain "  />    
                <div className="text-right w-full flex justify-end">
                    <h1 className="text-[3.8em] leading-none align-right 
                    text-white font-extralight mr-4 mt-4  
                    lg:mt-[-2em] max-w-sm text-right x-max-22 pr-6">
                        Lojistiğini Cepten Yönet
                    </h1>
                </div>
            </div>       
        </div>
    )
}