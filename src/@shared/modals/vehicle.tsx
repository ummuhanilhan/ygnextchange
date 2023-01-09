import { TitleFrameDropdown } from "@components/frames/IconFrame";
import { capitalize, currencyFormat, priceFormat } from "@utils/helper";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectDefinition } from "stores/slices/definitionSlice";
import SimpleBar from "simplebar-react";
import { Frame } from "@components/frames/MainFrame";
import { VehicleItem } from "@components/cargo/view/vehicleItem";
import { VehicleRoute } from "@utils/mock";
import classNames from "classnames";
import { Search } from "@shared/elements/searches";
import { SimplePagination } from "@shared/paginations";
import { useAppDispatch } from "stores/store";
import { findAll, selectVehicle } from "stores/slices/vehicleSlice";
import { Empty } from "@utils/empty";
import { LoadingState } from "stores/types";
import { SkeletonLoading } from "@utils/skeleton";

export const VehicleModal = ({item}:any) => {

    const { definitions, formatted } = useSelector(selectDefinition);
    const defined = (name:string) => formatted[name]?.name
    const defines = (values:string[]) => values.map((v:string)=> `${defined(v)} `) || ''
   
    const [status, setStatus] = React.useState(false);
    const [query, setQuery] = React.useState('');

    const dispatch = useAppDispatch()
    const { vehicles, error, loading } = useSelector(selectVehicle)
    useEffect(()=>{
        vehicles?.length <= 0 && dispatch(findAll())
        console.log('vehicles', vehicles)
    },[])
    
    return (
       <React.Fragment>
           <div className='m-3'>
                <div className='grid grid-cols-1 sm:grid-cols-1 -2 gap-2'>
                    <Search 
                        value={query}
                        border
                        onChange={(e:any)=>setQuery(e.target.value)}
                        placeholder='Araçlarımdan seç' 
                    />
                    <p 
                    className='hidden  -flex button bg-yg-blue py-2 px-10 justify-center text-sm
                    items-center text-white rounded-md cursor-pointer'
                    onClick={()=>setStatus(true)}
                    >Yeni Adres Ekle</p>
                </div>
                <SimpleBar style={{ maxHeight: '80vh' }}>
                        { loading == LoadingState.LOADING && (
                            <SkeletonLoading />
                        ) }

                        { loading != LoadingState.LOADING && vehicles?.length<=0 && (
                            <Empty />
                        ) }
                        {vehicles?.map((vehicle:any,i:number)=>(
                            <VehicleItem 
                                item={vehicle} 
                                cargo={item} 
                                key={`vehiclle-active-${i}`} 
                                actionType='vehicle-modal'
                                callback={()=>{

                                }}
                            />
                        ))}
                </SimpleBar>
                <SimplePagination />
           </div>
       </React.Fragment>
    )
} 