import { Bell, Heart, PlusCircle, Share, Truck } from "@yukgetir-icons"
import { useRouter } from "next/router"

export const Header = () =>{
    const router = useRouter()
    return (
        <div id="header">
            <ul className="actions">
                <li onClick={()=>router.push('/cargo/create', undefined, { shallow: true })}><PlusCircle className="menu-icon" /> <p>Yüküm Var</p> </li>
                <li onClick={()=>router.push('/account/vehicle/create', undefined, { shallow: true })}><Truck className="menu-icon" /> <p>Aracım Var</p> </li>
            </ul>
            <div className="profile">
                 <ul className="">
                    <li>
                        <Share className="menu-icon" />
                        <p>Davet Et</p>
                    </li>
                    <li onClick={()=>router.push('/notifications', undefined, { shallow: true })}>
                        <Bell className="menu-icon" />
                        <p>Bildiriler</p>
                    </li>
                    <li onClick={()=>router.push('/account/favorites', undefined, { shallow: true })}>
                        <Heart className="menu-icon orange" />
                        <p>Favorilerim</p>
                    </li>
                 </ul>
                <div className="profile-dropdown">
                    <img src="/assets/default.png" alt="profile image" width={50} />
                </div>
            </div>
        </div>
    )
}