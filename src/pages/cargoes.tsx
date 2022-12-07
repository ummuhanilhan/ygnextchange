import PrivateLayout from "@layouts/PrivateLayout";
import { AccountLayout } from "@layouts/AccountLayouts";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IconFrame } from "@components/frames/IconFrame";
import { useRouter } from 'next/router'
import React from "react";
import { View } from "@components/cargo/view";
import { CargoRoute } from "@utils/mock";

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

    return (
        <View wide tabs type='mycargoes' />
    )
}

Cargoes.Layout = PrivateLayout;

export default Cargoes;