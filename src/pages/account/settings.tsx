import PrivateLayout from "@layouts/PrivateLayout";
import { AccountLayout } from "@layouts/AccountLayouts";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IconFrame, IconFrameDropdown } from "@components/frames/IconFrame";
import { useRouter } from 'next/router'
import React from "react";
import { Bell, BoxArrowRight, FileText, Send } from "@yukgetir-icons";
import classNames from "classnames";

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
            <div className={classNames({'hidden':!status})}>
                <Switcher name='sms' title='SMS Onayı' label='Sitemimizde kayıtlı cep telefonunuza SMS ile mesaj gönderilmesi hakkında izin onayı' />
                <Switcher name='email' title='Email Onayı' label='Sitemimizde kayıtlı email (eposta) adresinize mail gönderilmesi hakkında izin onayı' />
                <Switcher name='call' title='Arama Onayı' label='Sitemimizde kayıtlı telefon numaranızın aranması hakkında izin onayı' />
                <Switcher name='whatsapp' title='WhatsApp Onayı' label='Sitemimizde kayıtlı cep telefonunuza WhatsApp ile mesaj gönderilmesi hakkında izin onayı' />
            </div>
        </div>
    )
}

export const Switcher = ({title,label, name, control}:any) => {
    return(
        <div className='mb-3 bg-white p-2 py-3 flex justify-between items-center rounded-md'>
            <div className="flex items-start">
                <h3 className='text-[1.05rem] font-medium w-48'>{title}</h3>
                <p className="text-gray-500 text-md italic">{label}</p>
            </div>

            <label htmlFor={`checked-toggle-${name}`} className="inline-flex h-full relative items-center
            cursor-pointer">
                <input type="checkbox" value="" id={`checked-toggle-${name}`} className="sr-only peer" checked />
                <div className="w-9 h-5 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full 
                after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
            </label>

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
            <div className={classNames({'hidden':!status})}>
                <Switcher name='mobile' title='Mobil Bildirim' label='Mobil uygulamamız üzerinden gelecek bildirimler hakkında izin onayı' />
            </div>
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
            <div className={classNames({'hidden':!status})}>
                <div className="grid grid-cols-3 gap-2">
                    <div className="readfile bg-white p-2 rounded-md flex justify-between">
                        <p className="text-gray-500">KVKK Metni</p>
                        <div>
                            <p>Oku</p>
                            <BoxArrowRight />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

