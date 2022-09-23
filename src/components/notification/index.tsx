import { notificationList } from "@utils/mock";
import React from "react";
import { NotificaitonItem } from "./item";

export const NotificationList = () =>{

    return (
        <React.Fragment>
            <ul className='notifications border-none'>
                {notificationList.map((item,i:number)=>(
                    <NotificaitonItem item={item} key={`notify-${i}`} />
                ))}
            </ul>
        </React.Fragment>
    )
}

export const NotificationMini = () =>{

    return (
        <React.Fragment>
            <div className="flex justify-between w-full border-none">
               <div></div> 
               <p className='text-yg-orange'>Tümünü Okundu İşaretle</p> 
            </div>
            <ul className='notifications-mini border-none'>
                {notificationList.map((item,i:number)=>(
                    <NotificaitonItem mini item={item} key={`notify-${i}`} />
                ))}
            </ul>
            <div className="flex justify-between w-full border-none">
               <div></div> 
               <a href="/notifications">
                   <p className='text-yg-gray'>Tümünü Gör</p> 
               </a>
            </div>
        </React.Fragment>
    )
}


