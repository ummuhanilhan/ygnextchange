import { ReactNode } from "react";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
  
export const FormLayout = ({
    render, 
    defaultValues, 
    initial, 
    save
}: any) => {
    const Render = render;
    const form = useForm<any>({
        defaultValues,
       resolver: initial ? joiResolver(initial): undefined,
    });
    const { register, control, handleSubmit, watch, setValue, formState: { errors, isDirty, dirtyFields } } = form;
    const onSubmit: SubmitHandler<any> = data => {
        save && save(data)
    };
    const onError = (errors:any) => {}
    const content = (
        <form onSubmit={handleSubmit(onSubmit, onError)}>
            <Render 
                control={control}
                watch={watch}
            />
        </form>
    )
    return content;
}

export default FormLayout;