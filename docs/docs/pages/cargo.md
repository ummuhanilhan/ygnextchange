---
sidebar_position: 2
---

# Kargolar

Güncel ilanlar `/cargo` ve İlanlarım `/cargoes` sayfalarını ve oluşturmak ya da güncellemek için kullanılan `/cargo/create`, `/cargo/update/slug`  sayfalarını kapsar.    
Kişisel ilanlarında iki adet tab mevcuttur süresi geçen ve aktif ilanlar düzenlenebilirler.
İlanlar sayfasında ise filtrelemek için ikincil bir *sidebar* bulunur. Konum, Tarih, Araç tip ve özellikleri gibi çeşitlerde daraltmalar yapabilmeye imkan tanır. 


## Create & Update
- Rent `araç ile ilgili özellikler`
- Shipping (datettime) `tarih  zaman bilgileri`
- Payload `yüke ait bilgiler`


### Kargo örneği
Varsayılan örnekte doldurulmuş olarak hangi formatlarda gelebileceği gösterilmektedir.

```ts
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
```

### Dolu gelen alanlar
```ts

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

``` 


### Kargo Adresi
Yükleme ve Boşaltma adresi için iki ayrı tanımlamaya ihtiyaç duyulmakta. `componens/cargo/form`'a bağlı olan  **Shipping** tab sayfası içerisinden çağrılan **AddressBox** kompnenti `@shared/maps` paylaşımlılar arasından `mapsView`'i kullanmakta. Veriler google üzerinden elde edilmektedir.
> Adres ile ilgili detayları için Hesabım sayfasına ait **#adres-listem** alt kategorisinde bulabilirsiniz.

```ts

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
```