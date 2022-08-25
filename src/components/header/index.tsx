import { Bell, Heart, PlusCircle, Share, Truck } from "@yukgetir-icons"

export const Header = () =>{

    return (
        <div id="header">
            <ul className="actions">
                <li><PlusCircle className="menu-icon" /> <p>Yüküm Var</p> </li>
                <li><Truck className="menu-icon" /> <p>Aracım Var</p> </li>
            </ul>
            <div className="profile">
                 <ul className="">
                    <li>
                        <Share className="menu-icon" />
                        <p>Davet Et</p>
                    </li>
                    
                        <Bell className="menu-icon" />
                    <li>
                        <p>Bildiriler</p>
                    </li>
                    
                    <li>
                        <Heart className="menu-icon" />
                        <p>Favorilerim</p>
                    </li>
                 </ul>
                <div className="profile">
                    <img src="/assets/default.png" alt="profile image" width={50} />
                </div>
            </div>
        </div>
    )
}