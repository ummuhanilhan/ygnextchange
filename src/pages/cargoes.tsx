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
import {filters, selectCargo} from "stores/slices/cargoSlice";
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

    useEffect(()=>{
        if(selected==1){
            dispatch(filters({ status:'inshipment' }))
        }else{
            dispatch(filters({ status:'outdated' }))
        }
    },[selected])

    return (
        <View 
            data={cargoes} 
            loading={LoadingState.LOADING==loading} 
            error={error} 
            wide 
            tabs 
            type='mycargoes' 
            selected={selected} 
            setSelected={setSelected} 
        />
    )
}

Cargoes.Layout = PrivateLayout;

export default Cargoes;