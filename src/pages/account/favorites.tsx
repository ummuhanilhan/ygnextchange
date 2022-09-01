import { AccountLayout } from "@layouts/AccountLayouts";
import PrivateLayout from "@layouts/PrivateLayout";


export const Favorites = () => {

    return (
        <AccountLayout>
            <h1 className="text-2xl">Favorites</h1>
        </AccountLayout>
    )
}

Favorites.Layout = PrivateLayout;

export default Favorites;