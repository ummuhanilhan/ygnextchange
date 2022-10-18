import PrivateLayout from "@layouts/PrivateLayout";
import { AccountLayout } from "@layouts/AccountLayouts";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IconFrame, IconFrameDropdown } from "@components/frames/IconFrame";
import { useRouter } from 'next/router'
import React from "react";
import { ShieldLock } from "@shared/icons";
import { FloatLabelHook } from "@shared/elements/hooks";
import { FormFooter } from "@shared/footers";

export type ResetValues = {
    password: string,
    confirm: string,
    old: string,
};

const initialValues = {
    password:'',
    confirm:'',
    old:'',
}

export const ChangePassword = () => {
    const [status, setStatus] = React.useState(true)

    const form = useForm<ResetValues>({
        defaultValues: initialValues,
        // resolver: yupResolver(),
    });
    const { register, control, handleSubmit, watch, setValue, formState: { errors } } = form;
    const onSubmit: SubmitHandler<ResetValues> = data => {
        console.log(data)
        alert(JSON.stringify(data))
    };
    const onError = (errors:any) => {
        console.log(errors)

    };
    return (
        <AccountLayout>
            <IconFrameDropdown 
                icon={<ShieldLock className="menu-icon" />}
                title='Şifremi Değiştir'
                status={status}
                setStatus={setStatus}
            />
           {status && (
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mb-2 change-password">
                <FloatLabelHook name="old" type="password" placeholder="Eski Şifrenizi Giriniz" example="" control={control} />
                <FloatLabelHook name="passowrd" type="password" placeholder="Yeni Şifreniz" example="" control={control} />
                <FloatLabelHook name="confirm" type="password" placeholder="Yeni Şifrenizi Tekrar Giriniz" example="" control={control} />
            </div>
           )}
          <div className="my-3 mt-5"><FormFooter /></div>
        </AccountLayout>
    )
}

ChangePassword.Layout = PrivateLayout;

export default ChangePassword;