import React from "react"
import { FaChevronRight } from "react-icons/fa"
import { Selectes } from "../view"


export const Heading = ({wide}:any) => {

    return (
        <div className='heading'>
            <div className='flex justify-between items-center w-full bg-white py-3 px-2'>
                <div className='flex items-center justify-center text-base'>
                    <p>Her sayfada</p>
                    <p className='text-yg-orange ml-2 mr-1'>25</p>
                    <div><FaChevronRight size={17} className='text-gray-400' /></div>
                    <p>İlan göster</p>
                </div>
                <div className='flex items-center'>
                    <p>Sıralama:</p>
                    <p className="text-yg-orange mx-2">Yeniden Eskiye</p>
                    <div><FaChevronRight size={17} className='text-gray-400' /> </div>
                </div>
            </div>
            {wide && <Selectes />}
        </div>
    )
}
