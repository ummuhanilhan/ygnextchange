import { Dropdown } from "@shared/elements/dropdowns"
import { Search } from "@shared/elements/searches"
import { acceptedIn, acceptedOut, inShipmentIn, inShipmentOut, pendingIn, pendingOut } from "@utils/mock"
import React from "react"
import { Selectes } from "../view"

export const FilterHeading = ({
    wide, 
    type,
    actionType
}:any) => {

    const items = (actionType:string) => {
        switch (actionType) {
            case type+'-inshipment':
                return inShipmentIn;   
            break;
            case type+'-accepted':
                return acceptedIn;   
            break;
            case type+'-pending':
                return pendingIn;   
            break;
            case type+'-inshipment':
                return inShipmentOut;   
            break;
            case type+'-accepted':
                return acceptedOut;   
            break;
            case type+'-pending':
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
            />
            {wide && <Selectes />}
        </div>
    )
}
