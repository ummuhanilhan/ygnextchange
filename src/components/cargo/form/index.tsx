import React, { useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormFooter } from "@shared/footers";
import Rent from "./rent";
import { CargoLayout } from "@layouts/CargoLayout";
import classNames from "classnames";
import Payload from "./payload";
import Shipping from "./shipping";
import { CargoCreateRoute, initial,  defaultItem } from "@utils/mock";
import { joiResolver } from '@hookform/resolvers/joi';
import { cargoSchema } from "@utils/validations/cargo";
import Classic, { defaultOverlays, defaultStyles } from "@shared/modals/classic";
import { Publish } from "./publish";
import { errMessage, formSuite, notify } from "@utils/helper";
import { useAppDispatch } from "stores/store";
import { create, selectCargo, update } from "stores/slices/cargoSlice";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { LoadingState } from "stores/types";
import { useRouter } from "next/router";
import { getDefinitions, selectDefinition } from "stores/slices/definitionSlice";
import { Frame } from "@components/frames/MainFrame";
import { CargoTab } from "@components/tabs/CargoTab";
import { yupResolver } from "@hookform/resolvers/yup";
import SimpleBar from "simplebar-react";
import { Spinner } from "@utils/skeleton";

export type CargoValues = {
    name: string,
    rent: {
        type: 'parsiel' | 'comple',
        vehicle: string,
        features: string[],
        options: string[],
    },
};

export const CargoCreate = ({uptodate, init}:any) => {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const [open, setOpen] = React.useState(false)
    const sendref = useRef<HTMLButtonElement>(null);
    const [selected, setSelected] = React.useState<number>(1);
    const {message, loading, error}:any = useSelector(selectCargo)

    useEffect(()=>{
      if( loading == LoadingState.LOADED) {
            notify('Başarıyla oluşturuldu', {type:'success', position:'bottom-center'})
            router.push('/')
        }
    },[loading])
    useEffect(()=>{
        error && notify(message)
    },[error])
    const form = useForm<any>({
        defaultValues: init ? formSuite(init): initial,
       resolver: joiResolver(cargoSchema),
    });

    const { register, control, handleSubmit, watch, setValue, formState: { errors, isDirty, dirtyFields } } = form;

    const [amount, setAmount] = React.useState(form.getValues('fee.price.amount')||false)

    
    const onSubmit: SubmitHandler<CargoValues> = data => {
        //@ts-ignore
        console.log('price:', data?.fee?.price, data)
        if(uptodate)
            dispatch(create(data)) // update({id:'', values:data})
        else
            dispatch(create(data))
    };

    const onError = (errors:any) => {
        errMessage(message); 
        console.log('errors', errors, form.getValues() ) 
    };
    const {definitions} = useSelector(selectDefinition);
    React.useEffect(()=>{
        if(!definitions.load) dispatch(getDefinitions());
    },[definitions])
    // if(!definitions.load) return;

    return definitions.load ? (
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
                            loading={loading == LoadingState.LOADING} 
                            cb={()=>sendref.current?.click()} 
                            close={()=>setOpen(!open)}
                        />}  />
                    {/** </SimpleBar> **/}
                </Classic>
                <button type='submit' className='hidden-' ref={sendref}>send</button>
                <Footer 
                loading={loading == LoadingState.LOADING}
                selected={selected} setSelected={setSelected} update={update} setOpen={setOpen} />
            </form>
        </CargoLayout>
    ) :<>Yükleniyor...</>
}

export default CargoCreate;

export const Footer = ({
    selected,
    setSelected,
    update,
    setOpen,
    loading
}:any) => {
    const router = useRouter();

    return (
        <div className="grid grid-cols-1 
        sm:flex sm:justify-end mt-3 
        -sticky right-3 bottom-3 sm:p-3  ">
            {selected==1 && <div 
            onClick={()=>router.push('/')}
            className="bg-yg-orange p-3 text-center px-12 text-white rounded-md  cursor-pointer">Vazgeç</div> }
            {selected!=1 && <div 
            onClick={()=>setSelected(--selected)}
            className="bg-yg-orange p-3 text-center px-12 text-white rounded-md  cursor-pointer">Geri</div> }
            <div 
            className="bg-yg-blue p-3 px-12 mt-2 sm:mt-0 sm:ml-2 text-white rounded-md cursor-pointer" 
            onClick={()=>{
                selected< 3 && setSelected(selected+1)
                selected>=3 && setOpen && setOpen(true)
            }}>
                {loading &&  <Spinner />}
                {  loading ? 'Yükleniyor' : (selected<3 ? 'Devam Et' : (update ?'Güncelle':'Yayınla') ) }
            </div>
        </div>
    )
}