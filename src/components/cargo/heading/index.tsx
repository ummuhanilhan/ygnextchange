import { Dropdown } from "@shared/elements/dropdowns"
import { inShipmentOut, ranges } from "@utils/mock"
import React from "react"
import { FaChevronRight } from "react-icons/fa"
import { Selectes } from "../view"


export const Heading = ({selects, filter}:any) => {
  
    return (
        <div className='heading'>
            <div className='flex justify-between items-center rounded-md w-full bg-white py-3 px-2'>
                <div className='flex items-center justify-center text-base'>
                    <Dropdown 
                        title='Her sayfada sırala' 
                        filters={ranges}
                    />
                    <p className='ml-2'>İlan göster</p>
                </div>
              {filter && (
                    <Dropdown 
                    title='Sırala' 
                    filters={filter}
                />
              )}
            </div>
            {selects && <Selectes />}
        </div>
    )
}
