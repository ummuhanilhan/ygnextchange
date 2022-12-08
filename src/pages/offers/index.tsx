import { FilterHeading } from "@components/cargo/heading/filter";
import { CargoItem } from "@components/cargo/view/cargoItem";
import { VehicleItem } from "@components/cargo/view/vehicleItem";
import { Frame } from "@components/frames/MainFrame";
import PrivateLayout from "@layouts/PrivateLayout";
import TabLayout from "@layouts/TabLayout";
import { SimplePagination } from "@shared/paginations";
import { fetcher } from "@utils/helper";
import { items, OfferReverse, OfferRoute, offerTabMenu } from "@utils/mock";
import classNames from "classnames";
import React from "react";
import useSWR from "swr";

export const Offers = () => {
    const [selected, setSelected] = React.useState(String(1));

    return <OfferDummy />
}

Offers.Layout = PrivateLayout;

export default Offers;

export const OfferDummy = ({actionType}:any)=>{
    const [selected, setSelected] = React.useState(String(1));

    const { data, error } = useSWR('/offers', fetcher)

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>


    const dummy = data?.map((item:any,i:number)=>(
        <VehicleItem 
            item={item.vehicle} 
            key={`vehicle-active-${i}`}  
            // @ts-ignore
            actionType={`${actionType}-${OfferReverse[selected]}`} 
        />
    ))
    return (
        <Frame>
            <FilterHeading 
                type={actionType}
                actionType={`${actionType}-${OfferReverse[selected]}`}
            />
            <TabLayout 
                selected={selected}
                setSelected={setSelected}
                data={offerTabMenu}
                routes={OfferRoute}
                type='vehicle'
            >
            <React.Fragment>

                    <div className={classNames({'hidden': OfferRoute.inshipment != parseInt(selected) })}>
                        {dummy}
                    </div>

                    <div className={classNames({'hidden': OfferRoute.Accepted != parseInt(selected) })}>{dummy}</div>
                    <div className={classNames({'hidden': OfferRoute.Pending != parseInt(selected) })}>{dummy}</div>

            </React.Fragment>
            </TabLayout>
            <SimplePagination />
    </Frame>
    )
}