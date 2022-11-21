import React from "react"
import {  CheckboxHook } from "@shared/elements/hooks";
import classNames from "classnames";

export const FormFooter = ({className, control, label, check, cb, close, submit}:any) => {

    return (
        <div className={classNames(className, 'mt-3')}>
            {check && (
                 <div className="mt-5 flex items-start my-1 mb-5">
                    <CheckboxHook name="accept" label={label} control={control} />
                </div>
            )}
            <div className="w-full flex justify-end">
                <button onClick={()=>close && close()} className="bg-yg-orange p-3 px-12 text-white rounded-md cursor-pointer">Vazgeç</button>
                <button onClick={()=>cb&&cb()} type={submit?'submit':'button'} className="bg-yg-blue p-3 px-12 ml-2 text-white rounded-md cursor-pointer">Güncelle</button>
            </div>
        </div>
    )
}