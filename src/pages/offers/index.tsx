import React, { useEffect, useState } from "react";
import { FilterHeading } from "@components/cargo/heading/filter";
import { CargoItem } from "@components/cargo/view/cargoItem";
import { VehicleItem } from "@components/cargo/view/vehicleItem";
import { Frame } from "@components/frames/MainFrame";
import PrivateLayout from "@layouts/PrivateLayout";
import TabLayout from "@layouts/TabLayout";
import { SimplePagination } from "@shared/paginations";
import { fetcher } from "@utils/helper";
import { useOffer } from "@utils/hooks/useOffer";
import { items, OfferReverse, OfferRoute, offerTabMenu } from "@utils/mock";
import classNames from "classnames";
import useSWR from "swr";
import { useAppDispatch } from "stores/store";
import { useSelector } from "react-redux";
import { filters, findAll, selectOffer } from "stores/slices/offerSlice";
import { LoadingState } from "stores/types";
import { Empty } from "@utils/empty";

export const Offers = () => {
    const [selected, setSelected] = React.useState(String(1));

    return <OfferDummy />
}

Offers.Layout = PrivateLayout;

export default Offers;

export const OfferDummy = ({actionType}:any)=>{
    const [selected, setSelected] = React.useState<any>({tab:String(1), filter:1}); 
    const [param, setParam] = useState([]);
    const dispatch = useAppDispatch();
    const { offers, error, loading } = useSelector(selectOffer);
   
    useEffect(()=>{
        // offers?.length <= 0 && dispatch(findAll('id')) 
    },[]) 
   
    useEffect(()=>{
        dispatch(filters({
            route:actionType,
            status:OfferReverse[selected?.tab]
        }))
    },[actionType, selected])

    const handleFilter = (slug:any) => {
        setSelected({...selected, filter:OfferRoute[slug]})
    }

    const Offers = offers?.map((item:any,i:number)=>(
        <CargoItem 
            item={item.cargo} 
            key={`vehicle-active-${i}`}  
            // @ts-ignore
            actionType={`${actionType}-${OfferReverse[selected?.tab]}`} 
        />
    ))
    return (
        <Frame>
            <FilterHeading 
                type={actionType}
                actionType={`${actionType}-${OfferReverse[selected?.tab]}`}
                filter={selected?.filter}
                callback={handleFilter}
            />
            <TabLayout 
                selected={selected}
                setSelected={setSelected}
                data={offerTabMenu}
                filter={selected?.filter}
                routes={OfferRoute}
                filterize
                type='vehicle'
            >
            <React.Fragment>
                {offers?.length<=0 && loading!=LoadingState.LOADING && <Empty />}
                {error && <div>failed to load</div>}
                { loading==LoadingState.LOADING && (
                     <div className='bg-white- p-4 rounded-md
                     space-y-4 divide-y divide-gray-200 
                     animate-pulse dark:divide-gray-700 md:p-6
                     '>
                         <div className="flex items-center justify-between">
                             <div>
                                 <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                                 <div className="w-72 h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                 <div className="w-72 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                             </div>
                             <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                         </div>
                     </div>
     
                )}

               

                <div className={classNames({'hidden': OfferRoute.inshipment != parseInt(selected?.tab) })}>{Offers}</div>
                <div className={classNames({'hidden': OfferRoute.Accepted != parseInt(selected?.tab) })}>{Offers}</div>
                <div className={classNames({'hidden': OfferRoute.Pending != parseInt(selected?.tab) })}>{Offers}</div>
            </React.Fragment>
            </TabLayout>
            <SimplePagination />
    </Frame>
    )
}