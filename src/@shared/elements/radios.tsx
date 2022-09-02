import Trailer from '@public/assets/vehicles/trailer.svg';
import Refrigerated from '@public/assets/vehicles/refrigerated.svg';
import Truck from '@public/assets/vehicles/truck.svg';
import Wheeler18 from '@public/assets/vehicles/18wheeler.svg';
import TractorTrailer from '@public/assets/vehicles/tractortrailer.svg';
import SemiTruck from '@public/assets/vehicles/semitruck.svg';

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
                    className={`${value==item.title.toLocaleLowerCase()}`}                
                    key={`vehicle-${i}`}
                > {item.icon} <p>{item.title}</p> </li>
            ))}
        </ul>
    )
}

export const vehicleMenu = [
    {title:'Dorse', icon: <Trailer size={25} />  },
    {title:'Frigofirik', icon: <Refrigerated size={25} />  },
    {title:'Kamyon', icon: <Truck size={25} />  },
    {title:'Kırkayak', icon: <Wheeler18 size={25} />  },
    {title:'Romork', icon: <TractorTrailer size={25} />  },
    {title:'Tır', icon: <SemiTruck size={25} />  },
]