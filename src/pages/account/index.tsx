import { AccountLayout } from "@layouts/AccountLayouts";
import PrivateLayout from "@layouts/PrivateLayout";


export const Account = () => {

    return (
        <AccountLayout>
            <h1 className="text-2xl">Account</h1>
        </AccountLayout>
    )
}


Account.Layout = PrivateLayout

export default Account;