import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormFooter } from "@pages/account";
import { Frame } from "@components/frames/MainFrame";
import Rent from "./rent";
import { CargoTab } from "@components/tabs/CargoTab";
import { CargoLayout } from "@layouts/CargoLayout";
import classNames from "classnames";
import Payload from "./payload";
import Datetime from "./datetime";
import { CargoCreateRoute } from "@utils/mock";

export type CargoValues = {
    name: string,
};

const initialValues = {
    name:'',
}

export const CargoCreate = ({update}:any) => {
    const [selected, setSelected] = React.useState<number>(1);
    const form = useForm<CargoValues>({
        defaultValues: initialValues,
        // resolver: yupResolver(),
    });
    const { register, control, handleSubmit, watch, setValue, formState: { errors } } = form;
    const onSubmit: SubmitHandler<CargoValues> = data => {
        console.log(data)
        alert(JSON.stringify(data))
    };
    const onError = (errors:any) => {
        console.log(errors)

    };

    return (
        <CargoLayout 
            selected={selected}
            setSelected={setSelected}
        >
            <form onSubmit={handleSubmit(onSubmit, onError)}>
                <div className={classNames({'hidden': CargoCreateRoute.rent!=selected})}>
                    <Rent control={control} />
                </div>
                <div className={classNames({'hidden': CargoCreateRoute.datetime!=selected})}>
                    <Datetime control={control} />
                </div>
                <div className={classNames({'hidden': CargoCreateRoute.payload!=selected})}>
                    <Payload control={control} />
                </div>
                
                <div className="w-full flex justify-end mt-3">
                    <div className="bg-yg-orange p-3 px-12 text-white rounded-md  cursor-pointer">Vazgeç</div>
                    <div className="bg-yg-blue p-3 px-12 ml-2 text-white rounded-md cursor-pointer" 
                    onClick={()=>{
                        selected< 3 && setSelected(selected+1)
                    }}>{selected<3 ? 'Devam Et' : (update ?'Güncelle':'Oluştur')}</div>
                </div>
                
            </form>
        </CargoLayout>
    )
}


export default CargoCreate;
