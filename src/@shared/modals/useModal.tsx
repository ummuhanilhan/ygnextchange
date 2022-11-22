import React from "react";
import { useModal } from "stores/features/useModal";
import { CargoModal } from "./cargo";
import Classic, { modalState } from "./classic";
 
const modal = (val:string, values:any) => {
    switch (val) {
        case 'show':
            return <CargoModal {...values} />
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