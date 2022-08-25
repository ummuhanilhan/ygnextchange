import { ChatLeftText, Envelope, ListCheck, ListStars, Person, PinMap, QuestionCircle, Smile, TruckFront } from "@shared/icons";


export const menuItems = [
    {
        title:'Güncel İlanlar',
        icon: <ListStars className="menu-icon" />,
        path:'/cargoes'
    },
    {
        title:'Hesabım',
        icon: <Person className="menu-icon" />,
        path:'/account'
    },
    {
        title:'İlanlarım',
        icon: <ListCheck className="menu-icon" />,
        path:'/account/cargoes'
    },
    {
        title:'Araçlarım',
        icon: <TruckFront className="menu-icon" />,
        path:'/account/vehicles'
    },
    {
        title:'Lokasyonlar',
        icon: <PinMap className="menu-icon" />,
        path:'/locations'
    },
    {
        title:'Destek Taleplerim',
        icon: <ChatLeftText className="menu-icon" />,
        path:'/account/support'
    },
    {
        title:'Sıkça Sorulan Sorular',
        icon: <QuestionCircle className="menu-icon" />,
        path:'/faq'
    },
    {
        title:'Bize Ulaşın',
        icon: <Envelope className="menu-icon" />,
        path:'/contact'
    },
    {
        title:'Geri Bildirim',
        icon: <Smile className="menu-icon" />,
        path:'/feedback'
    },
    
]