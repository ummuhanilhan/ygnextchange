import TabLayout from "@layouts/TabLayout"
import { SimplePagination } from "@shared/paginations"
import { CargoRoute, cargoTabMenu } from "@utils/mock"
import { ArrowLeftCircle, ArrowRightCircle, ArrowRightShort, Calendar, Capslock, ChevronDoubleRight, CircleFill, CircleHalf, Clock, Eye, Forward, Geo, Heart, HeartFill, People, Truck } from "@yukgetir-icons"
import classNames from "classnames"
import React from "react"
import { FaChevronRight, FaMinusCircle } from "react-icons/fa"
import { FiArrowLeft, FiArrowRight, FiMinusCircle, FiXCircle } from "react-icons/fi"
import { CargoItem } from "./cargoItem"
import { VehicleItem } from "./vehicleItem"

const items = [
    {type:true, vat:false, corporate:false, price:'15.750', currency:'₺', tax:true, fav:true, view:125, time:'1-3 Gün içerisinde', 
    vehicle:'Tır 13.60 Açık', weight:'27 Ton', date:'22.07.2022 - 25.08.2022', load:'Ankara', unload:'Mersin', 
    distance:'500KM',  },
    {type:false, vat:true, corporate:true, price:'7.35', currency:'₺', tax:false, fav:false, view:76413, time:'1-3 Gün içerisinde', vehicle:'Tır 13.60 Açık', weight:'15 Ton', date:'22.07.2012 - 03.00.2022', load:'Adana', unload:'Ardahan', distance:'3420KM',  },
    {type:false, vat:true, corporate:false, price:'342.875', currency:'₺', tax:true, fav:true, view:8135, time:'1-3 Gün içerisinde', vehicle:'Tır 13.60 Açık', weight:'2 Ton', date:'22.07.2022 - 25.08.2022', load:'Konya', unload:'Diyarakır', distance:'1500KM',  },
    {type:true, vat:false, corporate:true, price:'19.255', currency:'₺', outdated:true, tax:false, fav:true, view:91413, time:'1-3 Gün içerisinde', vehicle:'Tır 13.60 Açık', weight:'5 Ton', date:'22.07.2012 - 03.00.2022', load:'Yozgat', unload:'Hatay', distance:'43420KM',  },
    {type:true, vat:false, corporate:false, price:'93.78', currency:'₺', outdated:true, tax:true, fav:true, view:18413, time:'1-3 Gün içerisinde', vehicle:'Tır 13.60 Açık', weight:'55 Ton', date:'22.07.2012 - 03.00.2022', load:'İstanbul', unload:'Çanakkale', distance:'53420KM',  },
]

export const View = ({wide, tabs}:any) => {

    return (
        <div className={classNames('view rounded-lg bg-gray-50 h-full',{'ml-[18.8em] p-3':!wide})}>
            <Heading wide />
            {tabs && <Tabs /> }
            {[
            ...items
            ].map((item,i:number)=>(
                <VehicleItem item={item} key={`cargo-item-${i}`} />
            ))}
            <SimplePagination />
        </div>
    )
}


export const Heading = ({wide}:any) => {

    return (
        <div className='heading'>
            <div className='flex justify-between items-center w-full bg-white py-3 px-2'>
                <div className='flex items-center justify-center text-base'>
                    <p>Her sayfada</p>
                    <p className='text-yg-orange ml-2 mr-1'>25</p>
                    <div><FaChevronRight size={17} className='text-gray-400' /></div>
                    <p>İlan göster</p>
                </div>
                <div className='flex items-center'>
                    <p>Sıralama:</p>
                    <p className="text-yg-orange mx-2">Yeniden Eskiye</p>
                    <div><FaChevronRight size={17} className='text-gray-400' /> </div>
                </div>
            </div>
            {!wide && <Selectes />}
        </div>
    )
}

const selected = [
    {id:1, title:'Yükleme Yeri: Ankara'},
    {id:2, title:'Boşaltma Yeri: Mersin'},
    {id:3, title:'Yükleme Tarihi: 22.07.2022 - 25.07.2022'},
    {id:4, title:'Boşaltma Zamanı: 1-3 Gün'},
    {id:5, title:'Kiralama Tipi: Parsiyel'},
    {id:6, title:'Fiyat: 7.500 - 12.000 ₺'},
]

export const Selectes = () => {

    return (
        <div className='w-full inline-block mt-2 mb-1'>
            <ul className=''>
                {selected.map((item,i:number)=>(
                    <li key={`selected-${i}`} className='flex justify-between items-center cursor-pointer px-3 p-1 mr-2 mt-2 
                    rounded-md bg-white w-fit float-left'>
                        <p className='text-gray-400 text-sm'> {item.title} </p>
                        <div> <FiMinusCircle  className='text-gray-400 ml-2' size={15} /> </div>
                    </li>
                ))}
                <li className='flex justify-between items-center cursor-pointer px-4 p-1 mr-2 mt-2 
                    rounded-md bg-gray-200 w-fit float-left'>
                    <p className='text-gray-400 text-sm'> Temizle </p>
                    <div> <FiXCircle  className='text-gray-400 ml-2' size={15} /> </div>
                </li>
            </ul>

        </div>
    )
}
 

export const Tabs = () =>{
    const [selected, setSelected] = React.useState(1);

    return (   
        <React.Fragment> 
           <div className="mt-4">
            <TabLayout
                    type='cargo'
                    selected={String(selected)}
                    setSelected={setSelected}
                    data={cargoTabMenu}
                    routes={CargoRoute}
                    numeric
                >
                <div></div>
                </TabLayout>
           </div>

        </React.Fragment>
    )
}