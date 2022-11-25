import { SubmitHandler, useForm } from "react-hook-form";
import React, { useEffect } from "react";
import { getDefinitions, selectDefinition } from "stores/slices/definitionSlice";
import { TagHook } from "@shared/elements/hooks/tagHook";
import { useSelector } from "react-redux";
import Private from "@layouts/PrivateLayout";
import { useAppDispatch } from "stores/store";
export const Test = () =>{
    const {definitions} = useSelector(selectDefinition)
    const dispatch = useAppDispatch();
    useEffect(()=>{dispatch(getDefinitions()); console.log(definitions); },[])
   
    return definitions.load ? (
      <FormComponent />
   ) : <></>
};

export default Test;

Test.Layout = Private

export const FormComponent = () =>{
    const {definitions, formatted} = useSelector(selectDefinition);
    const dispatch = useAppDispatch();
    useEffect(()=>{dispatch(getDefinitions()); console.log(definitions); },[])
    const form = useForm({ 
        defaultValues:{
            'rent.features': [
                "63728b818628c49d822e8c5e",
                "63728b818628c49d822e8c65",
                "63728b818628c49d822e8c6a",
                "63728b818628c49d822e8c6b",
                "63728b818628c49d822e8c6c",
                "63728b818628c49d822e8c6d",
                "63728b818628c49d822e8c75",
                "63728b818628c49d822e8c56",
                "63728b818628c49d822e8c57",
                "63728b818628c49d822e8c5c",
                "63728b818628c49d822e8c62",
                "63728b818628c49d822e8c64",
                "63728b818628c49d822e8c66",
                "63728b818628c49d822e8c69",
                "63728b818628c49d822e8c6f",
                "63728b818628c49d822e8c70",
                "63728b818628c49d822e8c72",
                "63728b818628c49d822e8c73",
                "63728b818628c49d822e8c5b",
                "63728b818628c49d822e8c5f",
                "63728b818628c49d822e8c60",
                "63728b818628c49d822e8c67",
                "63728b818628c49d822e8c68",
                "63728b818628c49d822e8c6e",
                "63728b818628c49d822e8c71",
                "63728b818628c49d822e8c74",
                "63728b818628c49d822e8c58",
                "63728b818628c49d822e8c59",
                "63728b818628c49d822e8c5a",
                "63728b818628c49d822e8c5d",
                "63728b818628c49d822e8c61",
                "63728b818628c49d822e8c63"
            ],
            'rent.options': ['63728b818628c49d822e8c77','63728b818628c49d822e8c7d','63728b818628c49d822e8c7a'],
        }
    });
    const { register, control, handleSubmit, watch, setValue, formState: { errors } } = form;
    const onSubmit: SubmitHandler<any> = data => { console.log(data); alert(JSON.stringify(data)); };
    const onError = (errors:any) => { console.log(errors) };
  
    return(
      <form onSubmit={handleSubmit(onSubmit, onError)}>           
            <div className='grid  grid-cols-2 gap-2 h-screen'>
                <TagHook
                    name="rent.features"
                    control={control}
                    placeholder="Araç Özellikleri Seçiniz"
                    size='medium'
                    items={definitions.feature}
                    rotation='top-16'
                    removable
                    id="_id"
                    label="name"
                />
                <TagHook
                    name="rent.options"
                    control={control}
                    placeholder="Donanım Özellikleri Seçiniz"
                    size='medium'
                    id="_id"
                    label="name"
                    items={definitions.option}
                    rotation='top-16'
                    removable
                />
                <button type='submit'>send</button>
            </div>
        </form>
   ) 
}

