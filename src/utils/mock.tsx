import { BookmarkStar, Calendar, ChatLeftText, Envelope, Gear, GeoAlt, Heart, ListCheck, ListStars, MessagePlus, MinecartLoaded, Person, PersonCheck, PinMap, QuestionCircle, ShieldCheck, Smile, Truck, TruckFront } from "@yukgetir-icons";

export const menuItems = [
    {
        title:'Güncel İlanlar',
        icon: <ListStars className="menu-icon" />,
        path:'/cargo'
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
        path:'/vehicles'
    },
    {
        title:'Gelen Tekliflerim',
        icon: <BookmarkStar className="menu-icon" />,
        path:'/offers/ingoing'
    },
    {
        title:'Giden Tekliflerim',
        icon: <MessagePlus className="menu-icon" />,
        path:'/offers/outgoing'
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
 
export const primeOptions = {
  accept: "Evet",
  reject: "Hayır",
  choose: "Seç",
  upload: "Yükle",
  cancel: "Vazgeç",
  dayNames: [
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
    "Pazar",
  ],
  dayNamesShort: ["Pzt", "Sal", "Çrş", "Prş", "Cuma", "Cmt", "Pzr"],
  dayNamesMin: ["Pzt", "Sal", "Çrş", "Prş", "Cuma", "Cmt", "Pzr"],
  monthNames: [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık",
  ],
  monthNamesShort: [
    "Ock",
    "Şub",
    "Mar",
    "Nis",
    "May",
    "Haz",
    "Tem",
    "Ağu",
    "Eyl",
    "Ekm",
    "Kas",
    "Ark",
  ],
  today: "Bugün",
  clear: "Temizle",
  weekHeader: "Hf",
  firstDayOfWeek: 0,
  dateFormat: "dd.mm.yy",
  weak: "Zayıf",
  medium: "Orta",
  strong: "Güçlü",
  passwordPrompt: "Şifrenizi girin",
};

export const profileTabMenu = [
    {id:1, title:'Profilim', icon: <PersonCheck className="menu-icon" />, path:'/account' },  
    {id:2, title:'Şifremi Değiştir', icon: <ShieldCheck className="menu-icon" />, path:'/account/change-password' },
    {id:3, title:'Adres Listem', icon: <GeoAlt className="menu-icon" />, path:'/account/address' },
    {id:4, title:'Favorilerim', icon: <Heart className="menu-icon" />, path:'/account/favorites' },
    {id:5, title:'Ayarlar', icon: <Gear className="menu-icon" />, path:'/account/settings' },
]

export const cargoCreateTabMenu = [
    {id:1, title:'Araç Özellikleri', icon: <Truck className="menu-icon" />, slug:'rent' },  
    {id:2, title:'Tarih ve Konum', icon: <Calendar className="menu-icon" />, slug:'datetime' },
    {id:3, title:'Yük Özellikleri', icon: <MinecartLoaded className="menu-icon" />, slug:'payload' },
]

export const cargoTabMenu = [
    {id:1, title:'Aktif Olan İlanlarım', slug:'active' },
    {id:2, title:'Süresi Geçen İlanlarım', slug:'outdated' },
]

export const vehicleTabMenu = [
    {id:1, title:'Aktif Olan Araçlarım', slug:'active' },  
    {id:2, title:'İşlem Gereken Araçlarım', slug:'pending' },  
]

export const offerTabMenu = [
    {id:1, title:'Sevkiyatta Olanlar', slug:'inshipment', count:3 },  
    {id:2, title:'Kabul Edilenler', slug:'accepted', count:7 },  
    {id:3, title:'Beklemede Olanlar', slug:'pending', count:9 },  
]
export enum CargoCreateRoute {
    'rent' = 1,
    'datetime' = 2,
    'payload' = 3,
    Rent= 1,
    Datetime = 2,
    Payload = 3,
}

export enum CargoRoute {
    'active' = 1,
    'outdated' = 2,
    Active = 1,
    Outdated = 2,
}

export enum AccountRoute {
    'profile' = 1,
    'change-password' = 2,
    'address' = 3,
    'favorites' = 4,
    'settings' = 5,
    Profile = 1,
    ChangePassword = 2,
    Address = 3,
    Favorites = 4,
    Settings = 5,
}

export enum VehicleRoute {
    'active' = 1,
    'passive' = 2,
    Active = 1,
    Passive = 1,
}

export enum OfferRoute {
    'inshipment' = 1,
    'accepted' = 2,
    'pending' = 3,
    InShipment = 1,
    Accepted = 2,
    Pending = 3,
}