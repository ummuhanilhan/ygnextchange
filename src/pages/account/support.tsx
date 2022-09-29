import PrivateLayout from "@layouts/PrivateLayout";
import { AccountLayout } from "@layouts/AccountLayouts";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IconFrame } from "@components/frames/IconFrame";
import { useRouter } from 'next/router'
import React from "react";
import classNames from "classnames";
import { Bell, Check, Doublecheck, Send, Warn } from "@shared/icons";
import { Frame } from "@components/frames/MainFrame";

export type SupportValues = {
    password: string,
    confirm: string,
    old_password: string,
};

const initialValues = {
    password:'',
    confirm:'',
    old_password:'',
}


export const messages = [
    {id:1, icon:<Check height={13} />, action:'Yeni Yük Eklendi', message:'Adana - Mersin konumu için yeni yük eklendi.', type:'info', read:false},
    {id:2, icon:<Doublecheck height={15} />, action:'Yeni Yük Eklendi', message:'Adana - Mersin konumu için yeni yük eklendi.', type:'info', read:true},
    {id:3, icon:<Warn height={20}/>, err:true, action:'Araç Sigorta Gününüz Yaklaştı', message:'06 YKGTR 34 plakalı aracınızın sigortası 16.09.2022 tarihinde bitecektir. Sigortanızı hızla bir şekilde yenilemek için tıklayınız.', type:'err', read:true},
]


export const Support = () => {
    const form = useForm<SupportValues>({
        defaultValues: initialValues,
        // resolver: yupResolver(),
    });
    const { register, control, handleSubmit, watch, setValue, formState: { errors } } = form;
    const onSubmit: SubmitHandler<SupportValues> = data => {
        console.log(data)
        alert(JSON.stringify(data))
    };
    const onError = (errors:any) => {
        console.log(errors)

    };
    return (
      <Frame>
        <IconFrame icon={<Send className="menu-icon" />} title="Destek Taleplerim" />
        {messages.map((item,i:number)=>(
            <SupportItem item={item} key={`notify-${i}`} />
        ))}
      </Frame>
    )
}

Support.Layout = PrivateLayout;

export default Support;



export const SupportItem = ({item,mini}:any) =>{

    return(
        <li className={classNames(
            'notify rounded-lg border-none flex justify-between items-end my-2 pl-4 bg-white',
            mini ? 'p-1': 'p-3',
            !item.err && item.read && 'gray',
        )}>
           <div className='flex items-center'>
              <div>
                    <div className={classNames(
                        'icon-circle',
                        item.read ? 'read' : 'unread',
                        item.err && 'err',
                    )}>
                        {item.icon}
                    </div>
                </div>
                <div className={classNames(
                    'ml-2',
                    !item.err && item.read && 'gray'
                )}>
                    <h3 className={classNames(
                        'action font-semibold',
                        item.err ? 'text-[#e30a17]' : 'text-yg-blue'
                    )}
                    >{item.action}</h3>
                    <p className='message'>{item.message}</p>
                </div>
           </div>
            <div>
                <div className="button px-5 py-1 bg-yg-blue text-white rounded-md">Yanıtla</div>
            </div>
        </li>
    )
}
