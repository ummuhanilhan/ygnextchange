import PrivateLayout from "@layouts/PrivateLayout";
import TabLayout from "@layouts/TabLayout";
import { VehicleRoute, vehicleTabMenu } from "@utils/mock";
import classNames from "classnames";
import React from "react";


export const Vehicle = () => {
    const [selected, setSelected] = React.useState(1);
    
    return (
        <React.Fragment>
            <TabLayout 
                selected={selected}
                setSelected={setSelected}
                data={vehicleTabMenu}
                routes={VehicleRoute}
                type='vehicle'
            >
                    <div className={classNames({'hidden': 1 !=selected})}>

                    </div>
            </TabLayout>
            
        </React.Fragment>
    )
}

Vehicle.Layout = PrivateLayout;

export default Vehicle;