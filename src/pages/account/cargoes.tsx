import { AccountLayout } from "@layouts/AccountLayouts";
import PrivateLayout from "@layouts/PrivateLayout";


export const MyCargo = () => {

    return (
        <AccountLayout>
            <h1 className="text-2xl">MyCargo</h1>
        </AccountLayout>
    )
}

MyCargo.Layout = PrivateLayout;

export default MyCargo;