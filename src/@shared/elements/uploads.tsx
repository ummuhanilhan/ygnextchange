import { CardImage, CloudArrowUp } from "@shared/icons"
import { NextPage } from "next";
import { FileUpload } from 'primereact/fileupload';
import React, { ChangeEvent, MouseEvent, useRef, useState } from "react";
import { FiPlus, FiXCircle } from "react-icons/fi";
import type { NextApiRequest, NextApiResponse } from "next";
import { IconFrame } from "@components/frames/IconFrame";
import classNames from "classnames";


// TODO: Validation Required
export const Upload = ({
    name,
    height='h-[55px]',
    placeholder,
    value,
    getValues,
    onChange,
}:any) => {

    const [fileName, setFileName] = useState();
    const [file, setFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    const onFileUploadChange = (e: ChangeEvent<HTMLInputElement>) => {
        const fileInput:any = e.target;
         if (!fileInput.files) {
          alert("No file was chosen");
          return;
        }
    
        if (!fileInput.files || fileInput.files.length === 0) {
          alert("Files list is empty");
          return;
        }
    
        const file = fileInput.files[0];
        // setFileName(file.name)
        onChange(file.name)
    
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

      const inputRef = useRef<HTMLInputElement>(null);

    return (
        <div className={classNames(
          `relative w-full  
          bg-white cursor-pointer rounded-md px-4
           text-gray-700 flex items-center overflow-hidden
            justify-between`,
            height

        )}
         
         >
        <label className='
         overflow-hidden max-w-[11em]
        text-base cursor-pointer flex items-center'>
            <input 
                name={name}
                type='file' 
                ref={inputRef}
                className='hidden' 
                onChange={onFileUploadChange}
            />
            <p className='text-gray-400'>{value ? value : placeholder}</p>                    
        </label>
        <div className='flex items-start z-10'>
            
           {!value && (
             <CloudArrowUp 
                onClick={()=>inputRef.current?.click()}
                className=" right-3 top-[1.4rem]
                fill-yg-orange" 
                height={19} 
             />
           )}
           {value && (
            <React.Fragment>
                <p className='text-yg-green'>Eklendi</p>
                <div
                    onClick={()=>onChange('')}
                ><FiXCircle size={21} className='z-10 fill-white text-gray-400 mx-2 stroke-[1.3px]' /></div>
            </React.Fragment>
           )}
        </div>
        <div onClick={()=>inputRef.current?.click()} className="lay z-0 absolute left-0 right-0 top-0 bottom-0" />
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
    
    <div className="flex items-start w-full gap-3">
      <div className="avatar">
          <img src="/assets/avatar.svg" width="135" />
      </div>
      <div className="w-full flex flex-start flex-col">
          <IconFrame icon={<CardImage className="menu-icon" />} title="Profil Fotoğrafım" />

            <div className="flex flex-center justify-center">
              <Upload  
                      name={name}
                      placeholder={placeholder}
                  />
              <div className="btn p-2 bg-white rounded-md ml-2
              w-14 h-[55px] flex items-center justify-center cursor-pointer">
                <FiXCircle className="text-xl text-gray-400" width={25} /></div>                 
          </div>
          
            <p className="text-gray-500 italic text-sm mt-1"> JPG & PNG uzantılı dosyalar aizin verilir. (Maks. 500kb) </p>
        </div>
    </div>
      
  )
}
