import AddressCreate from "@components/account/address/create";
import { AddressList } from "@components/account/address/list";
import React from "react";
import { useModal } from "stores/features/useModal";
import { CargoModal } from "./cargo";
import Classic, { modalState } from "./classic";
import { OffersModal } from "./offers";
import { VehicleModal } from "./vehicle";
 
const modal = (val:string, values:any) => {
    switch (val) {
        case 'show-cargo':
            return <CargoModal {...values} />
        break;
        case 'create-address':
            return <AddressCreate {...values} />
        break;
        case 'addresses':
            return <AddressList {...values} />
        break;
        case 'show-vehicle':
            return <VehicleModal {...values} />
        break;
        case 'show-offers':
            return <OffersModal {...values} />
        break;
        default:
        break;
    }
}

export const Modals = () => {
    const props:any = useModal(state=>state);

    return (
        <Classic
            status={props.status}
            close={()=>props.close()}
            styles={props.styles}
        >
            {modal(props.type, props.values)}
        </Classic>
    )

}