- - - - - - - - - - - - - - - - - - -                                         *
- sevkiyatı başlat -> pending -> inshipment
- teslimatı onayla -> inshipmnet -> complated
- listeden kaldır -> delete/rejected
- - - - - - - - - - - - - - - - - - -                                         *
- offers 
- cargoes
- - - - - - - - - - - - - - - - - - -                                         *
- status 
- cargo
- - - progress
- - - - - - - - - - - - - - - - - - -                                         *
- pending
- inshipment
- accepted
- rejected

- - - - - - - - - - - - - - - - - - -                                         *
- Ağırlık giriniz: fee.price.tonnage
- Birim fiyat giriniz: fee.price.unit
- Toplam Tutar: fee.price.unit
- yük cinsi: payload.type
- yük tanımı: payload.definition
- - - - - - - - - - - - - - - - - - -                                         *
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
- - - - - - - - - - - - - - - - - - -                                         *
- Araç Özellikleri: rent.features
- Donanım seçenekleri: rent.options
- Araç markası: rent.type
- Araç tipi: rent.vehicle
- - - - - - - - - - - - - - - - - - -                                         *

`&from=${'filter.from'}&to=${filter.to}`

```javascript
// 

// 
```

```javascript
// 

// 
```
```javascript
// 

// 
```

```javascript
// 

// 
```

```javascript
// 

// 
```
```javascript
// 

// 
```

```javascript
// 

// 
```

```javascript
// 

// 
```
```javascript
<Classic 
    status={status} 
    close={setStatus} 
    className='pt-4'
    header={ModalHeader}
    styles={defaultStyles}
    overlay={defaultOverlays}
>
    <SimpleBar style={{ maxHeight: '95vh' }}>
        <AddressCreate 
            id='modal'
            defaultAddress={address}
            update={!!address}
            footer={
                <FormFooter 
                    close={()=>setStatus(!status)} 
                    className='mb-4' 
                />
            }
            border  
        />
    </SimpleBar>
</Classic>
```

```javascript
    //const { data, error } = useOffer({url: '/offers/filter?', data:param, });
    const { data, error, isLoading } = useSWR(`/offers/filter?route=${actionType}&status=${OfferReverse[selected]}`, fetcher, {
        revalidateOnFocus: false,
        revalidateOnMount:false,
        revalidateOnReconnect: false,
        refreshWhenOffline: false,
        refreshWhenHidden: false,
        refreshInterval: 0
      })

    import { useQuery } from "@components/cargo/view";
    const { data, isLoading, error }:any = useQuery(`vehicles`, null, 'get') 


    const { data, isLoading, error }:any = useQuery(`vehicles`, null, 'get') 
    
    if(isLoading) return <>Loading...</>
    if(error) return <>Something went wrong!</>
// 
```
```javascript
const { data, error  } = useSWR(`/cargo/filter?load=${param.load}&unload=${param.unload}`, fetcher, {
    revalidateOnFocus: true,
    revalidateOnMount:true,
    revalidateOnReconnect: false,
    refreshWhenOffline: false,
    refreshWhenHidden: false,
    refreshInterval: 0
})

useEffect(()=>{
    console.log('data', data)
},[data])
```

```javascript
// 
()=>api({
    method,
    url,
    data:values
}).then(res => res.data)
// 
```

```javascript
// 
    
    const offers =  await this.offerModel.aggregate([
      { $match : options },

      {
        $lookup: {
          from: "cargoes",
          localField: "cargo",
          foreignField: "_id",
          as: "cargo"
        }
      },
      {
        $lookup: {
          from: "vehicles",
          localField: "vehicle",
          foreignField: "_id",
          as: "vehicle"
        }
      },
   {
        $match: {
          "cargo.user": 1,
          "vehicle.user": 1
        }
      }
      
      { $sort: {created_at: -1} },
      { $skip: skip }, 
      { $limit: limit }
    ])

    return offers;
    // return this.offerModel.find(options);
// 
```

```javascript
// 


    @Prop({required:true, ref:'User' })                 
    user: mongoose.Schema.Types.ObjectId;

    @Prop({required:true, ref:'User' })                 
    to: mongoose.Schema.Types.ObjectId;

    // offer schema
    
    @Prop({min:0, required:true})
    amount: Number;

    @Prop()
    note: String;

    @Prop({type: Object })
    rent: IRent;
        
    @Prop({type: Object })
    shipping: IShipping;

    @Prop({type:Object})
    contact: IContact;
    
    @Prop({type:Object})
    fee: IFee;
    
    @Prop({type:Object})
    payload: IPayload;
// 
```

```javascript
// 
    const { data, isLoading, error }:any = useQuery(`offers`, null, 'get') 
// 
```

```javascript
// 
import useSWR from 'swr'
import api from "@utils/api";

import { useAppDispatch } from "stores/store"
import { getDefinitions, selectDefinition } from "stores/slices/definitionSlice"
import { useSelector } from "react-redux"
import { useFilter } from "stores/features/filter"

const fetcher = (path:string) => api.get(path).then(res => res.data)

export const useQuery = (url:string, values:any=null, method='post') => {
  const { data, error } = useSWR(url, ()=>api({
    method,
    url,
    data:{
        ...values,
    }
  }).then(res => res.data))

  return {
    data,
    loading: !error && !data,
    error
  }
}
// 
```


```javascript
    const [selected, setSelected] = React.useState(1);
    const [limit, setLimit] = React.useState(10)
    const [page, setPage] = React.useState(0)
    const [currentPage, setCurrentPage] = React.useState(0);
    const dispatch = useAppDispatch();
    const {definitions} = useSelector(selectDefinition);

    React.useEffect(()=>{
        !definitions.load && dispatch(getDefinitions());
    },[])
    
    const [filtering, setfiltering] = useState({})
    useEffect(()=>{
        setfiltering(param)
    },[param])
    
    const { data, loading, error }:any =  useQuery(`cargo/filter?skip=${currentPage}&limit=${limit}`, filtering) 

    const [total, setTotal] = React.useState(data?.meta?.total-1);

    const currentTableData = React.useMemo(() => {
        const firstPageIndex = (currentPage - 1) * limit;
        const lastPageIndex = firstPageIndex + limit;
        return data?.cargoes?.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);
 
       
    
    if(loading) return <>Loading..</>
    if(error) return <>Something is went wrong</>
```



```javascript

   const [param, setParam] = useState([])
   const filters:any = useFilter(state=>state)    
   useEffect(()=>{
       setParam(filters.filters)
   },[filters])


```


```javascript
    // const {setFilter}:any = useFilter(state=>state);
    const [sync, setSync] = React.useState(false);
    const y = useScrollYPosition();
 
    const form = useForm<FilterValues>({
        defaultValues: {
            ...initial,
            ...initialValues
        },
        // resolver: yupResolver(),
    });
    const { register, control, handleSubmit, watch, setValue, formState: { errors } } = form;
    const onSubmit: SubmitHandler<FilterValues> = (data:any) => {
        console.log(
            'load:', data.load,
            'unload:', data.unload,
            'total:', data.fee?.total,
            'price:', data.price,
            'features:', data.rent?.features,
            'options:', data.rent?.options,
            'vehicle:', data.rent?.vehicle, 
            'type:', data.rent?.type
        )
        // setFilter({
        //     ...data,
        // })
    };
    const onError = (errors:any) => console.log(errors)
    onSubmit={handleSubmit(onSubmit, onError)} 

```


```json 
// filter parts 
{
    "shipping": {},
    "payload": {
        "bargain": true,
        "weight": {
            "unit": "kg"
        },
        "volume": {
            "unit": "m"
        },
        "dimensions": {
            "unit": "kg"
        }
    },
    "fee": {
        "manual": true,
        "price": {
            "amount": true,
            "tonnage": null,
            "total": null,
            "unit": null
        }
    },
    "name": "test",
}
 ```


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













































 



<Classic status={newStatus} close={setNew} 
styles={defaultStyles}
overlay={defaultOverlays}
>
<AddressCreate  
    type={type}
    cb={(data:any) => {
        if(data){
            setValue(`shipping.${type}`, data)
            setAddr(data);
        }
    }}
    id='cargo-modal' 
    defaultAddress={addr} 
    update={!!addr} 
    footer={<FormFooter />} 
    border 
/>
</Classic>
{/** List old records  */}
<Classic 
status={listStatus}
close={setList} 
styles={defaultStyles}
overlay={defaultOverlays}

>
<AddressList
    border 
    select={(data:any)=>{
        setValue(`shipping.${type}`, data)
        setAddr(data);
    }} 
/>
</Classic>











































import { ArrowClockwise, CheckCircle, ChevronDown, ChevronRight, Eye, EyeSlash, Share, ShieldLock, XCircle } from "@yukgetir-icons"
import React, { createRef, useEffect, useRef } from "react"
import TR from '@public/assets/flags/tr.svg'
import classnames from "classnames";
import rawCountries from "@utils/dummy/rawCountries";
import tr from "@utils/dummy/countries/tr.json";
import classNames from "classnames";
import { FloatInputProps } from "./inputs";
import Outside from "@utils/useoutside";
import { FiMinimize, FiMinusCircle, FiPlusCircle, FiX } from "react-icons/fi";
import SimpleBar from "simplebar-react";
import 'simplebar-react/dist/simplebar.min.css';

export const Tag = ({ 
  size,
  name,
  placeholder,
  border,
  className,
  mini,
  value,
  onChange,
  items,
  backgroundColor,
  error, 
  rotation,
  success,
  id,
  label,
  type,
  height,
  verifiable,
  verified,
  onBlur,
  appendix,
}:any) => {
    const select = (val:string) => {
        return items.find((f:any)=> f[id] === val )||null
    }
    const selections = (vals:any) => {
        let selects:any = []
        console.log('vals', vals)
        vals?.length>0 && vals?.map((slug:any)=>{
            let item = select(slug._id);
            // slug && 
            selects.push(slug)
        })
        console.log('selects', selects)
        return selects || [];
    }
    const save = (data:string[]) => {
        let values:string[] = [];
        if(values.length>0){
            data.map(d=> values.push(d[id]) )
        }

        if(onChange) onChange(selected)
    }
    const scrollRef = useRef<HTMLUListElement>(null)
    const [open, setOpen] = React.useState(false);
    const [data, setData] = React.useState(items);
    const [selected, setSelected] = React.useState(selections(value));
    const allSelected = selected.length == data.length;

   useEffect(()=>{
       if(onChange) onChange(selected)
   },[selected])

    return (
      <div className={classnames(
          {'error': error},
      'w-full flashback floatinglabel-selects rounded-md relative', 
       className,
       size||'medium',
      {'success': success},
      )}>
          <Outside cb={()=>setOpen(false)} >

          <div 
          className={classNames(
          "select relative rounded-md w-full cursor-pointer",
          backgroundColor||'bg-white',
          border && 'border',
          'flex items-center justify-end',
            size=='medium' && 'h-[4em]',
            size=='small' && 'h-[4em]',
            {'active':open},
            {'passive':!open},
          )}
          >
            <div className="flex items-start w-full">
                
                {mini ? (
                   <TagLabel 
                    open={open}
                    size={size}
                    selected={selected}
                    placeholder={placeholder}
                    name={name}
                /> 
                ) : (
                selected.length<=0 && <TagLabel 
                    open={open}
                    size={size}
                    selected={selected}
                    placeholder={placeholder}
                    name={name}
                />
                )}

                
                <ul 
                    ref={scrollRef}
                    className={classNames(
                        'w-[87%] px-3 z-20 overflow-x-hidden',
                        'flex items-start',
                         mini && 'pt-6 pl-1'
                    )}
                >
                   
                    {selected.map((item:any,i:number)=>{
                        const el = (
                            <li 
                                key={`selected-${i}`}
                                className='float-left mr-1 z-20 flex items-center bg-gray-50 rounded-md p-1 px-2'>
                                <p
                                onClick={()=>setOpen(!open)}
                                className='w-max text-gray-400 pr-1 text-sm'>{item[label]}</p>
                                <FiMinusCircle
                                onClick={()=>{
                                    const newSelected:any = selected.filter((s:any)=>s[id]!=item[id])
                                    setSelected(newSelected)
                                }}
                                className='text-gray-400' />
                            </li>
                        )
                        //if(i<2)
                            return el;
                    })}
                     <li className="lay absolute left-0 top-0 right-0 bottom-0" 
                    onClick={()=>setOpen(!open)}
                    ></li>
                </ul>

                <div className="lay absolute left-0 top-0 right-0 bottom-0" 
                onClick={()=>setOpen(!open)}
                ></div>

            </div>
            {false && selected.length>2 && (
                <div 
                onClick={()=>setOpen(!open)}
                className='absolute right-10 top-[1.25rem] text-gray-700 text-base'>
                {selected.length}</div>
            ) }
            <TagAppend 
                color={!!error?'fill-red-500':'fill-gray-500'}
                status={open}
                setOpen={setOpen}
             />
         </div>
            <ul className={classNames(
              'select-dropdown absolute mt-2',
              'bg-white h-auto z-20 rounded-md w-full',
              'drop-shadow-md overflow-hidden right-0',
               rotation ?  rotation :'top-16',
              {'hidden':!open}
            )}>
                <SimpleBar style={{ maxHeight: '200px' }}>
                <li 
                    className={classNames(
                        'px-3 py-1 flex justify-between items-center cursor-pointer hover:bg-gray-50',
                        false ? 'text-gray-400' : 'text-gray-700'
                    )}
                    onClick={()=>{
                        if(allSelected){
                            setSelected([])
                            if(onChange) onChange()
                        }else{
                            // @ts-ignore
                            setSelected(data)
                            save([])
                        }
                        // selected.length<=0 && setSelected(data)
                        // selected.length>0 && setSelected([])
                    }}
                >
                    <p className={classNames(
                        allSelected && 'text-gray-400'
                    )}>{allSelected ? 'Seçilenleri Kaldır': `Hepsini Seç`}</p>
                    {allSelected ? <FiMinusCircle className='text-gray-400' /> : <FiPlusCircle className='text-gray-700' />}
                    
                </li>
                {data.map((item:any,i:number)=>{
                    const select = selected.find((s:any)=>s[id]===item[id])

                    return (
                    <li 
                        key={`select-${i}`}
                        className={classNames(
                            'px-3 py-1 flex justify-between items-center cursor-pointer hover:bg-gray-50',
                            select ? 'text-gray-400' : 'text-gray-700'
                        )}
                        onClick={()=>{
                            if(!select){
                                const newSelected:any = [item, ...selected];
                                setSelected(newSelected);
                                save(newSelected);
                            }else{
                                const newSelected:any = selected.filter((s:any)=>s[id] != item[id]);
                                setSelected(newSelected);
                                save(newSelected);
                            }
                        }}
                    >
                        <p className=''>{item[label]}</p>
                        {select ? <FiMinusCircle className='text-gray-400' /> : <FiPlusCircle className='text-gray-700' />}
                        
                    </li>
                    )
                })}
                </SimpleBar>
            </ul>
            
          </Outside>
      </div>
    );
} 

/**
 * Appdendix of input 
 * @param type
 * @returns callback
 */
 export const TagAppend = ({
  status,
  removable,
  value,
  setValue,
  onChange,
  setOpen,
}:any) =>{
    
  return (
    <React.Fragment> 
        <div 
        className="cursor-pointer w-22
        absolute top-0 bottom-0 
         h-full bg-blue-500- flex items-center justify-center pl-2 pr-4">
           {value && removable && (
                <div
                    onClick={()=>{setValue(); typeof onChange != undefined && onChange()}}
                >
                        <FiX
                            className={classNames(
                            "icon h-4 top-[30%] icon-gray stroke-gray-700 right-4 mr-1",
                            )} 
                        />

                </div>
           )}

           {status ? (
            <ChevronDown
                onClick={()=>setOpen && setOpen(false)}
                className={classNames(
                "icon h-4 top-[30%] icon-gray stroke-slate-500 right-4",
                )} 
            />
           ):(
            <ChevronRight
              onClick={()=>setOpen && setOpen(false)}
              className={classNames(
                "icon h-4 top-[30%] icon-gray stroke-slate-500 right-4",
              )} 
            />
           )}

        </div>
    </React.Fragment>

  )
}



const TagLabel = ({open,size,selected, placeholder, name}:any) => {

    return(
        <label
            className={classNames(
                'p-2 absolute top-0 left-0 rounded-md flex items-center transition-all duration-200 ease-in-out cursor-pointer',
                false ? "font-medium " : " text-gray-500 ",
                size=='small' ? (open || selected.length>0 ? 'text-sm' : 'text-base pt-5') : '',
                size=='medium' ? (false ? 'text-xs pt-3' : 'text-base pt-5') : '',
                size=='large' ? (false ? 'text-sm' : 'text-base pt-5') : '',
            )}
            htmlFor={name}
            >
            {placeholder}
        </label>
    )
}












export const addFav = createAsyncThunk<any, any>(
  'favorite/add',
  async (values, thunkAPI) => {
      try {
          const response = await api.post(`/favorites/fav`,values)
          return response.data

      } catch (error) {
          return thunkAPI.rejectWithValue({ error: (error as Error).message })
      }
  }
)

 export const unfav = createAsyncThunk<any, any>(
  'favorite/remove',
  async (values, thunkAPI) => {
      try {
          const response = await api.post(`/favorites/unfav`,values)
          return response.data

      } catch (error) {
          return thunkAPI.rejectWithValue({ error: (error as Error).message })
      }
  }
)






"@nestjs/apollo": "^10.1.7",
"apollo-server-express": "^3.10.2",
"supertest": "^6.3.3",
"ts-jest": "29.0.3",
"@types/jest": "29.2.4",
"@types/supertest": "^2.0.12",
"@nestjs/testing": "^9.2.1",


"ejs": "^3.1.8",
"handlebars": "^4.7.7",
"redis": "^4.5.1",

npm install --save aws-serverless-express && npm install --save aws-lambda && npm install --save-dev serverless-plugin-typescript && npm install --save-dev serverless-plugin-optimize && npm install --save-dev serverless-offline plugin



https://mqtxqwbboa.execute-api.us-east-1.amazonaws.com/prod/api/v1/definitions/type

/**
package:
excludeDevDependencies: true
exclude:
  - node_modules/**
  - .git/**
  - .vscode/**        

  
  package:
    exclude:
      - node_modules/libphonenumber-js/**

**/

// lambda.ts
import { Handler, Context } from 'aws-lambda';
import { Server } from 'http';
import { createServer, proxy } from 'aws-serverless-express';
import { eventContext } from 'aws-serverless-express/middleware';

import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from './app.module';

const express = require('express');

// NOTE: If you get ERR_CONTENT_DECODING_FAILED in your browser, this is likely
// due to a compressed response (e.g. gzip) which has not been handled correctly
// by aws-serverless-express and/or API Gateway. Add the necessary MIME types to
// binaryMimeTypes below
const binaryMimeTypes: string[] = [];

let cachedServer: Server;

async function bootstrapServer(): Promise<Server> {
 if (!cachedServer) {
    const expressApp = express();
    const nestApp = await NestFactory.create(AppModule, new ExpressAdapter(expressApp))
    nestApp.use(eventContext());
    await nestApp.init();
    cachedServer = createServer(expressApp, undefined, binaryMimeTypes);
 }
 return cachedServer;
}

export const handler: Handler = async (event: any, context: Context) => {
 cachedServer = await bootstrapServer();
 return proxy(cachedServer, event, context, 'PROMISE').promise;
}


{
  "compilerOptions": {
    "module": "commonjs",
    "declaration": true,
    "removeComments": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "allowSyntheticDefaultImports": true,
    "target": "es2017",
    "sourceMap": true,
    "outDir": "./dist",
    "baseUrl": "./",
    "incremental": true,
    "skipLibCheck": true,
    "allowJs": true,
    "moduleResolution": "node",
    "preserveConstEnums": true,
    "strictNullChecks": false,
    "noImplicitAny": false,
    "strictBindCallApply": false,
    "forceConsistentCasingInFileNames": false,
    "noFallthroughCasesInSwitch": false,
    "esModuleInterop": true
  },
  "include": ["src"],
  "exclude": [
    "node_modules",
    "public",
    "docs/**/*"
  ]
}



<div role="status" className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center">
   
    <div className="w-full">
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5 w-[440px]"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
    </div>
    <div>
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12 mb-2.5 w-[100px]"></div>
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
    </div>

</div>


    'string.alphanum': '{{#label}} must only contain alpha-numeric characters',
    'string.base': '{{#label}} must be a string',
    'string.base64': '{{#label}} must be a valid base64 string',
    'string.creditCard': '{{#label}} must be a credit card',
    'string.dataUri': '{{#label}} must be a valid dataUri string',
    'string.domain': '{{#label}} must contain a valid domain name',
    'string.email': '{{#label}} must be a valid email',
    'string.empty': '{{#label} boş bırakılamaz',
    'string.guid': '{{#label}} must be a valid GUID',
    'string.hex': '{{#label}} must only contain hexadecimal characters',
    'string.hexAlign': '{{#label}} hex decoded representation must be byte aligned',
    'string.hostname': '{{#label}} must be a valid hostname',
    'string.ip': '{{#label}} must be a valid ip address with a {{#cidr}} CIDR',
    'string.ipVersion': '{{#label}} must be a valid ip address of one of the following versions {{#version}} with a {{#cidr}} CIDR',
    'string.isoDate': '{{#label}} must be in iso format',
    'string.isoDuration': '{{#label}} must be a valid ISO 8601 duration',
    'string.length': '{{#label}} length must be {{#limit}} characters long',
    'string.lowercase': '{{#label}} must only contain lowercase characters',
    'string.max': '{{#label}} en fazla {{#limit}} haneli olabilir',
    'string.min': '{{#label}} en az {{#limit}} haneli olabilir',
    'string.normalize': '{{#label}} must be unicode normalized in the {{#form}} form',
    'string.token': '{{#label}} must only contain alpha-numeric and underscore characters',
    'string.pattern.base': '{{#label}} with value {:[.]} fails to match the required pattern: {{#regex}}',
    'string.pattern.name': '{{#label}} with value {:[.]} fails to match the {{#name}} pattern',
    'string.pattern.invert.base': '{{#label}} with value {:[.]} matches the inverted pattern: {{#regex}}',
    'string.pattern.invert.name': '{{#label}} with value {:[.]} matches the inverted {{#name}} pattern',
    'string.trim': '{{#label}} must not have leading or trailing whitespace',
    'string.uri': '{{#label}} must be a valid uri',
    'string.uriCustomScheme': '{{#label}} must be a valid uri with a scheme matching the {{#scheme}} pattern',
    'string.uriRelativeOnly': '{{#label}} must be a valid relative uri',
    'string.uppercase': '{{#label}} must only contain uppercase characters'