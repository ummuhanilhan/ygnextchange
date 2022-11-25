

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