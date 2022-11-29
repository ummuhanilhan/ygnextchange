import TabLayout from "@layouts/TabLayout"
import { SimplePagination } from "@shared/paginations"
import { CargoRoute, cargoTabMenu, dummyItems, items } from "@utils/mock"
import classNames from "classnames"
import React, { useEffect, useState } from "react"
import {  FiMinusCircle, FiXCircle } from "react-icons/fi"
import { Heading } from "../heading"
import { CargoItem } from "./cargoItem"
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
    isLoading: !error && !data,
    error
  }
}

export const View = ({wide, filter, type, tabs, forwardRef}:any) => {
    const filters:any = useFilter(state=>state)    
    const [selected, setSelected] = React.useState(1);
    const [limit, setLimit] = React.useState(10)
    const [page, setPage] = React.useState(0)
    const [currentPage, setCurrentPage] = React.useState(0);
    const dispatch = useAppDispatch();
    const {definitions} = useSelector(selectDefinition);
    const [param, setParam] = useState([])

    React.useEffect(()=>{
        !definitions.load && dispatch(getDefinitions());
    },[])

    useEffect(()=>{
        setParam(filters.filters)
    },[filters])
   
    const { data, isLoading, error }:any = 
    useQuery(`cargo/filter?skip=${currentPage}&limit=${limit}`, param) 
    
    const [total, setTotal] = React.useState(data?.meta?.total-1);

    const currentTableData = React.useMemo(() => {
        const firstPageIndex = (currentPage - 1) * limit;
        const lastPageIndex = firstPageIndex + limit;
        return data?.cargoes?.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);
 
    return ( 
        <React.Fragment>
          
            <div 
                ref={forwardRef}
                className={classNames('view mt-4- rounded-lg',
                'bg-gray-50 h-full',  
                {'lg:ml-[18.8em] p-3':!wide}
                )}> 
                    <Heading filter={filter} />
                    {
                        tabs &&
                        <Tabs 
                            selected={selected}
                            setSelected={setSelected}
                        />
                    }

                   <Cargoes 
                        data={data?.cargoes}
                        selected={selected}
                        type={type}
                        error={error}
                        isLoading={isLoading}
                   />
                </div>
        </React.Fragment>

    )
}

export const Cargoes = ({
data,
selected,
type,
error,
isLoading,

}:any) => {
    return(
        <React.Fragment>
               { data?.map((item:any,i:number)=>( // dummyItems
                    <CargoItem 
                        item={item} 
                        key={`cargo-item-${i}`} 
                        actionType={type} 
                        status={selected===1}  
                    />
                ))}

                {error && <h3>Bir şeyler ters gitti!</h3>}
                
                {isLoading && ( // spinner
                    <div className="flex flex-center w-full justify-center">
                        {/** <img src="/assets/empty.svg" className="h-40"  /> */}
                        Loading...
                    </div>
                )}
                {[...items]?.length<=0 && (
                    <h1>Sonuç yok</h1>
                )}
                

                {[
                // ...items
                ].map((item,i:number)=>(
                    <CargoItem 
                        item={item} 
                        key={`cargo-item-${i}`} 
                        actionType={type} 
                        status={selected===1}  
                    />
                ))}
            <SimplePagination />
        </React.Fragment>
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