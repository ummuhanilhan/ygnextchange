import PrivateLayout from "@layouts/PrivateLayout";
import { AccountLayout } from "@layouts/AccountLayouts";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IconFrame, IconFrameDropdown } from "@components/frames/IconFrame";
import { useRouter } from 'next/router'
import React from "react";
import { Bell, BoxArrowRight, FileText, Send } from "@yukgetir-icons";
import classNames from "classnames";
import { Toggle } from "@shared/elements/switchers";

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
            <Information control={control} />
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
                <Switcher name='email' checked title='Email Onayı' label='Sitemimizde kayıtlı email (eposta) adresinize mail gönderilmesi hakkında izin onayı' />
                <Switcher name='call' checked title='Arama Onayı' label='Sitemimizde kayıtlı telefon numaranızın aranması hakkında izin onayı' />
                <Switcher name='whatsapp' title='WhatsApp Onayı' label='Sitemimizde kayıtlı cep telefonunuza WhatsApp ile mesaj gönderilmesi hakkında izin onayı' />
            </div>
        </div>
    )
}

export const Switcher = ({title,label, name, checked, control}:any) => {
    const [value, setValue] = React.useState(checked);

    return(
        <div className='mb-3 bg-white p-2 py-3 flex justify-between items-center rounded-md'>
            <div className="flex items-start">
                <h3 className='text-[1.05rem] font-medium w-48'>{title}</h3>
                <p className="text-gray-400 text-md italic">{label}</p>
            </div>
            <Toggle 
                name={name}           
                value={value}           
                setValue={setValue}           
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
            <div className={classNames({'hidden':!status})}>
                <Switcher name='mobile' title='Mobil Bildirim' label='Mobil uygulamamız üzerinden gelecek bildirimler hakkında izin onayı' />
            </div>
        </div>
    )
}



export const informations = [
    {title:'KVKK Metni', slug:'kvkk'},
    {title:'Aydınlatma Metni', slug:''},
    {title:'Çerez Politikası', slug:'cookie'},
    {title:'Rıza Metni', slug:''},
    {title:'Kullanıcı & Üyelik Sözleşmesi', slug:''},
    {title:'Satış Sözleşmesi', slug:''},
    {title:'Gizlilik Politikası', slug:''},
]

export const Information = ({control}:any) => {
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
                    {informations.map((item, i:number)=>(
                        <div className="readfile bg-white p-2 rounded-md flex justify-between" key={`information-${i}`}>
                            <p className="text-gray-500">{item.title}</p>
                            <div>
                                <p>Oku</p>
                                <BoxArrowRight />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

