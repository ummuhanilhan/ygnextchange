import PrivateLayout from "@layouts/PrivateLayout";
import { AccountLayout } from "@layouts/AccountLayouts";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IconFrame } from "@components/frames/IconFrame";
import { useRouter } from 'next/router'
import React from "react";
import classNames from "classnames";
import { Bell, Bidirection, Check, CheckLight, Doublecheck, Refresh, Return, Send, Warn } from "@shared/icons";
import { Frame } from "@components/frames/MainFrame";
import { issues } from "@utils/mock";

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
        {issues.map((item,i:number)=>(
            <SupportItem item={item} key={`notify-${i}`} />
        ))}
      </Frame>
    )
}

Support.Layout = PrivateLayout;

export default Support;



export const SupportItem = ({item, mini}:any) =>{

    const colorize = (status:string) =>{
        switch (status) {
            case 'answered':
                return {color:'green', message:'Cevap Verildi'}
            break;
            case 'pending':
                return {color:'red', message:'Beklemede'}
            break;
            case 'inspecting':
                return {color:'red', message:'İncelemede'}
            break;
            case 'solved':
                return {color:'gray', message:'Çözüldü'}
            break;
        }
    }
    
    
    const message = () => {
        const colorized:any = colorize(item.status)
        const color = colorized.color;
        const text = color && `text-${color}-700`;
        const fill = color && `fill-${color}-700`;
        const border = color && `border-${color}-700`;

        return (
            <div className='flex items-center mt-3'> 
                <div className={classNames(`border-[1.5px] w-4 h-4 flex items-center mr-1 justify-center rounded-full`, border)}>
                    <Warn height={8} className={classNames(
                        {'fill-green-600 border-green-600': color=='green'},
                        {'fill-gray-300 border-gray-300': color=='blue'},
                        {'fill-red-600 border-red-600': color=='red'},
                    )} />
                </div>
                <p className={classNames(
                    {'text-green-600': color=='green'},
                    {'text-gray-300': color=='blue'},
                    {'text-red-600': color=='red'},
                    'text-sm')}>
                    Durum: {colorized.message}</p> 
            </div> 
        )
    }


    return(
        <li className={classNames(
            'notify rounded-lg border-none flex justify-between items-end my-2 pl-4 bg-white',
            mini ? 'p-1': 'p-3',
            !item.err && item.read && 'gray',
        )}>
           <div className='flex items-start'>
              <div>
                    <div className={classNames(
                        'icon-circle',
                        item.read ? 'read' : 'unread',
                        item.err && 'err',
                    )}>
                       {item.status=='answered' && <Return height={20} /> }
                       {item.status=='solved' && <Bidirection height={20} />}
                       {item.status=='inspecting' && <Refresh height={20}/>}
                       {item.status=='pending' && <CheckLight height={20}/>}
                    </div>
                </div>
                <div className={classNames(
                    'ml-2',
                    !item.err && item.read && 'gray'
                )}>
                    <h3 className={classNames(
                        'action font-semibold text-base',
                        item.err ? 'text-[#e30a17]' : 'text-yg-blue'
                    )}
                    >{item.title}</h3>
                    <p className='message text-base'>{item.body}</p>
                    {message()}
                </div>
           </div>
            <div>
                <div className="button px-5 py-1 bg-yg-blue text-white rounded-md">Yanıtla</div>
            </div>
        </li>
    )
}
