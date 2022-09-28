import { BookmarkStar, Calendar, ChatLeftText, Envelope, Gear, GeoAlt, Heart, ListCheck, ListStars, MessagePlus, MinecartLoaded, Person, PersonCheck, PinMap, QuestionCircle, ShieldCheck, Smile, Truck, TruckFront } from "@yukgetir-icons";
import { Bell, Check, Doublecheck, Warn } from "@shared/icons";

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

export const OfferReverse = {
    '1': 'inshipment',
    '2': 'accepted',
    '3': 'pending',
}

export const pendingOut = [ 
    { id:1, title:'Beklemede olanlar', slug:'pending'},
    { id:2, title:'İlan Sahibi Tarafından Görülenler', slug:'viewed'},
    { id:3, title:'Kabul Edilmeyenler', slug:'rejected'},
    { id:4, title:'İlan Süresi Geçenler', slug:'outdated'},
    { id:5, title:'Tümünü Gör', slug:'all'},
];

export const acceptedOut = [
    { id:1, title:'Sevkiyata Hazır Olanlar', slug:'suitable'},
];

export const inShipmentOut = [
    { id:1, title:'Sevkiyatı  Devam Edenler', slug:'inshipment'},
    { id:2, title:'Teslimat Onayı Bekleyenler', slug:'pending'},
    { id:3, title:'Sevkiyatı Tamamlananlar', slug:'complated'},
    { id:4, title:'Tümünü Göster', slug:'all'},
];

export const pendingIn = [
    { id:1, title:'Teklif Beklenenler', slug:'pending'},
    { id:2, title:'Yanıt Bekleyenler', slug:'pending'},
    { id:3, title:'Tümünü Göster', slug:'all'},
];

export const acceptedIn = [
    { id:1, title:'Sevkiyata Hazır Olanlar', slug:'suitable'},
];

export const inShipmentIn = [
    //...
];

export const items = [
    {type:true, vat:false, progress:'active', corporate:false, price:'15.750', currency:'₺', tax:true, fav:true, view:125, time:'1-3 Gün içerisinde', 
    vehicle:'Tır 13.60 Açık', weight:'27 Ton', date:'22.07.2022 - 25.08.2022', load:'Ankara', unload:'Mersin', 
    distance:'500KM',  },
    {type:false, vat:true, progress:'active', corporate:true, price:'7.35', currency:'₺', tax:false, fav:false, view:76413, time:'1-3 Gün içerisinde', vehicle:'Tır 13.60 Açık', weight:'15 Ton', date:'22.07.2012 - 03.00.2022', load:'Adana', unload:'Ardahan', distance:'3420KM',  },
    {type:false, vat:true, progress:'pending', corporate:false, price:'342.875', currency:'₺', tax:true, fav:true, view:8135, time:'1-3 Gün içerisinde', vehicle:'Tır 13.60 Açık', weight:'2 Ton', date:'22.07.2022 - 25.08.2022', load:'Konya', unload:'Diyarakır', distance:'1500KM',  },
    {type:true, vat:false, progress:'complated', corporate:true, price:'19.255', currency:'₺', tax:false, fav:true, view:91413, time:'1-3 Gün içerisinde', vehicle:'Tır 13.60 Açık', weight:'5 Ton', date:'22.07.2012 - 03.00.2022', load:'Yozgat', unload:'Hatay', distance:'43420KM',  },
    {type:true, vat:false, progress:'pending', corporate:false, price:'657.35', currency:'₺', tax:true, fav:true, view:93415, time:'1 hafta içerisinde', vehicle:'Kamyon 25.60 Kapalı', weight:'15 KM', date:'22.07.2019 - 03.00.2019', load:'Hakkari', unload:'Hatay', distance:'40KM',  },
    {type:true, vat:false, progress:'accepted', corporate:false, price:'93.78', currency:'₺', tax:true, fav:true, view:18413, time:'1-3 Gün içerisinde', vehicle:'Tır 13.60 Açık', weight:'55 Ton', date:'22.07.2012 - 03.00.2022', load:'İstanbul', unload:'Çanakkale', distance:'53420KM',  },
    {type:false, vat:true, progress:'rejected', corporate:false, price:'342.875', currency:'₺', tax:true, fav:true, view:8135, time:'1-3 Gün içerisinde', vehicle:'Tır 13.60 Açık', weight:'2 Ton', date:'22.07.2022 - 25.08.2022', load:'Konya', unload:'Diyarakır', distance:'1500KM',  },
    {type:false, vat:true, progress:'outdated', corporate:false, price:'894.78', currency:'₺', tax:true, fav:false, view:349085, time:'1 ay içerisinde', vehicle:'Frigofirik 76.93 Açık', weight:'8 Ton', date:'22.07.2022 - 03.00.2022', load:'Yozgat', unload:'Konya', distance:'87420KM',  },
    {type:true, vat:false, progress:'outdated', corporate:true, price:'714.348', currency:'₺', tax:false, fav:true, view:92375, time:'1 hafta içerisinde', vehicle:'Kamyon 76.93 Açık', weight:'8342 KM', date:'22.07.2022 - 03.00.2022', load:'Konya', unload:'Yozgat', distance:'87420KM',  },
]

export const offers = [
    {type:true, vat:false, corporate:false, price:'15.750', currency:'₺', tax:true, fav:true, view:125, time:'1-3 Gün içerisinde', 
    vehicle:'Tır 13.60 Açık', weight:'27 Ton', date:'22.07.2022 - 25.08.2022', load:'Ankara', unload:'Mersin', 
    distance:'500KM',  },
]

export const tagItems = [
    {id:1, slug:'10truck-open', value:'10 Teker Kamyon Açık', label:''},
    {id:2, slug:'10truck-close', value:'10 Teker Kamyon Kapalı', label:''},
    {id:3, slug:'dorse1', value:'Canlı Hayvan Taşıma Dorsesi', label:''},
    {id:4, slug:'truck1', value:'Damperli Kamyon / Kırkayak', label:''},
    {id:5, slug:'18wheel1', value:'Isı Kontrollü Kamyon / Kırkayak', label:''},
    {id:6, slug:'trailertruck1', value:'Konteyner Dorsesi (Kılçık Dorsesi)', label:''},
    {id:7, slug:'1', value:'B Sınıfı', label:''},
    {id:8, slug:'2', value:'BE Sınıfı', label:''},
    {id:9, slug:'3', value:'C1 Sınıfı', label:''},
]

export const tagItems2 = [
    {id:7, slug:'1', value:'B Sınıfı', label:''},
    {id:8, slug:'2', value:'BE Sınıfı', label:''},
    {id:9, slug:'3', value:'C1 Sınıfı', label:''},
]

export const initial: any = {
    viewing: 0,
    rent: {
      vehicle: "trailer",
      type: "parsiel",
    },
    shipping: {},
    payload: {
      bargain: true,
      measurement: {
        measure: "kg",
      },
    },
    fee: {
      manual: true,
      price: {
        unit: 0.0,
      },
    },
};



export const item: any = {
    rent: {
      vehicle: 4,
      type: "parsiel",
      count: 0,
      features: ["615dbd950bad540e0897b82e"],
      options: ["61238c46d805fc5832de14e7"],
    },
    shipping: {
      time: "",
      range: "",
      load: {
        place: {
          geolocation: {},
          address: {},
          personal: "",
          contact: "",
        },
      },
      unload: {},
      distance: {},
      duration: {},
    },
    payload: {
      manual: "",
      type: "", // yük cinsi, türü
      define: "", // yük tanımı
      transport: "", // rampa, vinç, elle
      bargain: "", // pazarlık var mı?
      price: {
        unit: "",
        total: "",
      },
    },
    fee: {
      type: "peşin",
      currency: "try",
      tax: "kdv",
      measurement: {
        // ücret bilgileri
        quantity: "", // tonaj, miktar, nicelik
        amount: "", // sayısal
        weight: "", // ağırlık miktarı
        measure: "", // ağırlık türü
      },
      offerPrice: 1,
      paymethod: "credit",
      vat: true,
    },
  };
  
  export const defaultItem: any = {
    _id: {
      $oid: "62d778aee8ef39b2070f8ace",
    },
    user: {
      $oid: "62d684f20af2af81b3455a71",
      name: "Tester Test",
      phone: "055555555",
      email: "test@test.com",
    },
    privacy: "draft",
    viewing: 0,
    rent: {
      vehicle: "kirkayak",
      type: "parsiel",
      features: [
        "62d4d9d53e2b94b92fc2904f",
        "62d4d9d53e2b94b92fc29051",
        "62d4d9d53e2b94b92fc29053",
        "62d4d9d53e2b94b92fc29052",
        "62d4d9d53e2b94b92fc29050",
      ],
      options: [
        "62d4d9d53e2b94b92fc2906e",
        "62d4d9d53e2b94b92fc29070",
        "62d4d9d53e2b94b92fc29071",
      ],
    },
    shipping: {
      range: ["2022-07-05T21:00:00.000Z", null],
      time: "other",
      "time-custom": "93 sene sonra",
      load: {
        geolocation: {
          lat: 37.94205600840452,
          lng: 30.85136032104491,
        },
        place: {
          address: "Mahmatlar/Eğirdir/Isparta, Türkiye",
          street: "",
        },
        direction: {
          city: "isparta",
          country: {
            code: "TR",
            name: "Türkiye",
          },
        },
        contact: {
          name: "test",
          phone: "0123 132 13 12",
        },
      },
      unload: {
        geolocation: {
          lat: 38.47726887091417,
          lng: 35.663372039794915,
        },
        place: {
          address:
            "Akdere, Akdere Tekir Yayla Yolu, 38900 Tomarza/Kayseri, Türkiye",
          street: "No: Akdere Tekir Yayla Yolu",
        },
        direction: {
          city: "kayseri",
          country: {
            code: "TR",
            name: "Türkiye",
          },
        },
        contact: {
          name: "tester",
          phone: "0213 123 12 31",
        },
      },
      distance: {
        text: "557 KM",
        value: 557030,
      },
      duration: {
        text: "7 SAAT 6 DAKIKA",
        value: 25586,
      },
    },
    payload: {
      bargain: true,
      measurement: {
        measure: "ton",
        weight: "3500",
      },
      type: "yük cinsi",
      define: "yük tanımı",
      transport: "62d4d9d53e2b94b92fc29003",
    },
    fee: {
      manual: false,
      price: {
        unit: 555,
        tonnage: 35,
        total: 19425,
      },
      paymethod: "credit",
      currency: "usd",
      vat: "exclude",
    },
    publish: {
      start: {
        date: "2022-07-20T03:38:16.322Z",
        option: "now",
      },
      end: {
        date: "2022-07-27T03:38:16.322Z",
        option: "10day",
      },
    },
    updated_at: {
      $date: {
        $numberLong: "1658288302697",
      },
    },
    created_at: {
      $date: {
        $numberLong: "1658288302697",
      },
    },
    __v: 0,
  };
  
export const feature: any = {
    package: null,
    tonnageRange: null,
    freightDensity: 0,
    freightVolume: 0,
    loadingMeter: 0,
    porter: false,
    stow: false,
    height: 0,
    weight: 555,
    volume: 0,
    length: 0,
    width: 0,
    heightUnit: "M",
    weightUnit: "TON",
    volumeUnit: "M3",
    lengthUnit: "M",
    widthUnit: "M",
};

// header excluded pages
export const excludedPages = ["/cargoes/create", "/cargoes/edit"];

export const cities = [
    {name: 'İstanbul', code: 'IST'},
    {name: 'New York', code: 'NY'},
    {name: 'Rome', code: 'RM'},
    {name: 'London', code: 'LDN'},
    {name: 'Paris', code: 'PRS'}
];

export const notificationList = [
    {id:1, icon:<Check height={13} />, action:'Yeni Yük Eklendi', message:'Adana - Mersin konumu için yeni yük eklendi.', type:'info', read:false},
    {id:2, icon:<Doublecheck height={15} />, action:'Yeni Yük Eklendi', message:'Adana - Mersin konumu için yeni yük eklendi.', type:'info', read:true},
    {id:3, icon:<Warn height={20}/>, err:true, action:'Araç Sigorta Gününüz Yaklaştı', message:'06 YKGTR 34 plakalı aracınızın sigortası 16.09.2022 tarihinde bitecektir. Sigortanızı hızla bir şekilde yenilemek için tıklayınız.', type:'err', read:true},
]
