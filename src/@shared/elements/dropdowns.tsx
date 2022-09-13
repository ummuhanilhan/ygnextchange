import classNames from "classnames"
import React from "react"
import { FaChevronRight } from "react-icons/fa"

export const Dropdown = () => {
    const [selected, setSelected] = React.useState('')
    return(
        <div className='relative flex justify-between items-center w-full rounded-lg bg-white cursor-pointer py-3 px-5'>
            <div className="flex items-start">
                <p>Filtrele:</p>
                <p className="text-yg-orange mx-2">Sevkiyatı Devam Edenler</p>
            </div>
            <div><FaChevronRight size={17} className='text-gray-400' /> </div>
            <div className={classNames('dropdown absolute')}>

            </div>
        </div>
    )
}
 