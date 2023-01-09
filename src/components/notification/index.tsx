import { notificationList } from "@utils/mock";
import React, {useEffect, useState} from "react";
import { NotificaitonItem, NotificationAlert} from "./item";
import { useQuery } from "@utils/helper";
export const NotificationList = () =>{

    const { data, isLoading, error }:any = useQuery(`notifications`, null, 'get')

    return (
        <React.Fragment>
            {data?.length < 1 &&
                <NotificationAlert /> 
            }
            <ul className='notifications border-none'>
                {data?.map((item:any,i:number)=>(
                    <NotificaitonItem item={item} key={`notify-${i}`} />
                ))}
            </ul>
        </React.Fragment>
    )
}

export const NotificationMini = () =>{

    const { data, isLoading, error }:any = useQuery(`notifications`, null, 'get')

    return (
        <React.Fragment>
            {data?.length > 1  ?
                <>
                    <div className="flex justify-between min-h-full w-full border-non ">
                        <div></div> 
                        <p className='text-yg-orange'>Tümünü Okundu İşaretle</p> 
                        </div>
                        <ul className='notifications-mini border-none'>
                            {data?.map((item:any,i:number)=>(
                                <NotificaitonItem mini item={item} key={`notify-${i}`} />
                            ))}
                        </ul>
                        <div className="flex justify-between w-full border-none">
                        <div></div> 
                        <a href="/notifications">
                            <p className='text-yg-gray'>Tümünü Gör</p> 
                        </a>
                    </div>
                </>
            :
            <div className="flex justify-between min-h-full w-full border-non ">
                <ul className='notifications-mini border-none'>
                    <NotificationAlert />
                </ul>
            </div>
            }
        </React.Fragment>
    )
}


