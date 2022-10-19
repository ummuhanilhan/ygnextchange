---
sidebar_position: 2
---

# Tanımlar
### definitions
`Definitions` dinamik olarak API'dan gelmekte sayfa açıldığında redux store'a kaydedilip tekrar tekrar kullanılabilmekte. Daha sonra bir cache mekanizmasına bağlanabilir. 

`src/utils/dummy/definitions.ts` sayfasından kullanım örneklerine bakabilirsiniz. `Dummy` sayfası içerisinde tanımların yanısıra **rawCountries.ts**, **address.json**  veya **turkiye.json** gibi uzaktan çağrılmayacak veriler bulunabilir. **Selectbox** için kullanılan ülkeisimleri  telefon kodlarına ait yerelleştirmeler bulunabilir bayrak görselleri için sprite özelliği kullanılmakta `assets` içerisinde yer almaktadır. 

### Tanım örneği 
Format dönüşümü ile **label,value**'ya form elementleri için çevrilmektedir yine bu tür yardımcı methodlar `utils` veya `helpers` içeirsinde tutulabilmektedir.

```ts
/** prototype **/
export const definitions: any = {
  load: [
    {
      _id: "62b14d9d7810ae9b35ea4b06",
      type: "load",
      name: "Banttan",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b07",
      type: "load",
      name: "Diğer",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b08",
      type: "load",
      name: "El İle",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b09",
      type: "load",
      name: "Forklift İle Rampadan",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b0a",
      type: "load",
      name: "Forklift İle Yandan",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b0b",
      type: "load",
      name: "Kepçe İle",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b0c",
      type: "load",
      name: "Transpalet İle",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b0d",
      type: "load",
      name: "Vinç İle",
    },
  ],
  vehicle: [
    {
      _id: "62b14d9d7810ae9b35ea4b0e",
      type: "vehicle",
      name: "Kamyon",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b0f",
      type: "vehicle",
      name: "Kırkayak",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b10",
      type: "vehicle",
      name: "Tır",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b11",
      type: "vehicle",
      name: "Dorse",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b12",
      type: "vehicle",
      name: "Römork",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b13",
      type: "vehicle",
      name: "Frigofirik",
    },
  ],
  importance: [
    {
      _id: "62b14d9d7810ae9b35ea4b14",
      type: "importance",
      name: "Farketmez",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b15",
      type: "importance",
      name: "Farkeder",
    },
  ],
  weight: [
    {
      _id: "62b14d9d7810ae9b35ea4b16",
      type: "weight",
      name: "KG",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b17",
      type: "weight",
      name: "TON",
    },
  ],
  meter: [
    {
      _id: "62b14d9d7810ae9b35ea4b18",
      type: "meter",
      name: "M",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b19",
      type: "meter",
      name: "CM",
    },
  ],
  currency: [
    {
      _id: "62b14d9d7810ae9b35ea4b1a",
      type: "currency",
      name: "TRY",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b1b",
      type: "currency",
      name: "USD (US Dollar)",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b1c",
      type: "currency",
      name: "EUR (Euro)",
    },
  ],
  paymethod: [
    {
      _id: "62b14d9d7810ae9b35ea4b1d",
      type: "paymethod",
      name: "Peşin",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b1e",
      type: "paymethod",
      name: "Vadeli",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b1f",
      type: "paymethod",
      name: "Yükleme Üzerine Nakit/Havale",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b20",
      type: "paymethod",
      name: "Boşaltma Üzerine Nakit/Havale",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b21",
      type: "paymethod",
      name: "Telefon İle Görüşülecek",
    },
  ],
  vat: [
    {
      _id: "62b14d9d7810ae9b35ea4b22",
      type: "vat",
      name: "KDV Dahil",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b23",
      type: "vat",
      name: "KDV Hariç",
    },
  ],
  price: [
    {
      _id: "62b14d9d7810ae9b35ea4b24",
      type: "price",
      name: "Açık Fiyat",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b25",
      type: "price",
      name: "Sabit Fiyat",
    },
  ],
  unload: [
    {
      _id: "62b14d9d7810ae9b35ea4b26",
      type: "unload",
      name: "1 Gün",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b27",
      type: "unload",
      name: "1-3 Gün İçerisinde",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b28",
      type: "unload",
      name: "Diğer",
    },
  ],
  range: [
    {
      _id: "62b14d9d7810ae9b35ea4b29",
      type: "range",
      name: "1 KM",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b2a",
      type: "range",
      name: "5 KM",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b2b",
      type: "range",
      name: "10 KM",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b2c",
      type: "range",
      name: "15 KM",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b2d",
      type: "range",
      name: "25 KM",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b2e",
      type: "range",
      name: "50 KM",
    },
  ],
  package: [
    {
      _id: "62b14d9d7810ae9b35ea4b2f",
      type: "package",
      name: "Paketli",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b30",
      type: "package",
      name: "Paketsiz",
    },
  ],
  cargo: [
    {
      _id: "62b14d9d7810ae9b35ea4b31",
      type: "cargo",
      name: "2. El Araç",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b32",
      type: "cargo",
      name: "Sağlık Ürünleri",
    },
  ],
  tonnage: [
    {
      _id: "62b14d9d7810ae9b35ea4b33",
      type: "tonnage",
      name: "1-3 Ton",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b34",
      type: "tonnage",
      name: "4-7 Ton",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b35",
      type: "tonnage",
      name: "8-10 Ton",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b36",
      type: "tonnage",
      name: "11-20 Ton",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b37",
      type: "tonnage",
      name: "21-50 Ton",
    },
  ],
  start: [
    {
      _id: "62b14d9d7810ae9b35ea4b38",
      type: "start",
      name: "Hemen",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b39",
      type: "start",
      name: "Tarih Seç",
    },
  ],
  end: [
    {
      _id: "62b14d9d7810ae9b35ea4b3a",
      type: "end",
      name: "1 Hafta",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b3b",
      type: "end",
      name: "10 Gün",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b3c",
      type: "end",
      name: "1 Ay",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b3d",
      type: "end",
      name: "Tarih Seç",
    },
  ],
  
};
```

### Mock tanım verileri 


```ts

export const weightUnits = [
  { label: "KG", value: "kg" },
  { label: "TON", value: "ton" },
];

export const meterUnits = [
  { label: "m", value: "m" },
  { label: "cm", value: "cm" },
];

export const currencies = [
  { label: "TL", value: "try" },
  { label: "USD (US Dollar)", value: "usd" },
  { label: "EUR (Euro)", value: "eur" },
];

export const paymentMethods = [
  { label: "Peşin", value: "cash" },
  { label: "Vadeli", value: "credit" },
  { label: "Yükleme Üzerine Nakit/Havale", value: "on_load" },
  { label: "Boşaltma Üzerine Nakit/Havale", value: "on_unload" },
  { label: "Telefon İle Görüşülecek", value: "with_phone" },
];

export const vatOptions = [
  { label: "KDV Dahil", value: 'include' },
  { label: "KDV Hariç", value: 'exclude' },
];

export const typeOptions = [
  { label: "Açık Fiyat", value: "public" },
  { label: "Sabit Fiyat", value: "static" },
];

export const unloadOptions = [
  { label: "1 Gün", value: "1day" },
  { label: "1-3 Gün İçerisinde", value: "1-3day" },
  { label: "Diğer", value: "other" },
];

export const startOptions = [
  { label: "Hemen", value: "now" },
  { label: "Tarih Seç", value: "date" },
];

export const endOptions = [
  { label: "1 Hafta", value: "1_week" },
  { label: "10 Gün", value: "10_days" },
  { label: "1 Ay", value: "1_months" },
  { label: "Tarih Seç", value: "date" },
];

export const rangeOptions = [
  { label: "1 KM", value: 1000 },
  { label: "5 KM", value: 5000 },
  { label: "10 KM", value: 10000 },
  { label: "15 KM", value: 15000 },
  { label: "25 KM", value: 25000 },
  { label: "50 KM", value: 50000 },
];

```