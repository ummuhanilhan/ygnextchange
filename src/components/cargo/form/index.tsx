import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormFooter } from "@components/account";
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
import Classic from "@shared/modals/classic";
import SimpleBar from "simplebar-react";
import { Publish } from "./publish";

export type CargoValues = {
    name: string,
    rent: {
        type: 'parsiel' | 'comple',
        vehicle: string,
        features: string[],
        options: string[],
    },
};

const initialValues = {
    ...initial,
    ...defaultItem,
    'rent.type': 'parsiel',
    'rent.vehicle': 'trailer',
    // 'shipping.range': [ '14/05/2020', '19/09/2025' ],
   
}

export const CargoCreate = ({update}:any) => {
    const [open, setOpen] = React.useState(false)
    const [selected, setSelected] = React.useState<number>(1);
    const form = useForm<any>({
        defaultValues: initialValues,
       resolver: joiResolver(cargoSchema),
    });
    const { register, control, handleSubmit, watch, setValue, formState: { errors } } = form;
    const onSubmit: SubmitHandler<CargoValues> = data => {
        console.log(data);
        console.log(JSON.stringify(data));
    };
    const onError = (errors:any) => { console.log(errors) };

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
                        <Shipping control={control} />
                    </div>
                    <div className={classNames({'hidden': CargoCreateRoute.payload!=selected})}>
                        <Payload control={control} />
                    </div>
                 </div>
                
                <Classic 
                    status={open} 
                    close={()=>setOpen(!open)}
                    styles={{
                        height:'fit-content',
                        top:'15%',
                        left:'20%',
                        right:'20%',
                        borderRadius:'10px',
                        overflow:'visible',
                        background:'#f7f6fb',
                    }}
                    overlay={{
                        backgroundColor:'rgba(0, 0, 0, 0.5)',
                        WebkitBackdropFilter: 'blur(0)',
                        backdropFilter: 'blur(0)',
        
                    }}
                >
                    <SimpleBar style={{ maxHeight: '350px' }} >
                        
                        <Publish control={control} />
                    </SimpleBar>
                </Classic>
                <button type='submit' className='button btn'>send</button>
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