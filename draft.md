

- Ağırlık giriniz: fee.price.tonnage
- Birim fiyat giriniz: fee.price.unit
- Toplam Tutar: fee.price.unit
- yük cinsi: payload.type
- yük tanımı: payload.definition


- Yükleme Şekli: payload.transport.load
- Boşaltma Şekli: payload.transport.unload
- Ağırlık: payload.weight
- Ebat: payload.volume
- Ebat: payload.dimensions
- Ödeme Şekli: fee.paymethod
- Para Birimi: fee.currency
- Kdv Durumu: fee.vat
- Fiyat Görüşülür: fee.bargain
- Tutar belirteceğim: fee.price.amount
- Ücret Hesaplayıcı: fee.price.tonnage / unit / total
- Yükleme / Boşaltma Adresi: shipping.load / unload
- Boşaltma Zamanı: shipping.time
- Yükleme Tarih Aralığı: shipping.range

- Araç Özellikleri: rent.features
- Donanım seçenekleri: rent.options
- Araç markası: rent.type
- Araç tipi: rent.vehicle




```json

{
    "_id": "637c04e2d7812fbb5c9a4231",
    "user": {
        "_id": "6372896dc8297c87a97f91c3",
        "name": "Tester Tester",
        "slug": "tester-tester"
    },
    "privacy": "drafted",
    "progress": "pending",
    "viewing": 0,
    "rent": {
        "vehicle": "semitruck",
        "type": "parsiel",
        "features": [],
        "options": []
    },
    "shipping": {
        "range": [
            "2021-09-30T21:00:00.000Z",
            "2021-10-04T21:00:00.000Z"
        ],
        "time": "63728b818628c49d822e8c2a",
        "time-custom": "93 sene sonra",
        "load": {
            "geolocation": {
                "lat": 37.94205600840452,
                "lng": 30.85136032104491
            },
            "place": {
                "address": "Mahmatlar/Eğirdir/Isparta, Türkiye",
                "street": ""
            },
            "direction": { 
                "city": "isparta",
                "country": {
                    "code": "TR",
                    "name": "Türkiye"
                }
            },
            "contact": {
                "name": "test",
                "phone": "0123 132 13 12",
                "verify": false
            }
        },
        "unload": {
            "geolocation": {
                "lat": 38.47726887091417,
                "lng": 35.663372039794915
            },
            "place": {
                "address": "Akdere, Akdere Tekir Yayla Yolu, 38900 Tomarza/Kayseri, Türkiye",
                "street": "No: Akdere Tekir Yayla Yolu"
            },
            "direction": {
                "city": "kayseri",
                "country": {
                    "code": "TR",
                    "name": "Türkiye"
                }
            },
            "contact": {
                "name": "tester",
                "phone": "0213 123 12 31",
                "verify": false
            }
        },
        "distance": {
            "text": "557 KM",
            "value": 557030
        },
        "duration": {
            "text": "7 SAAT 6 DAKIKA",
            "value": 25586
        }
    },
    "payload": {
        "bargain": true,
        "type": "yük cinsi",
        "definition": "yük tanımı",
        "transport": {
            "load": "63728b818628c49d822e8c0e",
            "unload": "63728b818628c49d822e8c0c"
        },
        "package": "",
        "stow": false,
        "porter": false,
        "weight": {
            "size": "325.968",
            "unit": "kg"
        },
        "volume": {
            "size": "77.23",
            "unit": "m"
        },
        "dimensions": {
            "length": "259.735",
            "width": "921,33",
            "height": "77,550",
            "unit": "kg"
        },
        "tonnage": {
            "range": ""
        },
        "freight": {
            "density": 0,
            "volume": 0
        }
    },
    "fee": {
        "manual": false,
        "price": {
            "amount": true,
            "unit": 325,
            "tonnage": 123,
            "total": 3936
        },
        "paymethod": "onload",
        "currency": "try",
        "vat": "exclude",
        "bargain": true
    },
    "publish": {
        "start": {
            "date": "2022-07-20T03:38:16.322Z",
            "option": "now"
        },
        "end": {
            "date": "2022-07-27T03:38:16.322Z",
            "option": "10day"
        }
    },
    "updated_at": "2022-11-21T23:08:18.628Z",
    "created_at": "2022-11-21T23:08:18.627Z",
    "__v": 0,
    "id": "637c04e2d7812fbb5c9a4231"
}

```

```js


// UPDATE CARGO ITEM
{
    "rent": {
        "vehicle": "18wheeler",
        "type": "comple",
        "features": [],
        "options": []
    },
    "shipping": {
        "range": [
            "2021-10-06T21:00:00.000Z",
            "2021-10-21T21:00:00.000Z"
        ],
        "time": "62b14d9d7810ae9b35ea4b26",
        "time-custom": "93 sene sonra",
        "load": {
            "geolocation": {
                "lat": 39.72405885532804,
                "lng": 35.13498423993587
            },
            "place": {
                "address": "İsimsiz Yol, 66700 Temrezli/Sorgun/Yozgat, Türkiye",
                "street": ""
            },
            "direction": {
                "city": "Yozgat",
                "country": {
                    "code": "TR",
                    "name": "Türkiye"
                },
                "district": "Sorgun"
            },
            "contact": {
                "name": "tester test test",
                "phone": "23123123",
                "email": "tester",
                "verify": false
            },
            "title": "adres başlığı 33",
            "directions": "tarifi eklenecek"
        },
        "unload": {
            "geolocation": {
                "lat": 38.47726887091417,
                "lng": 35.663372039794915
            },
            "place": {
                "address": "Akdere, Akdere Tekir Yayla Yolu, 38900 Tomarza/Kayseri, Türkiye",
                "street": "No: Akdere Tekir Yayla Yolu"
            },
            "direction": {
                "city": "kayseri",
                "country": {
                    "code": "TR",
                    "name": "Türkiye"
                }
            },
            "contact": {
                "name": "tester",
                "phone": "0213 123 12 31",
                "verify": false
            }
        },
        "distance": {
            "text": "557 KM",
            "value": 557030
        },
        "duration": {
            "text": "7 SAAT 6 DAKIKA",
            "value": 25586
        }
    },
    "payload": {
        "bargain": true,
        "type": "yük cinsi",
        "definition": "yük tanımı 2",
        "transport": {
            "load": "62b14d9d7810ae9b35ea4b0a",
            "unload": "62b14d9d7810ae9b35ea4b0a"
        },
        "package": "",
        "stow": false,
        "porter": false,
        "weight": {
            "size": "123123",
            "unit": "kg"
        },
        "volume": {
            "size": "5435",
            "unit": "m"
        },
        "dimensions": {
            "length": "259.735",
            "width": "1233",
            "height": "4535",
            "unit": "kg"
        },
        "tonnage": {
            "range": ""
        },
        "freight": {
            "density": 0,
            "volume": 0
        }
    },
    "fee": {
        "manual": false,
        "price": {
            "amount": true,
            "unit": 555,
            "tonnage": 35,
            "total": 19425
        },
        "paymethod": "onload",
        "currency": "try",
        "vat": "include",
        "bargain": true
    },
    "publish": {
        "start": {
            "date": "2022-07-06T21:00:00.000Z",
            "option": "62b14d9d7810ae9b35ea4b0a"
        },
        "end": {
            "date": "2022-07-29T21:00:00.000Z",
            "option": "62b14d9d7810ae9b35ea4b09"
        }
    }
}

// OLD
{
    "rent": {
        "vehicle": "truck",
        "type": "parsiel",
        "features": [
            "62b14d9d7810ae9b35ea4b52",
            "62b14d9d7810ae9b35ea4b54",
            "62b14d9d7810ae9b35ea4b5a",
            "62b14d9d7810ae9b35ea4b5b",
            "62b14d9d7810ae9b35ea4b5c",
            "62b14d9d7810ae9b35ea4b5d"
        ],
        "options": [
            "62b14d9d7810ae9b35ea4b72",
            "62b14d9d7810ae9b35ea4b73",
            "62b14d9d7810ae9b35ea4b74",
            "62b14d9d7810ae9b35ea4b75"
        ]
    },
    "shipping": {
        "range": [
            "2021-09-30T21:00:00.000Z",
            "2021-10-04T21:00:00.000Z"
        ],
        "time": "62b14d9d7810ae9b35ea4b27",
        "time-custom": "93 sene sonra",
        "load": {
            "geolocation": {
                "lat": 37.94205600840452,
                "lng": 30.85136032104491
            },
            "place": {
                "address": "Mahmatlar/Eğirdir/Isparta, Türkiye",
                "street": ""
            },
            "direction": {
                "city": "isparta",
                "country": {
                    "code": "TR",
                    "name": "Türkiye"
                }
            },
            "contact": {
                "name": "test",
                "phone": "0123 132 13 12",
                "verify": false
            }
        },
        "unload": {
            "geolocation": {
                "lat": 38.47726887091417,
                "lng": 35.663372039794915
            },
            "place": {
                "address": "Akdere, Akdere Tekir Yayla Yolu, 38900 Tomarza/Kayseri, Türkiye",
                "street": "No: Akdere Tekir Yayla Yolu"
            },
            "direction": {
                "city": "kayseri",
                "country": {
                    "code": "TR",
                    "name": "Türkiye"
                }
            },
            "contact": {
                "name": "tester",
                "phone": "0213 123 12 31",
                "verify": false
            }
        },
        "distance": {
            "text": "557 KM",
            "value": 557030
        },
        "duration": {
            "text": "7 SAAT 6 DAKIKA",
            "value": 25586
        }
    },
    "payload": {
        "bargain": true,
        "type": "yük cinsi",
        "definition": "yük tanımı",
        "transport": {
            "load": "62b14d9d7810ae9b35ea4b09",
            "unload": "62b14d9d7810ae9b35ea4b0d"
        },
        "package": "",
        "stow": false,
        "porter": false,
        "weight": {
            "size": "325.968",
            "unit": "kg"
        },
        "volume": {
            "size": "77.23",
            "unit": "m"
        },
        "dimensions": {
            "length": "259.735",
            "width": "921,33",
            "height": "77,550",
            "unit": "kg"
        },
        "tonnage": {
            "range": ""
        },
        "freight": {
            "density": 0,
            "volume": 0
        }
    },
    "fee": {
        "manual": false,
        "price": {
            "amount": true,
            "unit": 555,
            "tonnage": 35,
            "total": 19425
        },
        "paymethod": "credit",
        "currency": "usd",
        "vat": "exclude"
    },
    "publish": {
        "start": {
            "date": "2022-07-20T03:38:16.322Z",
            "option": "now"
        },
        "end": {
            "date": "2022-07-27T03:38:16.322Z",
            "option": "10day"
        }
    }
}

// UPDATE
{
 
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
        "time": "tester test deneme",
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
                "type":"home"
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
                "name": "test 2",
                "phone": "0234 234 23 42",
                "type":"home"
            }
        },
        "time-custom": "test deneme 2",
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
        "measurement": {
            "measure": "kg",
            "weight": "152342"
        },
        "type": "yük cinsi 2",
        "define": "yük tanımı 2",
        "transport": "62b870456230c566be927f17"
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
    }
    
}
```