---
sidebar_position: 3
---

# Hesabım

6 farklı taba ayrılmıştır. `/account` önekine sahip olmalıdır.
- Profilim `/profile`
- Şifremi Değiştir `/change-password`
- Adres Listem `/address`
- Favorilerim `/favorites`
- Ayarlar`/settings`


## Profilim 
Ana dizinde bireysel ve kurumsal şirket bilgilerine ait form karşılamaktadır.
> Hepsinde olduğu gibi [**React Hook Form**](https://react-hook-form.com/) ve  [**Joi**](https://joi.dev/) validasyon kütüphanesi kullanılmaktadır.

## Şifremi Değiştir
Eski ve yeni şifre bir adette tekrar isteyen üç adet inputtan ibarettir. 
## Adres Listem
`@shared/maps` içerisinde yer alan **mapView** komponenti google haritaları çağırır. Next.js static props tarafından çağrılan `@redux/toolkit` state management ile listelenir. Bağımsız komponentler olduğundan **MODAL** içerisinden çağrılabilirler. Adres Listesi modal ile kullanmakta ve Kargo yani İlan oluşturma sayfasında da modal olarak hem Create fom hem de List form çağrılmaktadır. Aynı redux store'u kullanmaktalar. `store/slices/addressSlice` içerisinde bulunabilir.  

`googleMapInitializer` sayfasından `initializeGoogleMap` komponenti google'ın scriplerini siteye gömecektir. Daha sonra `googleViewer` üzerinden ilgili komponent çağrılarak veriler işlenip kaydedilebilir. 

> Kargo adresi ile ilgili bilgiler için döküman üzerinden **Kargo** sayfasına ulaşabilir **kargo-adresi** alt kategorisinden ilgili örnekleri bulabilirsiniz. `MapsView`  Kargo adresinda yükleme ve boşaltma alanları için kullanılmakta.


### Örnek adres dizini

```ts

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

```
### Harita hiyerarşisi

```ts

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

```


## Favorilerim
İlanlardan favorilere eklenmiş olanlar listelenir. 

## Ayarlar
Mobil bildirim, sms ve email onayı gibi ayarlarla birlikte sözleşme metinleri okunabilir.

