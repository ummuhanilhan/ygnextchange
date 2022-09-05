import PrivateLayout from "@layouts/PrivateLayout";
import { AccountLayout } from "@layouts/AccountLayouts";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IconFrame, IconFrameDropdown } from "@components/frames/IconFrame";
import { useRouter } from 'next/router'
import React from "react";
import { Bell, BoxArrowRight, FileText, Send } from "@yukgetir-icons";

export type SettingValues = {
    password: string,
    confirm: string,
    old_password: string,
};

const initialValues = {
    password:'',
    confirm:'',
    old_password:'',
}

export const Settings = () => {
    const form = useForm<SettingValues>({
        defaultValues: initialValues,
        // resolver: yupResolver(),
    });
    const { register, control, handleSubmit, watch, setValue, formState: { errors } } = form;
    const onSubmit: SubmitHandler<SettingValues> = data => {
        console.log(data)
        alert(JSON.stringify(data))
    };
    const onError = (errors:any) => {
        console.log(errors)

    };
    return (
        <AccountLayout>
            <Contact control={control} />
            <Notification control={control} />
            <İnformation control={control} />
        </AccountLayout>
    )
}

Settings.Layout = PrivateLayout;

export default Settings;



export const Contact = ({control}:any) => {
    const [status, setStatus] = React.useState(true);
    return (
        <div>
            <IconFrameDropdown 
                icon={<Send className="menu-icon" />}
                title='İletişim Ayarlarım'
                status={status}
                setStatus={setStatus}
            />


        </div>
    )
}



export const Notification = ({control}:any) => {
    const [status, setStatus] = React.useState(true);
    return (
        <div>
            <IconFrameDropdown 
                icon={<Bell className="menu-icon" />}
                title='İletişim Ayarlarım'
                status={status}
                setStatus={setStatus}
            />


        </div>
    )
}



export const İnformation = ({control}:any) => {
    const [status, setStatus] = React.useState(true);
    return (
        <div>
            <IconFrameDropdown 
                icon={<FileText className="menu-icon" />}
                title='Sözleşmeler ve Bilgilendirme Metinleri'
                status={status}
                setStatus={setStatus}
            />
           {status && (
             <div className="grid grid-cols-3 gap-2">
                <div className="readfile bg-white p-2 rounded-md flex justify-between">
                    <p className="text-gray-500">KVKK Metni</p>
                    <div>
                        <p>Oku</p>
                        <BoxArrowRight />
                    </div>
                </div>
            </div>
           )}
        </div>
    )
}

