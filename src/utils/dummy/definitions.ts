
export const weightUnits = [
  { label: "KG", value: "KG" },
  { label: "TON", value: "TON" },
];

export const meterUnits = [
  { label: "m", value: "M" },
  { label: "cm", value: "CM" },
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
  { label: "KDV Dahil", value: true },
  { label: "KDV Hariç", value: false },
];

export const typeOptions = [
  { label: "Açık Fiyat", value: "public" },
  { label: "Sabit Fiyat", value: "static" },
];

export const unloadOptions = [
  { label: "1 Gün", value: "1 Gün" },
  { label: "1-3 Gün İçerisinde", value: "1-3 Gün İçerisinde" },
  { label: "Diğer", value: "Diğer" },
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
  location: [
    {
      _id: "62b14d9d7810ae9b35ea4b3e",
      type: "location",
      name: "Mola Yerleri",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b3f",
      type: "location",
      name: "Oteller",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b40",
      type: "location",
      name: "Otopark - Tırpark",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b41",
      type: "location",
      name: "Petrol İstasyonları",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b42",
      type: "location",
      name: "Lastikçiler",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b43",
      type: "location",
      name: "Yetkili Servisler",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b44",
      type: "location",
      name: "Kurtarıcı - Çekici",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b45",
      type: "location",
      name: "Yol Yardım Merkezleri",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b46",
      type: "location",
      name: "Tren İstasyonları",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b47",
      type: "location",
      name: "Havalimanları",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b48",
      type: "location",
      name: "Limanlar",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b49",
      type: "location",
      name: "Gümrükler",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b4a",
      type: "location",
      name: "Otoyollar",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b4b",
      type: "location",
      name: "Toptancı Halleri",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b4c",
      type: "location",
      name: "Toptancılar Sitesi",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b4d",
      type: "location",
      name: "Organize Sanayiler",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b4e",
      type: "location",
      name: "Sanayi Siteleri",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b4f",
      type: "location",
      name: "Serbest Bölgeler",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b50",
      type: "location",
      name: "Ticaret Odaları",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b51",
      type: "location",
      name: "Depolar",
    },
  ],
  feature: [
    {
      _id: "62b14d9d7810ae9b35ea4b52",
      type: "feature",
      name: "10 Teker Kamyon açık",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b53",
      type: "feature",
      name: "10 Teker Kamyon kapalı",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b54",
      type: "feature",
      name: "Kırkayak Kamyon açık",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b55",
      type: "feature",
      name: "Kırkayak Kamyon kapalı",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b56",
      type: "feature",
      name: "Isı kontrollü Kamyon/Kırkayak",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b57",
      type: "feature",
      name: "Damperli Kamyon/Kırkayak",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b58",
      type: "feature",
      name: "Canlı hayvan taşıma dorsesi",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b59",
      type: "feature",
      name: "Konteyner Dorsesi(Kılçık Dorse)",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b5a",
      type: "feature",
      name: "Lowbed",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b5b",
      type: "feature",
      name: "Silobas",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b5c",
      type: "feature",
      name: "Tanker",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b5d",
      type: "feature",
      name: "Tır-13.60 Açık",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b5e",
      type: "feature",
      name: "Tır-13.60 Kapalı",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b5f",
      type: "feature",
      name: "Tır 13.60 Kayar Perde/Kalkar Çatı",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b60",
      type: "feature",
      name: "Tır 13.60 Jumbo",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b61",
      type: "feature",
      name: "Tır Damper Dorse 8.60/8.20",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b62",
      type: "feature",
      name: "Tır Havuz Dorse",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b63",
      type: "feature",
      name: "Tır/Kamyon Frigo",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b64",
      type: "feature",
      name: "Tır/Kamyon Tekstil",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b65",
      type: "feature",
      name: "Vinçli kamyon",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b66",
      type: "feature",
      name: "Özel Amaçlı Dorse/Kasa",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b67",
      type: "feature",
      name: "Kamyon tenteli",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b68",
      type: "feature",
      name: "Düz yataklı kamyon",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b69",
      type: "feature",
      name: "Ağır traktör ünitesi",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b6a",
      type: "feature",
      name: "Van/Kutu kamyon",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b6b",
      type: "feature",
      name: "Açık karoser kamyonu",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b6c",
      type: "feature",
      name: "Konteynır kamyonu",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b6d",
      type: "feature",
      name: "Taner",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b6e",
      type: "feature",
      name: "Araba nakil aracı",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b6f",
      type: "feature",
      name: "Damperli kamyon",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b70",
      type: "feature",
      name: "Hayvan taşımacılığı",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b71",
      type: "feature",
      name: "Sıvı gıda tankeri",
    },
  ],
  option: [
    {
      _id: "62b14d9d7810ae9b35ea4b72",
      type: "option",
      name: "Adr'n",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b73",
      type: "option",
      name: "Isı Kontrolü",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b74",
      type: "option",
      name: "Konteyner Kilitli",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b75",
      type: "option",
      name: "Köşebent",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b76",
      type: "option",
      name: "Buzdolabı",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b77",
      type: "option",
      name: "Liftli Arka kapak/Frigo",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b78",
      type: "option",
      name: "Polyester Çadır",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b79",
      type: "option",
      name: "Izotermal",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b7a",
      type: "option",
      name: "Rulo havuzu",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b7b",
      type: "option",
      name: "Saç taban",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b7c",
      type: "option",
      name: "Hidrolik asansör",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b7d",
      type: "option",
      name: "Spanzet/İp",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b7e",
      type: "option",
      name: "Tahta Profil taban",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b7f",
      type: "option",
      name: "Tahta/Mdf Kapak",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b80",
      type: "option",
      name: "Yük askılı",
    },
  ],
  activity: [
    {
      _id: "62b14d9d7810ae9b35ea4b81",
      type: "activity",
      name: "İnşaat",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b82",
      type: "activity",
      name: "Maden",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b83",
      type: "activity",
      name: "Gıda",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b84",
      type: "activity",
      name: "Frigo taşımacılığı",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b85",
      type: "activity",
      name: "Uluslararası lojistik",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b86",
      type: "activity",
      name: "Ağır yük taşımacılığı",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b87",
      type: "activity",
      name: "Yurt içi taşımacılık",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b88",
      type: "activity",
      name: "Depo hizmetleri",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b89",
      type: "activity",
      name: "Antrepo",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b8a",
      type: "activity",
      name: "Tarım",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b8b",
      type: "activity",
      name: "Perakende",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b8c",
      type: "activity",
      name: "Toptan",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b8d",
      type: "activity",
      name: "Meyve Sebze",
    },
    {
      _id: "62b14d9d7810ae9b35ea4b8e",
      type: "activity",
      name: "Hammadde",
    },
  ],
};
