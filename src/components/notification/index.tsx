import { notificationList } from "@utils/mock";
import React from "react";
import { NotificaitonItem } from "./item";

export const NotificationList = () =>{

    return (
        <React.Fragment>
            {notificationList.map((item,i:number)=>(
                <NotificaitonItem item={item} key={`notify-${i}`} />
            ))}
        </React.Fragment>
    )
}

