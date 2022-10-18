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
        path:'/cargoes'
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
    'shipping' = 2,
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

export const OfferReverse:any = {
    '1': 'inshipment',
    '2': 'accepted',
    '3': 'pending',
}


export const inShipmentIn = [
  { id:1, title:'Sevkiyatı Devam Edenler', slug:'inshipment'},
];

export const acceptedIn = [
  { id:1, title:'Sevkiyata Hazır Olanlar', slug:'suitable'},
];

export const pendingIn = [
  { id:1, title:'Teklif Beklenenler', slug:'pending'},
  { id:2, title:'Yanıt Bekleyenler', slug:'pending'},
  { id:3, title:'Tümünü Göster', slug:'all'},
];



export const inShipmentOut = [
  { id:1, title:'Sevkiyatı Devam Edenler', slug:'inshipment'},
  { id:2, title:'Teslimat Onayı Bekleyenler', slug:'pending'},
  { id:3, title:'Sevkiyatı Tamamlananlar', slug:'complated'},
  { id:4, title:'Tümünü Göster', slug:'all'},
];

export const acceptedOut = [
    { id:1, title:'Sevkiyata Hazır Olanlar', slug:'suitable'},
];

export const pendingOut = [ 
  { id:1, title:'Teklif Beklenenler', slug:'pending'},
  { id:2, title:'Yanıt Bekleyenler', slug:'pending'},
  { id:3, title:'Tümünü Göster', slug:'all'},
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
      vehicle: "truck",
      type: "parsiel",
      features: [
        "62b14d9d7810ae9b35ea4b52",
        "62b14d9d7810ae9b35ea4b54",
        "62b14d9d7810ae9b35ea4b5a",
        "62b14d9d7810ae9b35ea4b5b",
        "62b14d9d7810ae9b35ea4b5c",
        "62b14d9d7810ae9b35ea4b5d",
      ],
      options: [
        "62b14d9d7810ae9b35ea4b72",
        "62b14d9d7810ae9b35ea4b73",
        "62b14d9d7810ae9b35ea4b74",
        "62b14d9d7810ae9b35ea4b75",
      ],
    },
    shipping: {
      range:   [new Date("10-01-2021"), new Date("10-05-2021")],
      time: "62b14d9d7810ae9b35ea4b27", // other
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
      type: "yük cinsi",
      definition: "yük tanımı",
      transport: {
        load:'62b14d9d7810ae9b35ea4b09',
        unload:'62b14d9d7810ae9b35ea4b0d',
      },
      package:null,
      stow:false,
      porter:false,
      weight:{
        size:'325.968',
        unit:'ton',
      },
      volume:{
        size:'77.23',
        unit:'cm', // ³
      },
      dimensions:{
        length:'259.735',
        width:'921,33',
        height:'77,550',
        unit:'kg',
      },
      tonnage:{
          range:'',
      },
      freight:{
        density:0,
        volume:0,
      },
      load:{
        meter:'',
      }
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
      vat: 'exclude',
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
  
  // shipping
export const direction: any = {
  direction: {
    title: "varış",
    city: "varış",
    address: "varış",
    description: "kalkış",
    buildingInfo: "",
    country: {
      code: "TR",
      name: "Türkiye",
    },
    district: "Yeşiloba mah",
    geolocation: {
      lat: 36.9835365,
      lng: 35.2963123,
    },
    postalCode: "01000",
    province: "Adana",
    route: "Turhan Cemal Beriker Bulvarı",
    town: "Seyhan",
    contact: {
      name: "Tester test",
      phone: "5055555555",
    },
    building: "",
  },
};


export const addresses = [
  {
    no:1,
    geolocation: {
        lat: 39.3836044901308,
        lng: 31.142605304718007
      },
      place: {
        address: "İsimsiz Yol, 26700 Çifteler/Eskişehir, Türkiye",
        street: "No: İsimsiz Yol"
      },
      direction: {
        city: "Eskişehir",
        country: {
          code: "TR",
          name: "Türkiye"
        }
      },
      contact: {
        phone: "0234 234 32 43",
        name: "tester"
      }
    },
   {
    no:2,
      geolocation: {
        lat: 38.149701975775685,
        lng: 38.10937499999999
      },
      place: {
        address: "Eskiköy, İsimsiz Yol, 44900 Doğanşehir/Malatya, Türkiye",
        street: "No: İsimsiz Yol"
      },
      direction: {
        city: "Malatya",
        country: {
          code: "TR",
          name: "Türkiye"
        }
      },
      contact: {
        name: "tester",
        phone: "0543 535 43 54"
      }
    }
]

export const feature: any = {
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



export const faqList = [
  {
    title:'Neden Üye Olmalıyım?', 
    body:`Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.`
  },
  {
    title:'Neden Üye Olmalıyım?', 
    body:`Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.`
  },
  {
    title:'Neden Üye Olmalıyım?', 
    body:`Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.`
  },
  {
    title:'Neden Üye Olmalıyım?', 
    body:`Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.`
  },
  {
    title:'Neden Üye Olmalıyım?', 
    body:`Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.`
  },
]

export const issues = [
  {title:'İlan Ekleme Sorunu', body:'Merhaba, yeni ilan eklerken sorun yaşıyorum', status:'pending' },
  {title:'İlan Ekleme Sorunu', body:'Merhaba, yeni ilan eklerken sorun yaşıyorum', status:'answered' },
  {title:'İlan Ekleme Sorunu', body:'Merhaba, yeni ilan eklerken sorun yaşıyorum', status:'inspecting' },
  {title:'İlan Ekleme Sorunu', body:'Merhaba, yeni ilan eklerken sorun yaşıyorum', status:'solved' },
];

export const addressList:any = [
 {
    geolocation:{
        lat:40.788855,
        lng:30.40595399999999,
    },
    contact:{
        name:'Tester Test',
        phone:'0505 555 55 55',
        type:'office',
        country:'TR',
        code:'90',
        verify:false,
    },
    place:{
        title:'',
        description:'',
        address:'',
        street:'Adapazarı, Karaosman, 54100 Adapazarı/Sakarya, Türkiye',
    },
    direction:{
        city:'sakarya',
        country:{
            name:'',
            code:'',
        },
        zip:'',
        district:'',
        province:'',
        town:'',
    },
 },
 {
  geolocation:{
      lat:40.788855,
      lng:30.40595399999999,
  },
  contact:{
      name:'Tester Test',
      phone:'0505 555 55 55',
      type:'office',
      country:'TR',
      code:'90',
      verify:false,
  },
  place:{
      title:'',
      description:'',
      address:'',
      street:'Karaduvar, Mersin Limanı, 33020 - Merkez...',
  },
  direction:{
      city:'sakarya',
      country:{
          name:'',
          code:'',
          zip:'',
          district:'',
          province:'',
          town:'',
      },
  },
}

 
 
]