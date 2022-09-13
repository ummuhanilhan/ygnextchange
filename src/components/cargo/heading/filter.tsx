import { Search } from "@shared/elements/searches"
import React from "react"
import { FaChevronRight } from "react-icons/fa"
import { Selectes } from "../view"


export const FilterHeading = ({wide}:any) => {

    return (
        <div className='heading grid grid-cols-2 gap-4'>
            <Search placeholder='İlan ara...' />
            <div className='flex justify-between items-center w-full rounded-lg bg-white cursor-pointer py-3 px-5'>
                    <div className="flex items-start">
                        <p>Filtrele:</p>
                        <p className="text-yg-orange mx-2">Sevkiyatı Devam Edenler</p>
                    </div>
                <div><FaChevronRight size={17} className='text-gray-400' /> </div>
            </div>
            {wide && <Selectes />}
        </div>
    )
}
