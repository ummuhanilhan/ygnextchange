import PrivateLayout from "@layouts/PrivateLayout";
import { AccountLayout } from "@layouts/AccountLayouts";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IconFrame } from "@components/frames/IconFrame";
import { useRouter } from 'next/router'
import React, { useEffect, useState } from "react";
import { View } from "@components/cargo/view";
import { CargoRoute } from "@utils/mock";
import {useSelector} from "react-redux";
import {useAppDispatch} from "stores/store";
import {filters, mycargoes, selectCargo} from "stores/slices/cargoSlice";
import { LoadingState } from "stores/types";
import { useScrollYPosition } from "@utils/hooks/usePosition";

export type CargoValues = {
    password: string,
    confirm: string,
    old_password: string,
};

const initialValues = {
    password:'',
    confirm:'',
    old_password:'',
}

export const Cargoes = () => {
    const [param, setParam] = useState<any>({})
    const dispatch = useAppDispatch()
    const { cargoes, error, loading }:any = useSelector(selectCargo)
    const [selected, setSelected] = useState(1);
    const now = Date.now();

    useEffect(()=>{
        dispatch(mycargoes({ status:'inshipment' }))
    },[selected])

    return (
        <View 
            data={cargoes?.slice().filter((f:any)=>{
                const endDate = new Date(f.publish?.end?.date).getTime() 

                if(selected==1)
                    return endDate < now 
                else
                    return endDate > now 
            })} 
            loading={LoadingState.LOADING==loading} 
            error={error} 
            wide 
            tabs 
            type='mycargoes' 
            empty={cargoes?.length<=0}
            selected={selected} 
            setSelected={setSelected} 
        />
    )
}

Cargoes.Layout = PrivateLayout;

export default Cargoes;