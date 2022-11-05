import classNames from "classnames"
import { FaSearch } from "react-icons/fa"


export const Search = ({value, onChange, placeholder, border}:any) => {
    return(
        <div 
        className={classNames(
            'search bg-white py-3 px-2 flex justify-between rounded-lg',
            {'border':border}
        )} 
        >
            <input 
            type="text" 
            value={value}
            onChange={onChange}
            className="bg-transparent h-full border-0 w-full text-gray-500 px-1 outline-none" 
            placeholder={placeholder} />
            <FaSearch className="fill-yg-blue mx-1 stroke-[1px]" size={18} />
        </div>
    )
}
