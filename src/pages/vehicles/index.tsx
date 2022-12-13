import { Heading } from "@components/cargo/heading";
import { FilterHeading } from "@components/cargo/heading/filter";
import { VehicleItem } from "@components/cargo/view/vehicleItem";
import { Frame } from "@components/frames/MainFrame";
import PrivateLayout from "@layouts/PrivateLayout";
import TabLayout from "@layouts/TabLayout";
import { items, menuItems, VehicleRoute, vehicleTabMenu } from "@utils/mock";
import classNames from "classnames";
import React, { useEffect } from "react";
import { useAppDispatch } from "stores/store";
import { findAll, selectVehicle } from "stores/slices/vehicleSlice";
import { useSelector } from "react-redux";


export const Vehicle = () => {
    const [selected, setSelected] = React.useState(String(1));
    
    const dispatch = useAppDispatch()
    const { vehicles, error, loading } = useSelector(selectVehicle)
    useEffect(()=>{
        vehicles?.length <= 0 && dispatch(findAll())
        console.log('vehicles', vehicles)
    },[vehicles])

    return (
        <Frame>
            <Heading />
            <TabLayout 
                selected={selected}
                setSelected={setSelected}
                data={vehicleTabMenu}
                routes={VehicleRoute}
                type='vehicle'
            >
               <React.Fragment>

                    <div className={classNames({'hidden': VehicleRoute.active != parseInt(selected) })}>
                        {vehicles?.map((item:any,i:number)=>(
                            <VehicleItem item={item} key={`vehiclle-active-${i}`} />
                        ))}
                    </div>

                    <div className={classNames({'hidden': VehicleRoute.passive != parseInt(selected) })}>
                        {items.filter((f,i)=>i<2).map((item,i:number)=>(
                            <VehicleItem item={item} key={`vehiclle-pending-${i}`} />
                        ))}
                    </div>

               </React.Fragment>
            </TabLayout>
            
        </Frame>
    )
}

Vehicle.Layout = PrivateLayout;

export default Vehicle;