import classNames from "classnames"
import React from "react"
import { FaChevronDown, FaChevronRight } from "react-icons/fa"

export const Dropdown = () => {
    const [selected, setSelected] = React.useState('')
    const [open, setOpen] = React.useState(false)
    const handle = () => setOpen(!open)
    return(
        <div className='relative  w-full rounded-lg bg-white cursor-pointer py-3 px-5'>
           <div className='flex justify-between items-center' onClick={handle}>
            <div className="flex items-start">
                    <p>Filtrele:</p>
                    <p className="text-yg-orange mx-2">Sevkiyatı Devam Edenler</p>
                </div>
                <div>
                    {open? <FaChevronDown size={17} className='text-gray-400' />  : <FaChevronRight size={17} className='text-gray-400' /> }
                </div>
           </div>
            <div className={classNames(
                    'dropdown absolute shadow-xl bg-white top-[3.5rem] left-0 right-0 p-4',
                    {'hidden':!open}
                )}
            >
                <ul>
                    <li className='text-gray-500 mb-2'>Sevkiyatı Devam Edenler</li>
                    <li className='mb-2'> Teslimat Onayı Bekleyenler</li>
                    <li className='mb-2'> Sevkiyatı Tamamlananlar</li>
                    <li className='mb-2'> Tümünü Göster</li>
                </ul>
            </div>
        </div>
    )
}
 