import { Refrigerated, Semitruck, Svg18Wheeler, Tractortrailer, Trailer, Truck } from "@shared/vehicleIcons"
import classNames from "classnames"


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
        <ul className="w-full vehicle-icons">
            {vehicleMenu.map((item,i:number)=>(
                <li 
                    onClick={()=>onChange(item.title.toLocaleLowerCase())}
                    className={classNames(
                        'text-md mx-1 p-3 bg-white cursor-pointer flex  items-center justify-center flex-col',
                        'border-2 rounded-md border-transparent text-gray-400',
                        {'active': !value ? ++i==1 : (value==item.title.toLocaleLowerCase())}
                    )}                
                    key={`vehicle-${i}`}
                > {item.icon} <p>{item.title}</p> </li>
            ))}
        </ul>
    )
}

export const vehicleMenu = [
    {title:'Dorse', icon: <Trailer className="vehicle-icon fill-yukgetir-gray" />  },
    {title:'Frigofirik', icon: <Refrigerated className="vehicle-icon fill-yukgetir-gray" />  },
    {title:'Kamyon', icon: <Truck className="vehicle-icon fill-yukgetir-gray" />  },
    {title:'Kırkayak', icon: <Svg18Wheeler className="vehicle-icon fill-yukgetir-gray" />  },
    {title:'Romork', icon: <Tractortrailer className="vehicle-icon fill-yukgetir-gray" />  },
    {title:'Tır', icon: <Semitruck className="vehicle-icon fill-yukgetir-gray" />  },
]