import React, { useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormFooter } from "@shared/footers";
import { Frame } from "@components/frames/MainFrame";
import Rent from "./rent";
import { CargoTab } from "@components/tabs/CargoTab";
import { CargoLayout } from "@layouts/CargoLayout";
import classNames from "classnames";
import Payload from "./payload";
import Shipping from "./shipping";
import { CargoCreateRoute, defaultItem, initial } from "@utils/mock";
import { joiResolver } from '@hookform/resolvers/joi';
import { cargoSchema } from "@utils/validations/cargo";
import Classic, { defaultOverlays, defaultStyles } from "@shared/modals/classic";
import SimpleBar from "simplebar-react";
import { Publish } from "./publish";
import { formSuite, notify } from "@utils/helper";


export type CargoValues = {
    name: string,
    rent: {
        type: 'parsiel' | 'comple',
        vehicle: string,
        features: string[],
        options: string[],
    },
};

export const CargoCreate = ({update, init}:any) => {
 
    const [open, setOpen] = React.useState(false)
    const sendref = useRef<HTMLButtonElement>(null);
    const [selected, setSelected] = React.useState<number>(1);
  
  
    const form = useForm<any>({
        defaultValues: init ? formSuite(init): initial,
       resolver: joiResolver(cargoSchema),
    });
    const [amount, setAmount] = React.useState(form.getValues('fee.price.amount')||false)

    const { register, control, handleSubmit, watch, setValue, formState: { errors, isDirty, dirtyFields } } = form;
    const onSubmit: SubmitHandler<CargoValues> = data => {
        console.log('submitted',JSON.stringify(data));
        // notify('',{position:'bottom-center', theme:'light'})
    };
    const onError = (errors:any) => { 
        notify('Boş alanları doldurunuz!',{position:'bottom-right', theme:'light', type:'error'})
        console.log('errors', errors, form.getValues() ) };

    return (
        <CargoLayout 
            selected={selected}
            setSelected={setSelected}
        >
            <form onSubmit={handleSubmit(onSubmit, onError)}>
                 <div 
                    className=''
                    // style={{maxHeight:'55vh'}} className='overflow-hidden overflow-y-auto'
                 >
                    <div className={classNames({'hidden': CargoCreateRoute.rent!=selected})}>
                        <Rent control={control} />
                    </div>
                    <div className={classNames({'hidden': CargoCreateRoute.shipping!=selected})}>
                        <Shipping 
                            control={control}
                            getValues={form.getValues}
                            setValue={form.setValue}
                            errors={errors}
                            dirtyFields={dirtyFields}
                        />
                    </div>
                    <div className={classNames({'hidden': CargoCreateRoute.payload!=selected})}>
                        <Payload 
                            control={control} 
                            setValue={form.setValue} 
                            getValues={form.getValues} 
                            amount={amount} 
                            setAmount={setAmount} 
                            errors={errors} 
                            watch={watch}
                        />
                    </div>
                 </div>
                
                <Classic 
                    status={open} 
                    close={()=>setOpen(!open)}
                    styles={{
                        ...defaultStyles,
                        top:'15%',
                        background:'#f7f6fb',
                        paddingTop:'1em'
                    }}
                    overlay={defaultOverlays}
                >
                    {/** <SimpleBar style={{ maxHeight: '350px' }} > **/}
                        <Publish control={control} 
                        footer={<FormFooter 
                            cb={()=>sendref.current?.click()} 
                            close={()=>setOpen(!open)}
                        />}  />
                    {/** </SimpleBar> **/}
                </Classic>
                <button type='submit' className='hidden-' ref={sendref}>send</button>
                <Footer selected={selected} setSelected={setSelected} update={update} setOpen={setOpen} />
            </form>
        </CargoLayout>
    )
}

export default CargoCreate;

export const Footer = ({
    selected,
    setSelected,
    update,
    setOpen
}:any) => {

    return (
        <div className="grid grid-cols-1 
        sm:flex sm:justify-end mt-3 
        -sticky right-3 bottom-3 sm:p-3  ">
            <div className="bg-yg-orange p-3 text-center px-12 text-white rounded-md  cursor-pointer">Vazgeç</div>
            <div 
            className="bg-yg-blue p-3 px-12 mt-2 sm:mt-0 sm:ml-2 text-white rounded-md cursor-pointer" 
            onClick={()=>{
                selected< 3 && setSelected(selected+1)
                selected>=3 && setOpen && setOpen(true)
            }}>{selected<3 ? 'Devam Et' : (update ?'Güncelle':'Oluştur')}</div>
        </div>
    )
}