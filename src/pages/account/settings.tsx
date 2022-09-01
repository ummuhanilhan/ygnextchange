import { AccountLayout } from "@layouts/AccountLayouts";
import PrivateLayout from "@layouts/PrivateLayout";


export const Settings = () => {

    return (
        <AccountLayout>
            <h1 className="text-2xl">Settings</h1>
        </AccountLayout>
    )
}

Settings.Layout = PrivateLayout;

export default Settings;