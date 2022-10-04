import { Refrigerated, Semitruck, Svg18Wheeler, Tractortrailer, Trailer, Truck } from "@shared/vehicleIcons"
import classNames from "classnames"
import { CircleFill, CircleHalf } from "@shared/icons";


export const vehicleMenu = [
    {slug:'trailer', title:'Dorse', icon: <Trailer className="vehicle-icon fill-yg-gray" />  },
    {slug:'refrigerated', title:'Frigofirik', icon: <Refrigerated className="vehicle-icon fill-yg-gray" />  },
    {slug:'truck', title:'Kamyon', icon: <Truck className="vehicle-icon fill-yg-gray" />  },
    {slug:'18wheeler', title:'Kırkayak', icon: <Svg18Wheeler className="vehicle-icon fill-yg-gray" />  },
    {slug:'tractortrailer', title:'Romork', icon: <Tractortrailer className="vehicle-icon fill-yg-gray" />  },
    {slug:'semitruck', title:'Tır', icon: <Semitruck className="vehicle-icon fill-yg-gray" />  },
]

export const VehicleRadio = ({
    name,
    value,
    onChange,
    label,
    children,
    onBlur,
    error ,
    ...rest
}:any) =>{
    return(
        <ul className="w-full vehicle-icons grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {vehicleMenu.map((item,i:number)=>(
                <li 
                    onClick={()=>onChange(item.slug.toLocaleLowerCase())}
                    className={classNames(
                        'text-md mx-1 p-3 bg-white cursor-pointer flex  items-center justify-center flex-col',
                        'border-2 rounded-md border-transparent text-gray-400',
                        {'active': !value ? ++i==1 : (value==item.slug.toLocaleLowerCase())}
                    )}                
                    key={`vehicle-${i}`}
                > {item.icon} <p>{item.title}</p> </li>
            ))}
        </ul>
    )
}

export const RentRadio = ({
    name,
    value,
    onChange,
    placeholder,
    className,
    onBlur,
    error ,
    ...rest
}:any) =>{
    
    return (
        <div className={classNames('grid grid-cols-2 gap-2', className)}>
           {['comple', 'parsiel'].map((val:any,i:number)=>{
            const status = value === val;
            const type = val === 'comple';
            return (
                <div 
                    key={`rent-type-${i}`}
                    className={classNames(
                        'bg-white border border-1  py-3 rounded-md w-full text-center', 
                        'flex justify-center items-center cursor-pointer',
                        status ? 'border-yg-blue' : 'border-transparent'
                    )}
                    onClick={()=>{
                        onChange(val)                  
                    }}
                >
                    <div className='flex items-center'>
                        { type && <CircleFill width={17} className={status ? 'fill-yg-blue': 'fill-yg-gray'} />}
                        { !type && <CircleHalf width={17} className={status ? 'fill-yg-blue': 'fill-yg-gray'} />}
                        <p className={classNames('ml-2',  status ? 'text-yg-blue': 'text-yg-gray')}>
                            { type ? 'Komple' : 'Parsiyel'}
                        </p>
                    </div>
                </div>
            )
           })}
        </div>
    )

}


