import { AccountLayout } from "@layouts/AccountLayouts";
import PrivateLayout from "@layouts/PrivateLayout";


export const Profile = () => {

    return (
        <AccountLayout>
            <h1 className="text-2xl">Profile</h1>
        </AccountLayout>
    )
}

Profile.Layout = PrivateLayout;

export default Profile;