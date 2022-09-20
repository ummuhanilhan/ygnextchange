import { CloudArrowUp } from "@shared/icons"
import { NextPage } from "next";
import { FileUpload } from 'primereact/fileupload';
import React, { ChangeEvent } from "react";
import { FiPlus, FiXCircle } from "react-icons/fi";

export const Avatar = ({
    name,
    placeholder,
    ...rest
}:any) => {
    const [value, setValue] = React.useState('')
    return (
        <div className="flex flex-center justify-center">
            <div className="relative w-full">
                <FileUpload  
                    name={value}
                    url="./upload"  
                    accept="image/*" 
                    className="w-full py-[.2rem] border-none"
                    mode="basic"
                />
                <div className="bg-white">
                    <CloudArrowUp className="absolute right-3 
                    top-[1.4rem] bg-white fill-yg-orange" 
                    height={19} />
                </div>
            </div>
            <div className="btn p-2 bg-white rounded-md ml-2 
            w-14 h-14 flex items-center justify-center cursor-pointer"><FiXCircle className="text-xl text-gray-400" width={25} /></div>                 
        </div>
    )
}

export const Upload = ({
    name,
    placeholder,
    file,
}:any) => {
    const [value, setValue] = React.useState('')

    const onFileUploadChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log('onChange',e)
        console.log("From onFileUploadChange");
    };
    
    const onCancelFile = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        console.log('cancel',e)
        console.log("From onCancelFile");
    };
    
    const onUploadFile = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        console.log('onUpload',e)
        console.log("From onUploadFile");
    };

    return (
        <div className="relative w-full h-[4em]
       bg-white cursor-pointer rounded-md px-4
        text-gray-700 flex items-center
         justify-between">
        <label className='w-full text-base cursor-pointer flex items-center'>
            <input 
                name={name}
                type='file' 
                className='hidden' 
                onChange={onFileUploadChange}
            />
            <p>{placeholder}</p>                    
        </label>
        <div className='flex items-start'>
            
           {true && (
             <CloudArrowUp 
                className=" right-3 top-[1.4rem]
                fill-yg-orange" 
                height={19} 
             />
           )}
           {false && (
            <React.Fragment>
                <p className='text-yg-green'>Eklendi</p>
                <div><FiXCircle size={21} className='text-gray-400 mx-2 stroke-[1.3px]' /></div>
            </React.Fragment>
           )}
        </div>
        </div>
    )
}