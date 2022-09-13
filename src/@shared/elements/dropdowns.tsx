import Outside from "@utils/useoutside"
import classNames from "classnames"
import React from "react"
import { FaChevronDown, FaChevronRight } from "react-icons/fa"

export const Dropdown = ({
    title,
    filters,
}:{
    title?:string
    filters?:object[]
}) => {
    const [selected, setSelected] = React.useState('')
    const [open, setOpen] = React.useState(false)
    const handle = () => setOpen(!open)
    return(
        <Outside cb={()=>setOpen(false)} >
        <div 
            className={classNames(
                'relative  w-full rounded-lg bg-white cursor-pointer',
            )} 
        >
           <div className='flex justify-between items-center' onClick={handle}>
            <div className="flex items-start">
                    <p>{title?title:'Filtrele'}:</p>
                    <p className="text-yg-orange mx-2">Sevkiyatı Devam Edenler</p>
                </div>
                <div>
                    {open? <FaChevronDown size={17} className='text-gray-400' /> :
                    <FaChevronRight size={17} className='text-gray-400' /> }
                </div>
           </div>
            <div className={classNames(
                    'dropdown absolute shadow-xl bg-white', 
                    'top-[2.5rem] left-0 right-0 p-4 rounded-xl',
                    {'hidden':!open}
                )}
            >
                    <ul>
                        <li className='text-gray-400 mb-2 hover:text-gray-300' onClick={handle} >
                            Sevkiyatı Devam Edenler
                        </li>
                        <li className='mb-2 hover:text-gray-900' onClick={handle} >
                             Teslimat Onayı Bekleyenler
                        </li>
                        <li className='mb-2 hover:text-gray-900' onClick={handle} >
                             Sevkiyatı Tamamlananlar
                        </li>
                        <li className='mb-2 hover:text-gray-900' onClick={handle} >
                             Tümünü Göster
                        </li>
                    </ul>
            </div>
        </div>
        </Outside>
    )
}
 