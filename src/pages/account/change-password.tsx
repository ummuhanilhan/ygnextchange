import PrivateLayout from "@layouts/PrivateLayout";
import { AccountLayout } from "@layouts/AccountLayouts";


export const ChangePassword = () => {

    return (
        <AccountLayout>
            <h1 className="text-2xl">ChangePassword</h1>
        </AccountLayout>
    )
}

ChangePassword.Layout = PrivateLayout;

export default ChangePassword;