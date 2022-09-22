import { Heading } from "@components/cargo/heading";
import { IconFrame } from "@components/frames/IconFrame";
import { Frame } from "@components/frames/MainFrame";
import PrivateLayout from "@layouts/PrivateLayout";
import { Bell, Check, Doublecheck, Warn } from "@shared/icons";
import classNames from "classnames";


export const Notifications = () => {

    return (
       <Frame>
            <IconFrame icon={<Bell className="menu-icon" />} title="Bildirimler" />
            <Heading />
            {notificationList.map((item,i:number)=>(
                <NotificaitonItem item={item} key={`notify-${i}`} />
            ))}
       </Frame>
    )
}

Notifications.Layout = PrivateLayout;

export default Notifications;

export const NotificaitonItem = ({item}:any) =>{

    return(
        <li className='notify rounded-lg flex items-center my-2 p-3 pl-4 bg-white'>
            {item.icon}
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
        </li>
    )
}

export const notificationList = [
    {id:1, icon:<Check width={21} className='icon-circle unread' />, action:'Yeni Yük Eklendi', message:'Adana - Mersin konumu için yeni yük eklendi.', type:'info', read:false},
    {id:2, icon:<Doublecheck width={21} className='icon-circle read' />, action:'Yeni Yük Eklendi', message:'Adana - Mersin konumu için yeni yük eklendi.', type:'info', read:true},
    {id:3, icon:<Warn width={21} className='icon-circle err' />, err:true, action:'Araç Sigorta Gününüz Yaklaştı', message:'06 YKGTR 34 plakalı aracınızın sigortası 16.09.2022 tarihinde bitecektir. Sigortanızı hızla bir şekilde yenilemek için tıklayınız.', type:'err', read:true},
]