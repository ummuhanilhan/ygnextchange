import { FilterHeading } from "@components/cargo/heading/filter";
import { CargoItem } from "@components/cargo/view/cargoItem";
import { Frame } from "@components/frames/MainFrame";
import PrivateLayout from "@layouts/PrivateLayout";
import TabLayout from "@layouts/TabLayout";
import { items, OfferRoute, offerTabMenu } from "@utils/mock";
import classNames from "classnames";
import React from "react";


export const Offers = () => {
    const [selected, setSelected] = React.useState(String(1));

    const dummy = items.map((item,i:number)=>(
        <CargoItem item={item} key={`vehiclle-active-${i}`}  />
    ))

    return (
        <Frame>
        <FilterHeading />
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
        
    </Frame>
    )
}

Offers.Layout = PrivateLayout;

export default Offers;