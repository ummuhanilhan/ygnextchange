import React from 'react';
import PrivateLayout from "@layouts/PrivateLayout";
import { Frame } from "@components/frames/MainFrame";

export const Chat = () => {

    return (
        <div className=''>
            <Message me />
            <Message  />
            <Message me />
            <Message  />
        </div>
    )
};
export default Chat;
Chat.Layout = PrivateLayout;


export const Message = ({me}:any) => {  

    return (
        <Frame>
            <div><img src='' /></div>
            <div>
                <p>Müşteri Temsilcisi</p>
                <div className='border-lg p-2 bg-white w-[%60] h-auto'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dolore, numquam esse vitae nobis cupiditate? Esse asperiores provident magnam unde pariatur veniam, dolor nostrum reprehenderit soluta doloribus perspiciatis id officia?
                </div>
            </div>
        </Frame>
    )
};

