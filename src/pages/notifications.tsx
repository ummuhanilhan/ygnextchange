import { Heading } from "@components/cargo/heading";
import { IconFrame } from "@components/frames/IconFrame";
import { Frame } from "@components/frames/MainFrame";
import { NotificationList } from "@components/notification";
import PrivateLayout from "@layouts/PrivateLayout";
import { Bell  } from "@shared/icons";
import classNames from "classnames";
import React from "react";


export const Notifications = () => {

    return (
       <Frame>
            <IconFrame icon={<Bell className="menu-icon" />} title="Bildirimler" />
            <Heading />
            <NotificationList />
       </Frame>
    )
}

Notifications.Layout = PrivateLayout;

export default Notifications;

