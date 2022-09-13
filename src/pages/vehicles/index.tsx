import { Heading } from "@components/cargo/heading";
import { FilterHeading } from "@components/cargo/heading/filter";
import { Frame } from "@components/frames/MainFrame";
import PrivateLayout from "@layouts/PrivateLayout";
import TabLayout from "@layouts/TabLayout";
import { VehicleRoute, vehicleTabMenu } from "@utils/mock";
import classNames from "classnames";
import React from "react";


export const Vehicle = () => {
    const [selected, setSelected] = React.useState(String(1));
    
    return (
        <Frame>
            <FilterHeading />
            <TabLayout 
                selected={selected}
                setSelected={setSelected}
                data={vehicleTabMenu}
                routes={VehicleRoute}
                type='vehicle'
            >
               <React.Fragment>
                    <div className={classNames({'hidden': VehicleRoute.active != parseInt(selected) })}>1test1</div>
                    <div className={classNames({'hidden': VehicleRoute.passive != parseInt(selected) })}>2test2</div>
               </React.Fragment>
            </TabLayout>
            
        </Frame>
    )
}

Vehicle.Layout = PrivateLayout;

export default Vehicle;