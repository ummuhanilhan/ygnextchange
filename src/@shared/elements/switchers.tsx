
export const Toggle = ({ 
    type,
    name, 
    value, 
    setValue,
    onBlur,
    error 
 }:any) => {
   
   
     return (
        <label htmlFor={name} 
        onChange={()=>setValue(!value)}
        className="inline-flex h-full relative items-center
        cursor-pointer">
            <input 
                type="checkbox"
                id={name}
                className="sr-only peer" 
                defaultChecked={value}
            />
            <div className="w-9 h-5 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full 
            after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
        </label>
     );
 }