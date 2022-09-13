import { Dropdown } from "@shared/elements/dropdowns"
import { Search } from "@shared/elements/searches"
import React from "react"
import { Selectes } from "../view"

export const FilterHeading = ({wide}:any) => {

    return (
        <div className='heading grid grid-cols-2 gap-4'>
            <Search placeholder='İlan ara...' />
            <Dropdown />
            {wide && <Selectes />}
        </div>
    )
}
