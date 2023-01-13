import { Heart, HeartFill } from "@yukgetir-icons"
import cx from "classnames"
import { useEffect, useState } from "react"
import { useAppDispatch } from "stores/store"

export const Action = ({path, color, title, outline, disabled, onClick}:any) => {
    const disabledItem =  <a href={path} className={cx(
        ` py-1 px-2 border border-transparent cursor-pointer text-sm rounded-md inline-block ml-2`,
        `bg-gray-300 text-white inline-block float-left h-min w-max`
    )} onClick={onClick} >{title}</a>

    const normalItem = <div // href={path} 
    className={cx(
        ` py-1 px-2 border border-transparent cursor-pointer text-sm rounded-md inline-block ml-2`,
        `bg-yg-${color} text-white inline-block float-left h-min w-max`,
        `hover:border-yg-${color} hover:bg-transparent hover:text-yg-${color}`
    )} onClick={onClick} >{title}</div>

    const outlinedItem = <a href={path} className={cx(
        ` py-1 px-2 border cursor-pointer text-sm rounded-md inline-block ml-2`,
        `bg-transparent text-yg-${color} border-yg-${color} inline-block float-left h-min w-max`,
        `hover:border-yg-${color} hover:bg-transparent hover:text-yg-${color}`
    )} onClick={onClick} >{title}</a>

    return !outline? (
       disabled ? disabledItem : normalItem
    ): outlinedItem
}

/**
<Action title='Sil' color='gray' outline path='#' outline />
<Action title='Vazgeç' color='gray' outline path='#' outline />
<Action title='Kopyala' color='blue' path='#' outline />
<Action title='Düzenle' color='blue' path='#' />
<Action title='İlan Detayını Gör' color='orange' path='#' />
<Action title='Sevkiyatı Tamamla' color='green' path='#' />
 */


export const Favorite = ({item}:any) => {
    const dispatch = useAppDispatch();
    const [faved, setFaved] = useState(false)

    useEffect(()=>{
        // isFaved()
    },[])

    const isFaved = async () => {
        // const isfaved: {result:boolean} = await api.get(`/favorites/isfav/` + item._id)
        // if(isfaved.result){
        //     setFaved(true)
        // }else{
        //     setFaved(false);
        // }
    }

    const toggle = async () => {
        // const isfaved: {result:boolean} = await api.post(`/favorites/toggle`,{cargo:item._id})
        // if(isfaved.result){
        //     setFaved(true)
        // }else{
        //     setFaved(false);
        // }
        setFaved(!faved);

    }

    return (
        <div className="inline-block">
            <div 
            onClick={()=>toggle()}
            className='heart rounded-md border border-1 border-yg-orange 
            h-[1.85em] w-[1.85em] flex items-center justify-center ml-2 
            cursor-pointer hover:bg-yg-lightblue'> 
                {faved ? <HeartFill width={15} className='fill-yg-orange' /> : 
                <Heart width={15} className='fill-yg-orange' />}
            </div>
        </div>
    )
}