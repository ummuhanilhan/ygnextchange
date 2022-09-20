import { CloudArrowUp } from "@shared/icons"
import { FileUpload } from 'primereact/fileupload';
import React from "react";
import { FiXCircle } from "react-icons/fi";

export const Upload = ({
    name,
    placeholder,
    file,
}:any) => {
    const [value, setValue] = React.useState('')

    return (
        <div className="relative w-full">
            <FileUpload  
                name={name}
                url="./upload"  
                accept="image/*" 
                className="w-full py-[.2rem]"
                mode="basic"
            />
            <CloudArrowUp className="absolute right-2 top-[.9rem] fill-yg-orange" height={25} />
        </div>
    )
}


export const Avatar = ({
    name,
    placeholder,
    ...rest
}:any) => {
    const [value, setValue] = React.useState('')
    return (
        <div className="flex flex-start">
            <div className="relative w-full">
                <FileUpload  
                    name={value}
                    url="./upload"  
                    accept="image/*" 
                    className="w-full py-[.2rem] border-none"
                    mode="basic"
                />
                <div className="bg-white">
                    <CloudArrowUp className="absolute right-3 top-[1.1rem] bg-white fill-yg-orange" height={17} />
                </div>
            </div>
            <div className="btn p-2 bg-white rounded-md ml-2 w-14 h-14 flex items-center justify-center cursor-pointer"><FiXCircle className="text-xl text-gray-400" width={35} /></div>                 
        </div>
    )
}