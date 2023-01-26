import React from "react"
import { Dropdown } from "@shared/elements/dropdowns"
import { Search } from "@shared/elements/searches"
import { acceptedIn, acceptedOut, inShipmentIn, inShipmentOut, pendingIn, pendingOut } from "@utils/mock"
import { Selections } from "../view"

export const FilterHeading = ({
    wide, 
    type,
    actionType,
    callback,
    filter
}:any) => {

    const items = (actionType:string) => {
        switch (actionType) {
            case 'ingoing-inshipment':
                return inShipmentIn;   
            break;
            case 'ingoing-accepted':
                return acceptedIn;   
            break;
            case 'ingoing-pending':
                return pendingIn;   
            break;
            case 'outgoing-inshipment':
                return inShipmentOut;   
            break;
            case 'outgoing-accepted':
                return acceptedOut;   
            break;
            case 'outgoing-pending':
                return pendingOut;   
            break;
            default:
                return [];
            break;
        }
    }

    return (
        <div className='heading grid grid-cols-1 lg:grid-cols-2 gap-4'>
            <Search placeholder='İlan ara...' />
            <Dropdown 
                className='py-3 px-5'
                dropdwonClass='left-0 top-[3.4rem]'
                filters={items(actionType)}
                callback={callback}
            />
            {wide && <Selections />}
        </div>
    )
}
