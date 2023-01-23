import React from "react"
import {  CheckboxHook } from "@shared/elements/hooks";
import classNames from "classnames";
import { Spinner } from "@utils/skeleton";
import { useRouter } from "next/router";

export const FormFooter = ({
    className,
    loading,
    control,
    label,
    check,
    cb,
    save,
    close,
    submit
}:any) => {
    const router = useRouter();
    return (
        <div className={classNames(className, 'mt-3')}>
            {check && (
                 <div className="mt-5 flex items-start my-1 mb-5">
                    <CheckboxHook name="accept" label={label} control={control} />
                </div>
            )}
            <div className="w-full flex justify-end">
                <button onClick={ ()=>{
                    close && close()
                    router.push('/')
                }} type='button' className="bg-yg-orange p-3 px-12 text-white rounded-md cursor-pointer">Vazgeç</button>
                <button 
                disabled={loading}
                onClick={ ()=>{
                    cb&&cb()
                }} type={submit?'submit':'submit'} className="bg-yg-blue p-3 px-12 ml-2 
                text-white rounded-md cursor-pointer">
                    {loading &&  <Spinner />}
                    {loading?'Yükleniyor..': 'Güncelle'}</button>
            </div>
        </div>
    )
}

 