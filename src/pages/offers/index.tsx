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
import { clear, filters, findAll, selectOffer } from "stores/slices/offerSlice";
import { LoadingState } from "stores/types";
import { Empty } from "@utils/empty";
import { SkeletonLoading } from "@utils/skeleton";

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
    const { offers, error, loading, act } = useSelector(selectOffer);
   
    useEffect(()=>{
        // offers?.length <= 0 && dispatch(findAll('id')) 
    },[]) 
   
    useEffect(()=>{
        dispatch(filters({
            route:actionType,
            status:OfferReverse[selected?.filter]
        }))
        console.log(OfferReverse[selected?.filter])
    },[actionType, selected, act.loading])

    const handleFilter = (slug:any) => {
        setSelected({...selected, filter:OfferRoute[slug]})
    }

    const Offers = offers?.map((item:any,i:number)=>(
        <CargoItem 
            item={item.cargo} 
            vehicle={item.vehicle} 
            status={item.status}
            offerId={item._id}
            key={`vehicle-active-${i}`}  
            // @ts-ignore
            actionType={`${actionType}-${OfferReverse[selected?.filter]}`} 
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
                     <SkeletonLoading />
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