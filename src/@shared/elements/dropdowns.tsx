import Outside from "@utils/useoutside"
import classNames from "classnames"
import React from "react"
import { FaChevronDown, FaChevronRight } from "react-icons/fa"

export const Dropdown = ({
    title,
    filters,
    className,
    dropdwonClass,
 }:{
    title?:string
    filters?:object[]
     selected?:number
     className?:string
     dropdwonClass?:string
    setSelected?:Function
}) => {
    const [selected, setSelected] = React.useState(3)
    const [open, setOpen] = React.useState(false)
    const handle = () => setOpen(!open)
    const select = (id:number) => setSelected(id)
    return(
        <Outside cb={()=>setOpen(false)} >
        <div 
            className={classNames(
                'relative  w-full rounded-lg bg-white cursor-pointer ',
                className 
            )} 
        >
           <div className='flex justify-between items-center' onClick={handle}>
            <div className="flex items-start">
                    <p>{title?title:'Filtrele'}:</p>
                    <p className="text-yg-orange mx-2">
                        {/** @ts-ignore */}
                        {(filters[parseInt(selected-1)]||filters[0])?.title}
                    </p>
                </div>
                <div>
                    {open? <FaChevronDown size={15} className='text-gray-400' /> :
                    <FaChevronRight size={15} className='text-gray-400' /> }
                </div>
           </div>
            <div className={classNames(
                    'dropdown absolute shadow-xl bg-white', 
                    'top-[2.5rem] z-30 w-auto w-72- p-4 right-0 rounded-xl',
                    {'hidden':!open},
                    dropdwonClass
                )}
            >
                    <ul>
                       {filters?.map((item:any)=>(
                        <li className={classNames(
                            {'text-gray-400 hover:text-gray-300':selected===item.id},
                            'hover:text-gray-900 py-1')} 
                            onClick={e=>{
                                handle()
                                setSelected(item.id)
                             }} 
                            key={`menu-${item.id}`}
                        >
                            {item.title}
                        </li>
                       ))}                           
                    </ul>
            </div>
        </div>
        </Outside>
    )
}
 