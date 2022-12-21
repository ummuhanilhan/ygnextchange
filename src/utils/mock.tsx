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
        path:'/support'
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

export const guestItems = [
    {
        title:'Güncel İlanlar',
        icon: <ListStars className="menu-icon" />,
        path:'/cargo'
    },
    {
        title:'Lokasyonlar',
        icon: <PinMap className="menu-icon" />,
        path:'/locations'
    },
    {
        title:'Destek Taleplerim',
        icon: <ChatLeftText className="menu-icon" />,
        path:'/support'
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
    'pending_approval' = 4,
    'pending_response' = 5,
    'pending_offer' = 6,
    'outdated' = 7,
    'all' = 8,
    'seen' = 9,
    'ready' = 10,
    'complated' = 11,
    InShipment = 1,
    Accepted = 2,
    Pending = 3,
    PendingApproval = 4,
    PendingResponse = 5,
    PendingOffer = 6,
    Outdated = 7,
    All = 8,
    Seen = 9,
    Ready = 10,
    Complated = 11,
}

export const OfferReverse:any = {
    '1': 'inshipment',
    '2': 'accepted',
    '3': 'pending',
    '4': 'pending_approval',
    '5': 'pending_response',
    '6': 'pending_offer',
    '7': 'outdated',
    '8': 'all',
    '9': 'seen',
    '10': 'ready',
    '11': 'complated',
}

export const inShipmentIn = [
  { id:1, title:'Sevkiyatı Devam Edenler', slug:'inshipment'},
];

export const acceptedIn = [
  { id:1, title:'Sevkiyata Hazır Olanlar', slug:'ready'},
];

export const pendingIn = [
  { id:1, title:'Teklif Beklenenler', slug:'pending_offer'},
  { id:2, title:'Yanıt Bekleyenler', slug:'pending_response'},
  { id:3, title:'Tümünü Göster', slug:'all'},
];



export const inShipmentOut = [ // sevkiyatta (giden teklifler)
  { id:1, title:'Sevkiyatı Devam Edenler', slug:'inshipment'},
  { id:2, title:'Teslimat Onayı Bekleyenler', slug:'pending_approval'},
  { id:3, title:'Sevkiyatı Tamamlananlar', slug:'complated'},
  { id:4, title:'Tümünü Göster', slug:'all'},
];

export const acceptedOut = [ // kabul edilenler (giden teklifler)
    { id:1, title:'Sevkiyata Hazır Olanlar', slug:'ready'},
];

export const pendingOut = [ // beklemede (giden teklifler)
  { id:1, title:'Beklemede Olanlar', slug:'pending'},
  { id:2, title:'İlan Sahibi Tarafından Görülenler', slug:'seen'},
  { id:3, title:'Kabul Edilmeyenler', slug:'rejected'},
  { id:4, title:'İlan Süresi Geçenler', slug:'outdated'},
  //{ id:1, title:'Teklif Beklenenler', slug:'pending_offer'},
  //{ id:2, title:'Yanıt Bekleyenler', slug:'pending_response'},
  //{ id:3, title:'Tümünü Göster', slug:'all'},
];

export const ranges = [
 {id:1, title:5 },
 {id:2, title:15 },
 {id:3, title:25 },
 {id:4, title:50 }
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
  rent: {
    vehicle: "truck",
    type: "parsiel",
  },
  shipping: {},
  payload: {
    bargain: true,
    weight:{
      unit:'kg',
    },
    volume:{
      unit:'m', // ³
    },
    dimensions:{
      unit:'kg',
    },
  },
  fee: {
    manual: true,
    price: {
      amount: true,
      tonnage: null,
      total: null,
      unit: null,
    },
  },
  publish:{}
};


export const item: any = {
    rent: {
      vehicle: "truck",
      type: "parsiel",
      count: 0,
      features: ["615dbd950 bad540e0897b82e"],
      options: ["61238c46d805fc5832de14e7"],
    },
    shipping: {
      time: "",
      range: "",
      load: {
     
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
      weight:{
        unit:'kg',
      },
      volume:{
        unit:'m', // ³
      },
      dimensions:{
        unit:'kg',
      },
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
      amount: true,
      price: {
        unit: 0,
      },
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
      vehicle: "truck", // 18wheeler
      type: "parsiel",
      features: [
        "6383e3f1dd37724c6c7b7850",
        "6383e3f1dd37724c6c7b7851",
        "6383e3f1dd37724c6c7b7853",
        "6383e3f1dd37724c6c7b7844",
        "6383e3f1dd37724c6c7b7842",
        "6383e3f1dd37724c6c7b7835",
        "6383e3f1dd37724c6c7b7836",
        "6383e3f1dd37724c6c7b7838",
        "6383e3f1dd37724c6c7b7839"
      ],
      options: [
        "6383e3f1dd37724c6c7b7855",
        "6383e3f1dd37724c6c7b7856",
        "6383e3f1dd37724c6c7b7858",
        "6383e3f1dd37724c6c7b7859",
        "6383e3f1dd37724c6c7b785a",
        "6383e3f1dd37724c6c7b785b",
        "6383e3f1dd37724c6c7b785c",
        "6383e3f1dd37724c6c7b785d",
        "6383e3f1dd37724c6c7b785e",
        "6383e3f1dd37724c6c7b785f",
        "6383e3f1dd37724c6c7b7860",
        "6383e3f1dd37724c6c7b7861",
        "6383e3f1dd37724c6c7b7862",
        "6383e3f1dd37724c6c7b7863"
      ],
    },
    shipping: {
      range:   [new Date("2021-09-30"), new Date("2021-10-26")],
      time: "6383e3f1dd37724c6c7b7809", // other
      "time-custom": "93 sene sonra",
      load: {
        geolocation: {
          lat: 37.6120803427278,
          lng: 34.979988098144524,
        },
        place: {
          address: "Aşçıbekirli, İsimsiz Yol, 01470 Pozantı/Adana, Türkiye",
          street: "",
        },
        direction: {
          city: "isparta",
          "district": "Pozantı",
          country: {
            code: "TR",
            name: "Türkiye",
          },
        },
        contact: {
          name: "test",
          phone: "0123 132 13 12",
          "email": "test@test.com",
          "verify": false
        },
        "title": "adres başlığı test",
        "directions": "açık adres tarif"
      },
      unload: {
        geolocation: {
          lat: 38.47726887091417,
          lng: 35.663372039794915,
        },
        place: {
          address:"Akdere, Akdere Tekir Yayla Yolu, 38900 Tomarza/Kayseri, Türkiye",
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
          "verify": false
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
        load:'6383e3f1dd37724c6c7b77ee',
        unload:'6383e3f1dd37724c6c7b77ed',
      },
      package:'',
      stow:false,
      porter:false,
      weight:{
        "size": "555.968",
        "unit": "kg"
      },
      volume:{
        size:"177.23",
        unit:'m', // ³
      },
      dimensions:{
        "length": "9954.735",
        "width": "24543",
        "height": "34522",
        "unit": "kg"
      },
      tonnage:{
          range:'',
      },
      freight:{
        density:0,
        volume:0,
      },
      
    },
    fee: {
      manual: false,
      price: {
        "amount": true,
        "unit": 9980,
        "tonnage": 77,
        "total": 768537
      },
      "paymethod": "onunload", // credit
      "currency": "try",
      "vat": "include",
      "bargain": true
    },
    publish: {
      start: {
        date: "2022-07-14T21:00:00.000Z",
        option: "62b14d9d7810ae9b35ea4b09", // now
      },
      end: {
        date: "22022-07-27T21:00:00.000Z",
        option: "62b14d9d7810ae9b35ea4b0a", //10day
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
        _id:'1',
        title:'Ev adresi',
        directions:'Açık Adres',
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
            street:'',
            address:'Adapazarı, Karaosman, 54100 Adapazarı/Sakarya, Türkiye',
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
    _id:'2',
    title:'İşyeri',
    directions:'Ana caddenin hemen üzeri',
    geolocation:{
        lat:40.788855,
        lng:30.40595399999999,
    },
    contact:{
        name:'Pentester Test',
        phone:5055555555,
        email:"test@test.com",
        type:'office',
        country:'TR',
        code:'90',
        verify:false,
    },
    place:{
        title:'',
        description:'',
        street:'',
        address:'Karaduvar, Mersin Limanı, 33020 - Merkez...',
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
    },
    {
        "_id":"3",
        "title": "test",
        "place": {
            "address": "D260, 40300 Çiftlikmehmetağa/Akpınar/Kırşehir, Türkiye"
        },
        "direction": {
            "city": "Kırşehir",
            "district": "Akpınar"
        },
        "directions": "test",
        "contact": {
            "name": "test",
            "phone": "324234",
            "email": "tester@test.com",
            "verify": false
        },
        "geolocation": {
            "lat": 39.34547354914127,
            "lng": 33.966499328613274
        }
    },
]


export const dummyItem = {
  "_id": "63729a47a988970cf6093b56",
  "user": {
      "_id": "6372896dc8297c87a97f91c3",
      "name": "Tester Tester",
      "slug": "tester-tester"
  },
  "privacy": "drafted",
  "progress": "pending",
  "viewing": 0,
  "rent": {
      "vehicle": "romork",
      "type": "parsiel",
      "features": [
          "62b870456230c566be927ed2",
          "62b870456230c566be927ed4",
          "62b870456230c566be927ef0",
          "62b870456230c566be927eef",
          "62b870456230c566be927eee",
          "62b870456230c566be927eed",
          "62b870456230c566be927eec"
      ],
      "options": [
          "62b870456230c566be927ef4",
          "62b870456230c566be927ef5",
          "62b870456230c566be927efe",
          "62b870456230c566be927eff",
          "62b870456230c566be927efc",
          "62b870456230c566be927efb",
          "62b870456230c566be927efa"
      ]
  },
  "shipping": {
      "range": [
          "2022-07-14T21:00:00.000Z",
          "2022-07-28T21:00:00.000Z"
      ],
      "time": "test deneme",
      "unload": {
          "geolocation": {
              "lat": 38.218786363703394,
              "lng": 38.35107421874999
          },
          "place": {
              "address": "Üçgöze, 44900 Yeşilyurt/Malatya, Türkiye",
              "street": "No: İsimli Yol"
          },
          "direction": {
              "city": "malatya",
              "country": {
                  "code": "TR",
                  "name": "Türkiye"
              }
          },
          "contact": {
              "name": "test",
              "phone": "0234 234 23 42",
              "type": "home",
              "verify": false
          }
      },
      "load": {
          "geolocation": {
              "lat": "40.34447450002158",
              "lng": "34.30810546874999"
          },
          "place": {
              "address": "İsimsiz Yol, 19302 Hacıosman/Sungurlu/Çorum, Türkiye",
              "street": "No: İsimsiz Yol",
              "title": "tester",
              "description": "test"
          },
          "direction": {
              "city": "çorum",
              "country": {
                  "code": "TR",
                  "name": "Türkiye"
              }
          },
          "contact": {
              "name": "test",
              "phone": "0234 234 23 42",
              "type": "home",
              "verify": false
          }
      },
      "time-custom": "test deneme",
      "distance": {
          "text": "594 KM",
          "value": 593777
      },
      "duration": {
          "text": "7 SAAT 33 DAKIKA",
          "value": 27181
      }
  },
  "payload": {
      "bargain": true,
      "weight": {
          "unit": "kg",
          "size": "152342"
      },
      "type": "yük cinsi",
      "definition": "yük tanımı",
      "transport": {
          "load": "62b870456230c566be927f17",
          "unload": "62b870456230c566be927f17"
      }
  },
  "fee": {
      "manual": true,
      "price": {
          "unit": 0,
          "total": 23423423
      },
      "paymethod": "onload",
      "currency": "try",
      "vat": "include"
  },
  "publish": {
      "start": {
          "date": "2022-07-01T12:40:24.677Z",
          "option": "date"
      },
      "end": {
          "date": "2022-07-29T12:40:28.860Z",
          "option": "1month"
      }
  },
  "updated_at": "2022-11-14T19:43:03.855Z",
  "created_at": "2022-11-14T19:43:03.855Z",
  "__v": 0,
  "id": "63729a47a988970cf6093b56"
}






export const dummyDefinitions= {
  "load": [
      {
          "_id": "63728b818628c49d822e8c08",
          "type": "load",
          "name": "Banttan"
      },
      {
          "_id": "63728b818628c49d822e8c09",
          "type": "load",
          "name": "Diğer"
      },
      {
          "_id": "63728b818628c49d822e8c0a",
          "type": "load",
          "name": "El İle"
      },
      {
          "_id": "63728b818628c49d822e8c0b",
          "type": "load",
          "name": "Forklift İle Rampadan"
      },
      {
          "_id": "63728b818628c49d822e8c0c",
          "type": "load",
          "name": "Forklift İle Yandan"
      },
      {
          "_id": "63728b818628c49d822e8c0d",
          "type": "load",
          "name": "Kepçe İle"
      },
      {
          "_id": "63728b818628c49d822e8c0e",
          "type": "load",
          "name": "Transpalet İle"
      },
      {
          "_id": "63728b818628c49d822e8c0f",
          "type": "load",
          "name": "Vinç İle"
      }
  ],
  "vehicle": [
      {
          "_id": "63728b818628c49d822e8c10",
          "type": "vehicle",
          "name": "Kamyon",
          "slug": "kamyon"
      },
      {
          "_id": "63728b818628c49d822e8c11",
          "type": "vehicle",
          "name": "Kırkayak",
          "slug": "kirkayak"
      },
      {
          "_id": "63728b818628c49d822e8c12",
          "type": "vehicle",
          "name": "Tır",
          "slug": "tir"
      },
      {
          "_id": "63728b818628c49d822e8c13",
          "type": "vehicle",
          "name": "Dorse",
          "slug": "dorse"
      },
      {
          "_id": "63728b818628c49d822e8c14",
          "type": "vehicle",
          "name": "Römork",
          "slug": "romork"
      },
      {
          "_id": "63728b818628c49d822e8c15",
          "type": "vehicle",
          "name": "Frigofirik",
          "slug": "frigofirik"
      }
  ],
  "rent": [
      {
          "_id": "63728b818628c49d822e8c16",
          "type": "rent",
          "name": "Komple",
          "slug": "full"
      },
      {
          "_id": "63728b818628c49d822e8c17",
          "type": "rent",
          "name": "Parsiyel",
          "slug": "parsiel"
      }
  ],
  "importance": [
      {
          "_id": "63728b818628c49d822e8c18",
          "type": "importance",
          "name": "Farketmez"
      },
      {
          "_id": "63728b818628c49d822e8c19",
          "type": "importance",
          "name": "Farkeder"
      }
  ],
  "weight": [
      {
          "_id": "63728b818628c49d822e8c1a",
          "type": "weight",
          "name": "KG",
          "slug": "kg"
      },
      {
          "_id": "63728b818628c49d822e8c1b",
          "type": "weight",
          "name": "TON",
          "slug": "ton"
      }
  ],
  "meter": [
      {
          "_id": "63728b818628c49d822e8c1c",
          "type": "meter",
          "name": "M",
          "slug": "m"
      },
      {
          "_id": "63728b818628c49d822e8c1d",
          "type": "meter",
          "name": "CM",
          "slug": "cm"
      }
  ],
  "currency": [
      {
          "_id": "63728b818628c49d822e8c1e",
          "type": "currency",
          "name": "TRY",
          "slug": "try"
      },
      {
          "_id": "63728b818628c49d822e8c1f",
          "type": "currency",
          "name": "USD (US Dollar)",
          "slug": "usd"
      },
      {
          "_id": "63728b818628c49d822e8c20",
          "type": "currency",
          "name": "EUR (Euro)",
          "slug": "eur"
      }
  ],
  "paymethod": [
      {
          "_id": "63728b818628c49d822e8c21",
          "type": "paymethod",
          "name": "Peşin",
          "slug": "cash"
      },
      {
          "_id": "63728b818628c49d822e8c22",
          "type": "paymethod",
          "name": "Vadeli",
          "slug": "credit"
      },
      {
          "_id": "63728b818628c49d822e8c23",
          "type": "paymethod",
          "name": "Yükleme Üzerine Nakit/Havale",
          "slug": "onload"
      },
      {
          "_id": "63728b818628c49d822e8c24",
          "type": "paymethod",
          "name": "Boşaltma Üzerine Nakit/Havale",
          "slug": "unload"
      },
      {
          "_id": "63728b818628c49d822e8c25",
          "type": "paymethod",
          "name": "Telefon İle Görüşülecek",
          "slug": "phone"
      }
  ],
  "vat": [
      {
          "_id": "63728b818628c49d822e8c26",
          "type": "vat",
          "name": "KDV Dahil",
          "slug": "include"
      },
      {
          "_id": "63728b818628c49d822e8c27",
          "type": "vat",
          "name": "KDV Hariç",
          "slug": "exclude"
      }
  ],
  "price": [
      {
          "_id": "63728b818628c49d822e8c28",
          "type": "price",
          "name": "Açık Fiyat",
          "slug": "public"
      },
      {
          "_id": "63728b818628c49d822e8c29",
          "type": "price",
          "name": "Sabit Fiyat",
          "slug": "static"
      }
  ],
  "unload": [
      {
          "_id": "63728b818628c49d822e8c2a",
          "type": "unload",
          "name": "1 Gün",
          "slug": "1day"
      },
      {
          "_id": "63728b818628c49d822e8c2b",
          "type": "unload",
          "name": "1-3 Gün İçerisinde",
          "slug": "3day"
      },
      {
          "_id": "63728b818628c49d822e8c2c",
          "type": "unload",
          "name": "Diğer",
          "slug": "other"
      }
  ],
  "range": [
      {
          "_id": "63728b818628c49d822e8c2d",
          "type": "range",
          "name": "1 KM",
          "slug": "1000"
      },
      {
          "_id": "63728b818628c49d822e8c2e",
          "type": "range",
          "name": "5 KM",
          "slug": "5000"
      },
      {
          "_id": "63728b818628c49d822e8c2f",
          "type": "range",
          "name": "10 KM",
          "slug": "10000"
      },
      {
          "_id": "63728b818628c49d822e8c30",
          "type": "range",
          "name": "15 KM",
          "slug": "15000"
      },
      {
          "_id": "63728b818628c49d822e8c31",
          "type": "range",
          "name": "25 KM",
          "slug": "25000"
      },
      {
          "_id": "63728b818628c49d822e8c32",
          "type": "range",
          "name": "50 KM",
          "slug": "50000"
      }
  ],
  "package": [
      {
          "_id": "63728b818628c49d822e8c33",
          "type": "package",
          "name": "Paketli"
      },
      {
          "_id": "63728b818628c49d822e8c34",
          "type": "package",
          "name": "Paketsiz"
      }
  ],
  "cargo": [
      {
          "_id": "63728b818628c49d822e8c35",
          "type": "cargo",
          "name": "2. El Araç"
      },
      {
          "_id": "63728b818628c49d822e8c36",
          "type": "cargo",
          "name": "Sağlık Ürünleri"
      }
  ],
  "tonnage": [
      {
          "_id": "63728b818628c49d822e8c37",
          "type": "tonnage",
          "name": "1-3 Ton"
      },
      {
          "_id": "63728b818628c49d822e8c38",
          "type": "tonnage",
          "name": "4-7 Ton"
      },
      {
          "_id": "63728b818628c49d822e8c39",
          "type": "tonnage",
          "name": "8-10 Ton"
      },
      {
          "_id": "63728b818628c49d822e8c3a",
          "type": "tonnage",
          "name": "11-20 Ton"
      },
      {
          "_id": "63728b818628c49d822e8c3b",
          "type": "tonnage",
          "name": "21-50 Ton"
      }
  ],
  "start": [
      {
          "_id": "63728b818628c49d822e8c3c",
          "type": "start",
          "name": "Hemen",
          "slug": "now"
      },
      {
          "_id": "63728b818628c49d822e8c3d",
          "type": "start",
          "name": "Tarih Seç",
          "slug": "date"
      }
  ],
  "end": [
      {
          "_id": "63728b818628c49d822e8c3e",
          "type": "end",
          "name": "1 Hafta",
          "slug": "1week"
      },
      {
          "_id": "63728b818628c49d822e8c3f",
          "type": "end",
          "name": "10 Gün",
          "slug": "10day"
      },
      {
          "_id": "63728b818628c49d822e8c40",
          "type": "end",
          "name": "1 Ay",
          "slug": "1month"
      },
      {
          "_id": "63728b818628c49d822e8c41",
          "type": "end",
          "name": "Tarih Seç",
          "slug": "date"
      }
  ],
  "location": [
      {
          "_id": "63728b818628c49d822e8c42",
          "type": "location",
          "name": "Mola Yerleri",
          "extra": {
              "icon": "mola-yerleri.svg",
              "keyword": "dinlenme tesisleri"
          }
      },
      {
          "_id": "63728b818628c49d822e8c43",
          "type": "location",
          "name": "Oteller",
          "extra": {
              "icon": "oteller.svg",
              "keyword": "konaklama"
          }
      },
      {
          "_id": "63728b818628c49d822e8c44",
          "type": "location",
          "name": "Otopark - Tırpark",
          "extra": {
              "icon": "otopark.svg",
              "keyword": "otopark tırpark"
          }
      },
      {
          "_id": "63728b818628c49d822e8c45",
          "type": "location",
          "name": "Petrol İstasyonları",
          "extra": {
              "icon": "petrol-istasyonlari.svg",
              "keyword": "benzinlik"
          }
      },
      {
          "_id": "63728b818628c49d822e8c46",
          "type": "location",
          "name": "Lastikçiler",
          "extra": {
              "icon": "lastikciler.svg",
              "keyword": "lastikçi"
          }
      },
      {
          "_id": "63728b818628c49d822e8c47",
          "type": "location",
          "name": "Yetkili Servisler",
          "extra": {
              "icon": "yetkili-servisler.svg",
              "keyword": "yetkili servis"
          }
      },
      {
          "_id": "63728b818628c49d822e8c48",
          "type": "location",
          "name": "Kurtarıcı - Çekici",
          "extra": {
              "icon": "kurtarici-cekici.svg",
              "keyword": "kurtarıcı çekicik"
          }
      },
      {
          "_id": "63728b818628c49d822e8c49",
          "type": "location",
          "name": "Yol Yardım Merkezleri",
          "extra": {
              "icon": "yol-yardim-merkezleri.svg",
              "keyword": "yol yardım merkezi"
          }
      },
      {
          "_id": "63728b818628c49d822e8c4a",
          "type": "location",
          "name": "Tren İstasyonları",
          "extra": {
              "icon": "tren-istasyonlari.svg",
              "keyword": "tren istasyonu"
          }
      },
      {
          "_id": "63728b818628c49d822e8c4b",
          "type": "location",
          "name": "Havalimanları",
          "extra": {
              "icon": "havalimanlari.svg",
              "keyword": "havaalanı"
          }
      },
      {
          "_id": "63728b818628c49d822e8c4c",
          "type": "location",
          "name": "Limanlar",
          "extra": {
              "icon": "limanlar.svg",
              "keyword": "liman"
          }
      },
      {
          "_id": "63728b818628c49d822e8c4d",
          "type": "location",
          "name": "Gümrükler",
          "extra": {
              "icon": "gumrukler.svg",
              "keyword": "gümrük"
          }
      },
      {
          "_id": "63728b818628c49d822e8c4e",
          "type": "location",
          "name": "Otoyollar",
          "extra": {
              "icon": "otoyollar.svg",
              "keyword": "otoyol"
          }
      },
      {
          "_id": "63728b818628c49d822e8c4f",
          "type": "location",
          "name": "Toptancı Halleri",
          "extra": {
              "icon": "toptanci-halleri.svg",
              "keyword": "toptancı hali"
          }
      },
      {
          "_id": "63728b818628c49d822e8c50",
          "type": "location",
          "name": "Toptancılar Sitesi",
          "extra": {
              "icon": "toptancilar-sitesi.svg",
              "keyword": "toptancı sitesi"
          }
      },
      {
          "_id": "63728b818628c49d822e8c51",
          "type": "location",
          "name": "Organize Sanayiler",
          "extra": {
              "icon": "organize-sanayiler.svg",
              "keyword": "organize sanayi"
          }
      },
      {
          "_id": "63728b818628c49d822e8c52",
          "type": "location",
          "name": "Sanayi Siteleri",
          "extra": {
              "icon": "sanayi-siteleri.svgse",
              "keyword": "sanayi siteleri"
          }
      },
      {
          "_id": "63728b818628c49d822e8c53",
          "type": "location",
          "name": "Serbest Bölgeler",
          "extra": {
              "icon": "serbest-bolgeler.svg",
              "keyword": "serbest bölge"
          }
      },
      {
          "_id": "63728b818628c49d822e8c54",
          "type": "location",
          "name": "Ticaret Odaları",
          "extra": {
              "icon": "ticaret-odalari.svg",
              "keyword": "ticaret odaları"
          }
      },
      {
          "_id": "63728b818628c49d822e8c55",
          "type": "location",
          "name": "Depolar",
          "extra": {
              "icon": "depolar.svg",
              "keyword": "depo"
          }
      }
  ],
  "feature": [
      {
          "_id": "63728b818628c49d822e8c56",
          "type": "feature",
          "name": "10 Teker Kamyon açık"
      },
      {
          "_id": "63728b818628c49d822e8c57",
          "type": "feature",
          "name": "10 Teker Kamyon kapalı"
      },
      {
          "_id": "63728b818628c49d822e8c58",
          "type": "feature",
          "name": "Kırkayak Kamyon açık"
      },
      {
          "_id": "63728b818628c49d822e8c59",
          "type": "feature",
          "name": "Kırkayak Kamyon kapalı"
      },
      {
          "_id": "63728b818628c49d822e8c5a",
          "type": "feature",
          "name": "Isı kontrollü Kamyon/Kırkayak"
      },
      {
          "_id": "63728b818628c49d822e8c5b",
          "type": "feature",
          "name": "Damperli Kamyon/Kırkayak"
      },
      {
          "_id": "63728b818628c49d822e8c5c",
          "type": "feature",
          "name": "Canlı hayvan taşıma dorsesi"
      },
      {
          "_id": "63728b818628c49d822e8c5d",
          "type": "feature",
          "name": "Konteyner Dorsesi(Kılçık Dorse)"
      },
      {
          "_id": "63728b818628c49d822e8c5e",
          "type": "feature",
          "name": "Lowbed"
      },
      {
          "_id": "63728b818628c49d822e8c5f",
          "type": "feature",
          "name": "Silobas"
      },
      {
          "_id": "63728b818628c49d822e8c60",
          "type": "feature",
          "name": "Tanker"
      },
      {
          "_id": "63728b818628c49d822e8c61",
          "type": "feature",
          "name": "Tır-13.60 Açık"
      },
      {
          "_id": "63728b818628c49d822e8c62",
          "type": "feature",
          "name": "Tır-13.60 Kapalı"
      },
      {
          "_id": "63728b818628c49d822e8c63",
          "type": "feature",
          "name": "Tır 13.60 Kayar Perde/Kalkar Çatı"
      },
      {
          "_id": "63728b818628c49d822e8c64",
          "type": "feature",
          "name": "Tır 13.60 Jumbo"
      },
      {
          "_id": "63728b818628c49d822e8c65",
          "type": "feature",
          "name": "Tır Damper Dorse 8.60/8.20"
      },
      {
          "_id": "63728b818628c49d822e8c66",
          "type": "feature",
          "name": "Tır Havuz Dorse"
      },
      {
          "_id": "63728b818628c49d822e8c67",
          "type": "feature",
          "name": "Tır/Kamyon Frigo"
      },
      {
          "_id": "63728b818628c49d822e8c68",
          "type": "feature",
          "name": "Tır/Kamyon Tekstil"
      },
      {
          "_id": "63728b818628c49d822e8c69",
          "type": "feature",
          "name": "Vinçli kamyon"
      },
      {
          "_id": "63728b818628c49d822e8c6a",
          "type": "feature",
          "name": "Özel Amaçlı Dorse/Kasa"
      },
      {
          "_id": "63728b818628c49d822e8c6b",
          "type": "feature",
          "name": "Kamyon tenteli"
      },
      {
          "_id": "63728b818628c49d822e8c6c",
          "type": "feature",
          "name": "Düz yataklı kamyon"
      },
      {
          "_id": "63728b818628c49d822e8c6d",
          "type": "feature",
          "name": "Ağır traktör ünitesi"
      },
      {
          "_id": "63728b818628c49d822e8c6e",
          "type": "feature",
          "name": "Van/Kutu kamyon"
      },
      {
          "_id": "63728b818628c49d822e8c6f",
          "type": "feature",
          "name": "Açık karoser kamyonu"
      },
      {
          "_id": "63728b818628c49d822e8c70",
          "type": "feature",
          "name": "Konteynır kamyonu"
      },
      {
          "_id": "63728b818628c49d822e8c71",
          "type": "feature",
          "name": "Taner"
      },
      {
          "_id": "63728b818628c49d822e8c72",
          "type": "feature",
          "name": "Araba nakil aracı"
      },
      {
          "_id": "63728b818628c49d822e8c73",
          "type": "feature",
          "name": "Damperli kamyon"
      },
      {
          "_id": "63728b818628c49d822e8c74",
          "type": "feature",
          "name": "Hayvan taşımacılığı"
      },
      {
          "_id": "63728b818628c49d822e8c75",
          "type": "feature",
          "name": "Sıvı gıda tankeri"
      }
  ],
  "option": [
      {
          "_id": "63728b818628c49d822e8c76",
          "type": "option",
          "name": "Adr'n"
      },
      {
          "_id": "63728b818628c49d822e8c77",
          "type": "option",
          "name": "Isı Kontrolü"
      },
      {
          "_id": "63728b818628c49d822e8c78",
          "type": "option",
          "name": "Konteyner Kilitli"
      },
      {
          "_id": "63728b818628c49d822e8c79",
          "type": "option",
          "name": "Köşebent"
      },
      {
          "_id": "63728b818628c49d822e8c7a",
          "type": "option",
          "name": "Buzdolabı"
      },
      {
          "_id": "63728b818628c49d822e8c7b",
          "type": "option",
          "name": "Liftli Arka kapak/Frigo"
      },
      {
          "_id": "63728b818628c49d822e8c7c",
          "type": "option",
          "name": "Polyester Çadır"
      },
      {
          "_id": "63728b818628c49d822e8c7d",
          "type": "option",
          "name": "Izotermal"
      },
      {
          "_id": "63728b818628c49d822e8c7e",
          "type": "option",
          "name": "Rulo havuzu"
      },
      {
          "_id": "63728b818628c49d822e8c7f",
          "type": "option",
          "name": "Saç taban"
      },
      {
          "_id": "63728b818628c49d822e8c80",
          "type": "option",
          "name": "Hidrolik asansör"
      },
      {
          "_id": "63728b818628c49d822e8c81",
          "type": "option",
          "name": "Spanzet/İp"
      },
      {
          "_id": "63728b818628c49d822e8c82",
          "type": "option",
          "name": "Tahta Profil taban"
      },
      {
          "_id": "63728b818628c49d822e8c83",
          "type": "option",
          "name": "Tahta/Mdf Kapak"
      },
      {
          "_id": "63728b818628c49d822e8c84",
          "type": "option",
          "name": "Yük askılı"
      }
  ],
  "activity": [
      {
          "_id": "63728b818628c49d822e8c85",
          "type": "activity",
          "name": "İnşaat"
      },
      {
          "_id": "63728b818628c49d822e8c86",
          "type": "activity",
          "name": "Maden"
      },
      {
          "_id": "63728b818628c49d822e8c87",
          "type": "activity",
          "name": "Gıda"
      },
      {
          "_id": "63728b818628c49d822e8c88",
          "type": "activity",
          "name": "Frigo taşımacılığı"
      },
      {
          "_id": "63728b818628c49d822e8c89",
          "type": "activity",
          "name": "Uluslararası lojistik"
      },
      {
          "_id": "63728b818628c49d822e8c8a",
          "type": "activity",
          "name": "Ağır yük taşımacılığı"
      },
      {
          "_id": "63728b818628c49d822e8c8b",
          "type": "activity",
          "name": "Yurt içi taşımacılık"
      },
      {
          "_id": "63728b818628c49d822e8c8c",
          "type": "activity",
          "name": "Depo hizmetleri"
      },
      {
          "_id": "63728b818628c49d822e8c8d",
          "type": "activity",
          "name": "Antrepo"
      },
      {
          "_id": "63728b818628c49d822e8c8e",
          "type": "activity",
          "name": "Tarım"
      },
      {
          "_id": "63728b818628c49d822e8c8f",
          "type": "activity",
          "name": "Perakende"
      },
      {
          "_id": "63728b818628c49d822e8c90",
          "type": "activity",
          "name": "Toptan"
      },
      {
          "_id": "63728b818628c49d822e8c91",
          "type": "activity",
          "name": "Meyve Sebze"
      },
      {
          "_id": "63728b818628c49d822e8c92",
          "type": "activity",
          "name": "Hammadde"
      }
  ]

}

export const dummyFormatted = {
  "63728b818628c49d822e8c08": {
      "_id": "63728b818628c49d822e8c08",
      "type": "load",
      "name": "Banttan"
  },
  "63728b818628c49d822e8c09": {
      "_id": "63728b818628c49d822e8c09",
      "type": "load",
      "name": "Diğer"
  },
  "63728b818628c49d822e8c0a": {
      "_id": "63728b818628c49d822e8c0a",
      "type": "load",
      "name": "El İle"
  },
  "63728b818628c49d822e8c0b": {
      "_id": "63728b818628c49d822e8c0b",
      "type": "load",
      "name": "Forklift İle Rampadan"
  },
  "63728b818628c49d822e8c0c": {
      "_id": "63728b818628c49d822e8c0c",
      "type": "load",
      "name": "Forklift İle Yandan"
  },
  "63728b818628c49d822e8c0d": {
      "_id": "63728b818628c49d822e8c0d",
      "type": "load",
      "name": "Kepçe İle"
  },
  "63728b818628c49d822e8c0e": {
      "_id": "63728b818628c49d822e8c0e",
      "type": "load",
      "name": "Transpalet İle"
  },
  "63728b818628c49d822e8c0f": {
      "_id": "63728b818628c49d822e8c0f",
      "type": "load",
      "name": "Vinç İle"
  },
  "63728b818628c49d822e8c10": {
      "_id": "63728b818628c49d822e8c10",
      "type": "vehicle",
      "name": "Kamyon",
      "slug": "kamyon"
  },
  "63728b818628c49d822e8c11": {
      "_id": "63728b818628c49d822e8c11",
      "type": "vehicle",
      "name": "Kırkayak",
      "slug": "kirkayak"
  },
  "63728b818628c49d822e8c12": {
      "_id": "63728b818628c49d822e8c12",
      "type": "vehicle",
      "name": "Tır",
      "slug": "tir"
  },
  "63728b818628c49d822e8c13": {
      "_id": "63728b818628c49d822e8c13",
      "type": "vehicle",
      "name": "Dorse",
      "slug": "dorse"
  },
  "63728b818628c49d822e8c14": {
      "_id": "63728b818628c49d822e8c14",
      "type": "vehicle",
      "name": "Römork",
      "slug": "romork"
  },
  "63728b818628c49d822e8c15": {
      "_id": "63728b818628c49d822e8c15",
      "type": "vehicle",
      "name": "Frigofirik",
      "slug": "frigofirik"
  },
  "63728b818628c49d822e8c16": {
      "_id": "63728b818628c49d822e8c16",
      "type": "rent",
      "name": "Komple",
      "slug": "full"
  },
  "63728b818628c49d822e8c17": {
      "_id": "63728b818628c49d822e8c17",
      "type": "rent",
      "name": "Parsiyel",
      "slug": "parsiel"
  },
  "63728b818628c49d822e8c18": {
      "_id": "63728b818628c49d822e8c18",
      "type": "importance",
      "name": "Farketmez"
  },
  "63728b818628c49d822e8c19": {
      "_id": "63728b818628c49d822e8c19",
      "type": "importance",
      "name": "Farkeder"
  },
  "63728b818628c49d822e8c1a": {
      "_id": "63728b818628c49d822e8c1a",
      "type": "weight",
      "name": "KG",
      "slug": "kg"
  },
  "63728b818628c49d822e8c1b": {
      "_id": "63728b818628c49d822e8c1b",
      "type": "weight",
      "name": "TON",
      "slug": "ton"
  },
  "63728b818628c49d822e8c1c": {
      "_id": "63728b818628c49d822e8c1c",
      "type": "meter",
      "name": "M",
      "slug": "m"
  },
  "63728b818628c49d822e8c1d": {
      "_id": "63728b818628c49d822e8c1d",
      "type": "meter",
      "name": "CM",
      "slug": "cm"
  },
  "63728b818628c49d822e8c1e": {
      "_id": "63728b818628c49d822e8c1e",
      "type": "currency",
      "name": "TRY",
      "slug": "try"
  },
  "63728b818628c49d822e8c1f": {
      "_id": "63728b818628c49d822e8c1f",
      "type": "currency",
      "name": "USD (US Dollar)",
      "slug": "usd"
  },
  "63728b818628c49d822e8c20": {
      "_id": "63728b818628c49d822e8c20",
      "type": "currency",
      "name": "EUR (Euro)",
      "slug": "eur"
  },
  "63728b818628c49d822e8c21": {
      "_id": "63728b818628c49d822e8c21",
      "type": "paymethod",
      "name": "Peşin",
      "slug": "cash"
  },
  "63728b818628c49d822e8c22": {
      "_id": "63728b818628c49d822e8c22",
      "type": "paymethod",
      "name": "Vadeli",
      "slug": "credit"
  },
  "63728b818628c49d822e8c23": {
      "_id": "63728b818628c49d822e8c23",
      "type": "paymethod",
      "name": "Yükleme Üzerine Nakit/Havale",
      "slug": "onload"
  },
  "63728b818628c49d822e8c24": {
      "_id": "63728b818628c49d822e8c24",
      "type": "paymethod",
      "name": "Boşaltma Üzerine Nakit/Havale",
      "slug": "unload"
  },
  "63728b818628c49d822e8c25": {
      "_id": "63728b818628c49d822e8c25",
      "type": "paymethod",
      "name": "Telefon İle Görüşülecek",
      "slug": "phone"
  },
  "63728b818628c49d822e8c26": {
      "_id": "63728b818628c49d822e8c26",
      "type": "vat",
      "name": "KDV Dahil",
      "slug": "include"
  },
  "63728b818628c49d822e8c27": {
      "_id": "63728b818628c49d822e8c27",
      "type": "vat",
      "name": "KDV Hariç",
      "slug": "exclude"
  },
  "63728b818628c49d822e8c28": {
      "_id": "63728b818628c49d822e8c28",
      "type": "price",
      "name": "Açık Fiyat",
      "slug": "public"
  },
  "63728b818628c49d822e8c29": {
      "_id": "63728b818628c49d822e8c29",
      "type": "price",
      "name": "Sabit Fiyat",
      "slug": "static"
  },
  "63728b818628c49d822e8c2a": {
      "_id": "63728b818628c49d822e8c2a",
      "type": "unload",
      "name": "1 Gün",
      "slug": "1day"
  },
  "63728b818628c49d822e8c2b": {
      "_id": "63728b818628c49d822e8c2b",
      "type": "unload",
      "name": "1-3 Gün İçerisinde",
      "slug": "3day"
  },
  "63728b818628c49d822e8c2c": {
      "_id": "63728b818628c49d822e8c2c",
      "type": "unload",
      "name": "Diğer",
      "slug": "other"
  },
  "63728b818628c49d822e8c2d": {
      "_id": "63728b818628c49d822e8c2d",
      "type": "range",
      "name": "1 KM",
      "slug": "1000"
  },
  "63728b818628c49d822e8c2e": {
      "_id": "63728b818628c49d822e8c2e",
      "type": "range",
      "name": "5 KM",
      "slug": "5000"
  },
  "63728b818628c49d822e8c2f": {
      "_id": "63728b818628c49d822e8c2f",
      "type": "range",
      "name": "10 KM",
      "slug": "10000"
  },
  "63728b818628c49d822e8c30": {
      "_id": "63728b818628c49d822e8c30",
      "type": "range",
      "name": "15 KM",
      "slug": "15000"
  },
  "63728b818628c49d822e8c31": {
      "_id": "63728b818628c49d822e8c31",
      "type": "range",
      "name": "25 KM",
      "slug": "25000"
  },
  "63728b818628c49d822e8c32": {
      "_id": "63728b818628c49d822e8c32",
      "type": "range",
      "name": "50 KM",
      "slug": "50000"
  },
  "63728b818628c49d822e8c33": {
      "_id": "63728b818628c49d822e8c33",
      "type": "package",
      "name": "Paketli"
  },
  "63728b818628c49d822e8c34": {
      "_id": "63728b818628c49d822e8c34",
      "type": "package",
      "name": "Paketsiz"
  },
  "63728b818628c49d822e8c35": {
      "_id": "63728b818628c49d822e8c35",
      "type": "cargo",
      "name": "2. El Araç"
  },
  "63728b818628c49d822e8c36": {
      "_id": "63728b818628c49d822e8c36",
      "type": "cargo",
      "name": "Sağlık Ürünleri"
  },
  "63728b818628c49d822e8c37": {
      "_id": "63728b818628c49d822e8c37",
      "type": "tonnage",
      "name": "1-3 Ton"
  },
  "63728b818628c49d822e8c38": {
      "_id": "63728b818628c49d822e8c38",
      "type": "tonnage",
      "name": "4-7 Ton"
  },
  "63728b818628c49d822e8c39": {
      "_id": "63728b818628c49d822e8c39",
      "type": "tonnage",
      "name": "8-10 Ton"
  },
  "63728b818628c49d822e8c3a": {
      "_id": "63728b818628c49d822e8c3a",
      "type": "tonnage",
      "name": "11-20 Ton"
  },
  "63728b818628c49d822e8c3b": {
      "_id": "63728b818628c49d822e8c3b",
      "type": "tonnage",
      "name": "21-50 Ton"
  },
  "63728b818628c49d822e8c3c": {
      "_id": "63728b818628c49d822e8c3c",
      "type": "start",
      "name": "Hemen",
      "slug": "now"
  },
  "63728b818628c49d822e8c3d": {
      "_id": "63728b818628c49d822e8c3d",
      "type": "start",
      "name": "Tarih Seç",
      "slug": "date"
  },
  "63728b818628c49d822e8c3e": {
      "_id": "63728b818628c49d822e8c3e",
      "type": "end",
      "name": "1 Hafta",
      "slug": "1week"
  },
  "63728b818628c49d822e8c3f": {
      "_id": "63728b818628c49d822e8c3f",
      "type": "end",
      "name": "10 Gün",
      "slug": "10day"
  },
  "63728b818628c49d822e8c40": {
      "_id": "63728b818628c49d822e8c40",
      "type": "end",
      "name": "1 Ay",
      "slug": "1month"
  },
  "63728b818628c49d822e8c41": {
      "_id": "63728b818628c49d822e8c41",
      "type": "end",
      "name": "Tarih Seç",
      "slug": "date"
  },
  "63728b818628c49d822e8c42": {
      "_id": "63728b818628c49d822e8c42",
      "type": "location",
      "name": "Mola Yerleri",
      "extra": {
          "icon": "mola-yerleri.svg",
          "keyword": "dinlenme tesisleri"
      }
  },
  "63728b818628c49d822e8c43": {
      "_id": "63728b818628c49d822e8c43",
      "type": "location",
      "name": "Oteller",
      "extra": {
          "icon": "oteller.svg",
          "keyword": "konaklama"
      }
  },
  "63728b818628c49d822e8c44": {
      "_id": "63728b818628c49d822e8c44",
      "type": "location",
      "name": "Otopark - Tırpark",
      "extra": {
          "icon": "otopark.svg",
          "keyword": "otopark tırpark"
      }
  },
  "63728b818628c49d822e8c45": {
      "_id": "63728b818628c49d822e8c45",
      "type": "location",
      "name": "Petrol İstasyonları",
      "extra": {
          "icon": "petrol-istasyonlari.svg",
          "keyword": "benzinlik"
      }
  },
  "63728b818628c49d822e8c46": {
      "_id": "63728b818628c49d822e8c46",
      "type": "location",
      "name": "Lastikçiler",
      "extra": {
          "icon": "lastikciler.svg",
          "keyword": "lastikçi"
      }
  },
  "63728b818628c49d822e8c47": {
      "_id": "63728b818628c49d822e8c47",
      "type": "location",
      "name": "Yetkili Servisler",
      "extra": {
          "icon": "yetkili-servisler.svg",
          "keyword": "yetkili servis"
      }
  },
  "63728b818628c49d822e8c48": {
      "_id": "63728b818628c49d822e8c48",
      "type": "location",
      "name": "Kurtarıcı - Çekici",
      "extra": {
          "icon": "kurtarici-cekici.svg",
          "keyword": "kurtarıcı çekicik"
      }
  },
  "63728b818628c49d822e8c49": {
      "_id": "63728b818628c49d822e8c49",
      "type": "location",
      "name": "Yol Yardım Merkezleri",
      "extra": {
          "icon": "yol-yardim-merkezleri.svg",
          "keyword": "yol yardım merkezi"
      }
  },
  "63728b818628c49d822e8c4a": {
      "_id": "63728b818628c49d822e8c4a",
      "type": "location",
      "name": "Tren İstasyonları",
      "extra": {
          "icon": "tren-istasyonlari.svg",
          "keyword": "tren istasyonu"
      }
  },
  "63728b818628c49d822e8c4b": {
      "_id": "63728b818628c49d822e8c4b",
      "type": "location",
      "name": "Havalimanları",
      "extra": {
          "icon": "havalimanlari.svg",
          "keyword": "havaalanı"
      }
  },
  "63728b818628c49d822e8c4c": {
      "_id": "63728b818628c49d822e8c4c",
      "type": "location",
      "name": "Limanlar",
      "extra": {
          "icon": "limanlar.svg",
          "keyword": "liman"
      }
  },
  "63728b818628c49d822e8c4d": {
      "_id": "63728b818628c49d822e8c4d",
      "type": "location",
      "name": "Gümrükler",
      "extra": {
          "icon": "gumrukler.svg",
          "keyword": "gümrük"
      }
  },
  "63728b818628c49d822e8c4e": {
      "_id": "63728b818628c49d822e8c4e",
      "type": "location",
      "name": "Otoyollar",
      "extra": {
          "icon": "otoyollar.svg",
          "keyword": "otoyol"
      }
  },
  "63728b818628c49d822e8c4f": {
      "_id": "63728b818628c49d822e8c4f",
      "type": "location",
      "name": "Toptancı Halleri",
      "extra": {
          "icon": "toptanci-halleri.svg",
          "keyword": "toptancı hali"
      }
  },
  "63728b818628c49d822e8c50": {
      "_id": "63728b818628c49d822e8c50",
      "type": "location",
      "name": "Toptancılar Sitesi",
      "extra": {
          "icon": "toptancilar-sitesi.svg",
          "keyword": "toptancı sitesi"
      }
  },
  "63728b818628c49d822e8c51": {
      "_id": "63728b818628c49d822e8c51",
      "type": "location",
      "name": "Organize Sanayiler",
      "extra": {
          "icon": "organize-sanayiler.svg",
          "keyword": "organize sanayi"
      }
  },
  "63728b818628c49d822e8c52": {
      "_id": "63728b818628c49d822e8c52",
      "type": "location",
      "name": "Sanayi Siteleri",
      "extra": {
          "icon": "sanayi-siteleri.svgse",
          "keyword": "sanayi siteleri"
      }
  },
  "63728b818628c49d822e8c53": {
      "_id": "63728b818628c49d822e8c53",
      "type": "location",
      "name": "Serbest Bölgeler",
      "extra": {
          "icon": "serbest-bolgeler.svg",
          "keyword": "serbest bölge"
      }
  },
  "63728b818628c49d822e8c54": {
      "_id": "63728b818628c49d822e8c54",
      "type": "location",
      "name": "Ticaret Odaları",
      "extra": {
          "icon": "ticaret-odalari.svg",
          "keyword": "ticaret odaları"
      }
  },
  "63728b818628c49d822e8c55": {
      "_id": "63728b818628c49d822e8c55",
      "type": "location",
      "name": "Depolar",
      "extra": {
          "icon": "depolar.svg",
          "keyword": "depo"
      }
  },
  "63728b818628c49d822e8c56": {
      "_id": "63728b818628c49d822e8c56",
      "type": "feature",
      "name": "10 Teker Kamyon açık"
  },
  "63728b818628c49d822e8c57": {
      "_id": "63728b818628c49d822e8c57",
      "type": "feature",
      "name": "10 Teker Kamyon kapalı"
  },
  "63728b818628c49d822e8c58": {
      "_id": "63728b818628c49d822e8c58",
      "type": "feature",
      "name": "Kırkayak Kamyon açık"
  },
  "63728b818628c49d822e8c59": {
      "_id": "63728b818628c49d822e8c59",
      "type": "feature",
      "name": "Kırkayak Kamyon kapalı"
  },
  "63728b818628c49d822e8c5a": {
      "_id": "63728b818628c49d822e8c5a",
      "type": "feature",
      "name": "Isı kontrollü Kamyon/Kırkayak"
  },
  "63728b818628c49d822e8c5b": {
      "_id": "63728b818628c49d822e8c5b",
      "type": "feature",
      "name": "Damperli Kamyon/Kırkayak"
  },
  "63728b818628c49d822e8c5c": {
      "_id": "63728b818628c49d822e8c5c",
      "type": "feature",
      "name": "Canlı hayvan taşıma dorsesi"
  },
  "63728b818628c49d822e8c5d": {
      "_id": "63728b818628c49d822e8c5d",
      "type": "feature",
      "name": "Konteyner Dorsesi(Kılçık Dorse)"
  },
  "63728b818628c49d822e8c5e": {
      "_id": "63728b818628c49d822e8c5e",
      "type": "feature",
      "name": "Lowbed"
  },
  "63728b818628c49d822e8c5f": {
      "_id": "63728b818628c49d822e8c5f",
      "type": "feature",
      "name": "Silobas"
  },
  "63728b818628c49d822e8c60": {
      "_id": "63728b818628c49d822e8c60",
      "type": "feature",
      "name": "Tanker"
  },
  "63728b818628c49d822e8c61": {
      "_id": "63728b818628c49d822e8c61",
      "type": "feature",
      "name": "Tır-13.60 Açık"
  },
  "63728b818628c49d822e8c62": {
      "_id": "63728b818628c49d822e8c62",
      "type": "feature",
      "name": "Tır-13.60 Kapalı"
  },
  "63728b818628c49d822e8c63": {
      "_id": "63728b818628c49d822e8c63",
      "type": "feature",
      "name": "Tır 13.60 Kayar Perde/Kalkar Çatı"
  },
  "63728b818628c49d822e8c64": {
      "_id": "63728b818628c49d822e8c64",
      "type": "feature",
      "name": "Tır 13.60 Jumbo"
  },
  "63728b818628c49d822e8c65": {
      "_id": "63728b818628c49d822e8c65",
      "type": "feature",
      "name": "Tır Damper Dorse 8.60/8.20"
  },
  "63728b818628c49d822e8c66": {
      "_id": "63728b818628c49d822e8c66",
      "type": "feature",
      "name": "Tır Havuz Dorse"
  },
  "63728b818628c49d822e8c67": {
      "_id": "63728b818628c49d822e8c67",
      "type": "feature",
      "name": "Tır/Kamyon Frigo"
  },
  "63728b818628c49d822e8c68": {
      "_id": "63728b818628c49d822e8c68",
      "type": "feature",
      "name": "Tır/Kamyon Tekstil"
  },
  "63728b818628c49d822e8c69": {
      "_id": "63728b818628c49d822e8c69",
      "type": "feature",
      "name": "Vinçli kamyon"
  },
  "63728b818628c49d822e8c6a": {
      "_id": "63728b818628c49d822e8c6a",
      "type": "feature",
      "name": "Özel Amaçlı Dorse/Kasa"
  },
  "63728b818628c49d822e8c6b": {
      "_id": "63728b818628c49d822e8c6b",
      "type": "feature",
      "name": "Kamyon tenteli"
  },
  "63728b818628c49d822e8c6c": {
      "_id": "63728b818628c49d822e8c6c",
      "type": "feature",
      "name": "Düz yataklı kamyon"
  },
  "63728b818628c49d822e8c6d": {
      "_id": "63728b818628c49d822e8c6d",
      "type": "feature",
      "name": "Ağır traktör ünitesi"
  },
  "63728b818628c49d822e8c6e": {
      "_id": "63728b818628c49d822e8c6e",
      "type": "feature",
      "name": "Van/Kutu kamyon"
  },
  "63728b818628c49d822e8c6f": {
      "_id": "63728b818628c49d822e8c6f",
      "type": "feature",
      "name": "Açık karoser kamyonu"
  },
  "63728b818628c49d822e8c70": {
      "_id": "63728b818628c49d822e8c70",
      "type": "feature",
      "name": "Konteynır kamyonu"
  },
  "63728b818628c49d822e8c71": {
      "_id": "63728b818628c49d822e8c71",
      "type": "feature",
      "name": "Taner"
  },
  "63728b818628c49d822e8c72": {
      "_id": "63728b818628c49d822e8c72",
      "type": "feature",
      "name": "Araba nakil aracı"
  },
  "63728b818628c49d822e8c73": {
      "_id": "63728b818628c49d822e8c73",
      "type": "feature",
      "name": "Damperli kamyon"
  },
  "63728b818628c49d822e8c74": {
      "_id": "63728b818628c49d822e8c74",
      "type": "feature",
      "name": "Hayvan taşımacılığı"
  },
  "63728b818628c49d822e8c75": {
      "_id": "63728b818628c49d822e8c75",
      "type": "feature",
      "name": "Sıvı gıda tankeri"
  },
  "63728b818628c49d822e8c76": {
      "_id": "63728b818628c49d822e8c76",
      "type": "option",
      "name": "Adr'n"
  },
  "63728b818628c49d822e8c77": {
      "_id": "63728b818628c49d822e8c77",
      "type": "option",
      "name": "Isı Kontrolü"
  },
  "63728b818628c49d822e8c78": {
      "_id": "63728b818628c49d822e8c78",
      "type": "option",
      "name": "Konteyner Kilitli"
  },
  "63728b818628c49d822e8c79": {
      "_id": "63728b818628c49d822e8c79",
      "type": "option",
      "name": "Köşebent"
  },
  "63728b818628c49d822e8c7a": {
      "_id": "63728b818628c49d822e8c7a",
      "type": "option",
      "name": "Buzdolabı"
  },
  "63728b818628c49d822e8c7b": {
      "_id": "63728b818628c49d822e8c7b",
      "type": "option",
      "name": "Liftli Arka kapak/Frigo"
  },
  "63728b818628c49d822e8c7c": {
      "_id": "63728b818628c49d822e8c7c",
      "type": "option",
      "name": "Polyester Çadır"
  },
  "63728b818628c49d822e8c7d": {
      "_id": "63728b818628c49d822e8c7d",
      "type": "option",
      "name": "Izotermal"
  },
  "63728b818628c49d822e8c7e": {
      "_id": "63728b818628c49d822e8c7e",
      "type": "option",
      "name": "Rulo havuzu"
  },
  "63728b818628c49d822e8c7f": {
      "_id": "63728b818628c49d822e8c7f",
      "type": "option",
      "name": "Saç taban"
  },
  "63728b818628c49d822e8c80": {
      "_id": "63728b818628c49d822e8c80",
      "type": "option",
      "name": "Hidrolik asansör"
  },
  "63728b818628c49d822e8c81": {
      "_id": "63728b818628c49d822e8c81",
      "type": "option",
      "name": "Spanzet/İp"
  },
  "63728b818628c49d822e8c82": {
      "_id": "63728b818628c49d822e8c82",
      "type": "option",
      "name": "Tahta Profil taban"
  },
  "63728b818628c49d822e8c83": {
      "_id": "63728b818628c49d822e8c83",
      "type": "option",
      "name": "Tahta/Mdf Kapak"
  },
  "63728b818628c49d822e8c84": {
      "_id": "63728b818628c49d822e8c84",
      "type": "option",
      "name": "Yük askılı"
  },
  "63728b818628c49d822e8c85": {
      "_id": "63728b818628c49d822e8c85",
      "type": "activity",
      "name": "İnşaat"
  },
  "63728b818628c49d822e8c86": {
      "_id": "63728b818628c49d822e8c86",
      "type": "activity",
      "name": "Maden"
  },
  "63728b818628c49d822e8c87": {
      "_id": "63728b818628c49d822e8c87",
      "type": "activity",
      "name": "Gıda"
  },
  "63728b818628c49d822e8c88": {
      "_id": "63728b818628c49d822e8c88",
      "type": "activity",
      "name": "Frigo taşımacılığı"
  },
  "63728b818628c49d822e8c89": {
      "_id": "63728b818628c49d822e8c89",
      "type": "activity",
      "name": "Uluslararası lojistik"
  },
  "63728b818628c49d822e8c8a": {
      "_id": "63728b818628c49d822e8c8a",
      "type": "activity",
      "name": "Ağır yük taşımacılığı"
  },
  "63728b818628c49d822e8c8b": {
      "_id": "63728b818628c49d822e8c8b",
      "type": "activity",
      "name": "Yurt içi taşımacılık"
  },
  "63728b818628c49d822e8c8c": {
      "_id": "63728b818628c49d822e8c8c",
      "type": "activity",
      "name": "Depo hizmetleri"
  },
  "63728b818628c49d822e8c8d": {
      "_id": "63728b818628c49d822e8c8d",
      "type": "activity",
      "name": "Antrepo"
  },
  "63728b818628c49d822e8c8e": {
      "_id": "63728b818628c49d822e8c8e",
      "type": "activity",
      "name": "Tarım"
  },
  "63728b818628c49d822e8c8f": {
      "_id": "63728b818628c49d822e8c8f",
      "type": "activity",
      "name": "Perakende"
  },
  "63728b818628c49d822e8c90": {
      "_id": "63728b818628c49d822e8c90",
      "type": "activity",
      "name": "Toptan"
  },
  "63728b818628c49d822e8c91": {
      "_id": "63728b818628c49d822e8c91",
      "type": "activity",
      "name": "Meyve Sebze"
  },
  "63728b818628c49d822e8c92": {
      "_id": "63728b818628c49d822e8c92",
      "type": "activity",
      "name": "Hammadde"
  }
}

export const dummyItems = [{
    "_id": "63729a47a988970cf6093b56",
    "user": {
        "_id": "6372896dc8297c87a97f91c3",
        "name": "Tester Tester",
        "slug": "tester-tester"
    },
    "privacy": "drafted",
    "progress": "pending",
    "viewing": 0,
    "rent": {
        "vehicle": "romork",
        "type": "parsiel",
        "features": [
            "62b870456230c566be927ed2",
            "62b870456230c566be927ed4",
            "62b870456230c566be927ef0",
            "62b870456230c566be927eef",
            "62b870456230c566be927eee",
            "62b870456230c566be927eed",
            "62b870456230c566be927eec"
        ],
        "options": [
            "62b870456230c566be927ef4",
            "62b870456230c566be927ef5",
            "62b870456230c566be927efe",
            "62b870456230c566be927eff",
            "62b870456230c566be927efc",
            "62b870456230c566be927efb",
            "62b870456230c566be927efa"
        ]
    },
    "shipping": {
        "range": [
            "2022-07-14T21:00:00.000Z",
            "2022-07-28T21:00:00.000Z"
        ],
        "time": "test deneme",
        "unload": {
            "geolocation": {
                "lat": 38.218786363703394,
                "lng": 38.35107421874999
            },
            "place": {
                "address": "Üçgöze, 44900 Yeşilyurt/Malatya, Türkiye",
                "street": "No: İsimli Yol"
            },
            "direction": {
                "city": "malatya",
                "country": {
                    "code": "TR",
                    "name": "Türkiye"
                }
            },
            "contact": {
                "name": "test",
                "phone": "0234 234 23 42",
                "type": "home",
                "verify": false
            }
        },
        "load": {
            "geolocation": {
                "lat": "40.34447450002158",
                "lng": "34.30810546874999"
            },
            "place": {
                "address": "İsimsiz Yol, 19302 Hacıosman/Sungurlu/Çorum, Türkiye",
                "street": "No: İsimsiz Yol",
                "title": "tester",
                "description": "test"
            },
            "direction": {
                "city": "çorum",
                "country": {
                    "code": "TR",
                    "name": "Türkiye"
                }
            },
            "contact": {
                "name": "test",
                "phone": "0234 234 23 42",
                "type": "home",
                "verify": false
            }
        },
        "time-custom": "test deneme",
        "distance": {
            "text": "594 KM",
            "value": 593777
        },
        "duration": {
            "text": "7 SAAT 33 DAKIKA",
            "value": 27181
        }
    },
    "payload": {
        "bargain": true,
        "weight": {
            "unit": "kg",
            "size": "152342"
        },
        "type": "yük cinsi",
        "definition": "yük tanımı",
        "transport": {
            "load": "62b870456230c566be927f17",
            "unload": "62b870456230c566be927f17"
        }
    },
    "fee": {
        "manual": true,
        "price": {
            "unit": 0,
            "total": 23423423
        },
        "paymethod": "onload",
        "currency": "try",
        "vat": "include"
    },
    "publish": {
        "start": {
            "date": "2022-07-01T12:40:24.677Z",
            "option": "date"
        },
        "end": {
            "date": "2022-07-29T12:40:28.860Z",
            "option": "1month"
        }
    },
    "updated_at": "2022-11-14T19:43:03.855Z",
    "created_at": "2022-11-14T19:43:03.855Z",
    "__v": 0,
    "id": "63729a47a988970cf6093b56"
}]

