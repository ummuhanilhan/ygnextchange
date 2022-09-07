import { TitleFrame } from "@components/frames/TitleFrame";
import { MultiSelectHook, VehicleRadioHook } from "@shared/elements/hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormFooter } from "@pages/account";
 
export type CargoValues = {
    name: string,
};

const initialValues = {
    name:'',
}

export const CargoCreate = ({update}:any) => {
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
        <form onSubmit={handleSubmit(onSubmit, onError)}>
            <TitleFrame title="Araç Markası">
             </TitleFrame>
                       
            <div className="grid grid-cols-1 w-full">
            <TitleFrame title="Araç Tipi">
                    <VehicleRadioHook name="type" control={control} />
            </TitleFrame>
            </div>
            {/** <TitleFrame title="Araç Tipi"></TitleFrame> **/}
            <div className='grid grid-cols-2'>
                <TitleFrame title="Araç Özellikleri">
                    <MultiSelectHook name="brand" control={control} placeholder="Araç Özellikleri Seçiniz" />                 
                </TitleFrame>
                <TitleFrame title="Donanım Seçenekleri">
                    <MultiSelectHook name="brand" control={control} placeholder="Yükünüze Uygun Ek Donanım Özellikleri Seçiniz" />                 
                </TitleFrame>
            </div>

            <FormFooter />
        </form>
    )
}


export default CargoCreate;


