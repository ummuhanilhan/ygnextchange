import { FaSearch } from "react-icons/fa"


export const Search = ({control, placeholder}:any) => {
    return(
        <div className="search bg-white py-3 px-2 flex justify-between rounded-lg">
            <input type="text" className="bg-transparent h-full border-0 w-full text-gray-500 px-1 outline-none" 
            placeholder={placeholder} />
            <FaSearch className="fill-yg-blue mx-1" size={18} />
        </div>
    )
}