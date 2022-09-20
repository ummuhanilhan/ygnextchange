import { CloudArrowUp } from "@shared/icons"
import { NextPage } from "next";
import { FileUpload } from 'primereact/fileupload';
import React, { ChangeEvent, MouseEvent, useState } from "react";
import { FiPlus, FiXCircle } from "react-icons/fi";
import type { NextApiRequest, NextApiResponse } from "next";

export const Upload = ({
    name,
    placeholder,
}:any) => {

    const [file, setFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [value, setValue] = React.useState('')

    const onFileUploadChange = (e: ChangeEvent<HTMLInputElement>) => {
        const fileInput = e.target;
    
        if (!fileInput.files) {
          alert("No file was chosen");
          return;
        }
    
        if (!fileInput.files || fileInput.files.length === 0) {
          alert("Files list is empty");
          return;
        }
    
        const file = fileInput.files[0];
    
        /** File validation */
        if (!file.type.startsWith("image")) {
          alert("Please select a valide image");
          return;
        }
    
        /** Setting file state */
        setFile(file); // we will use the file state, to send it later to the server
        setPreviewUrl(URL.createObjectURL(file)); // we will use this to show the preview of the image
    
        /** Reset file input */
        e.currentTarget.type = "text";
        e.currentTarget.type = "file";
      };
    
      const onCancelFile = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (!previewUrl && !file) {
          return;
        }
        setFile(null);
        setPreviewUrl(null);
      };
    
      const onUploadFile = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
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