import React from "react"
import {  CheckboxHook } from "@shared/elements/hooks";

export const FormFooter = ({control, label, check, cb}:any) => {

    return (
        <React.Fragment>
            {check && (
                 <div className="mt-5 flex items-start my-1 mb-5">
                    <CheckboxHook name="accept" label={label} control={control} />
                </div>
            )}
            <div className="w-full flex justify-end">
                <button className="bg-yg-orange p-3 px-12 text-white rounded-md cursor-pointer">Vazgeç</button>
                <button type="submit" className="bg-yg-blue p-3 px-12 ml-2 text-white rounded-md cursor-pointer">Güncelle</button>
            </div>
        </React.Fragment>
    )
}