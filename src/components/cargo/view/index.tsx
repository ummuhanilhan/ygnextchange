import TabLayout from "@layouts/TabLayout"
import { SimplePagination } from "@shared/paginations"
import { CargoRoute, cargoTabMenu, items } from "@utils/mock"
import classNames from "classnames"
import React from "react"
import {  FiMinusCircle, FiXCircle } from "react-icons/fi"
import { Heading } from "../heading"
import { CargoItem } from "./cargoItem"


export const View = ({wide, tabs}:any) => {
    const [selected, setSelected] = React.useState(1);

    return ( // {'ml-[18.8em] p-3':!wide}
        <div className={classNames('view mt-4 rounded-lg bg-gray-50 h-full', )}> 
            {/** <Heading wide />  */}
            {
                tabs &&
                <Tabs 
                    selected={selected}
                    setSelected={setSelected}
                />
            }
            {[
            ...items
            ].map((item,i:number)=>(
                <CargoItem 
                    item={item} 
                    key={`cargo-item-${i}`} 
                    actionType='cargoes' 
                    status={selected===1}  
                />
            ))}
            <SimplePagination />
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
 

export const Tabs = ({selected, setSelected}:any) =>{

    return (   
        <React.Fragment> 
           <div className="mt-0">
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