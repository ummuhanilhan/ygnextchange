import { Dropdown } from "@shared/elements/dropdowns"
import { Search } from "@shared/elements/searches"
import { pendingOut } from "@utils/mock"
import React from "react"
import { Selectes } from "../view"

export const FilterHeading = ({wide}:any) => {

    return (
        <div className='heading grid grid-cols-1 lg:grid-cols-2 gap-4'>
            <Search placeholder='İlan ara...' />
            <Dropdown 
                className='py-3 px-5'
                dropdwonClass='left-0 top-[3.4rem]'
                filters={pendingOut}
            />
            {wide && <Selectes />}
        </div>
    )
}
