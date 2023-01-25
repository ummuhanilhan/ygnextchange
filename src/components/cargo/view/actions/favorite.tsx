import { Eye, Heart, HeartFill } from "@yukgetir-icons"
import api from "@utils/api"
import { useAppDispatch } from "stores/store"
import { useEffect, useState } from "react"

export const Faved = ({fav, toggle}:any) => (
    <div className="inline-block">
        <div 
        onClick={()=>toggle()}
        className='heart rounded-md border border-1 border-yg-orange 
        h-[1.85em] w-[1.85em] flex items-center justify-center ml-2 
        cursor-pointer hover:bg-yg-lightblue'> 
            {fav ? <HeartFill width={15} className='fill-yg-orange' /> : 
            <Heart width={15} className='fill-yg-orange' />}
        </div>
    </div>
)

export const Viewed = ({item}:any) => (
    <div className='inline-block'>
        <div className='view flex flex-col items-center'>
            <Eye width={15} className='fill-gray-400' />
            <p className='text-gray-400 text-sm'>{item?.viewed}</p>
        </div>
    </div>
)

const isFaved = async ({item, setFav}:any) => {
    if(item?._id){
        const isfaved: {result:boolean} = await api.get(`/favorites/isfav/` + item._id)
        //@ts-ignore
        if(isfaved?.data?.result){
            setFav(true)
        }else{
            setFav(false);
        }
    }
}

const getCount = async ({item, setCount}:any) => {
    if(item?._id){
        const counter = await api.get(`/offers/${item._id}/count`)
        //@ts-ignore
        if(counter?.data){
            setCount(counter?.data)
        }
    }
}

const toggle = async ({item, setFav}:any) => {
    if(item?._id){

        const isfaved: {result:boolean} = await api.post(`/favorites/toggle`,{cargo:item._id})
        //@ts-ignore
        if(isfaved?.data?.result){
            setFav(true)
        }else{
            setFav(false);
        }
        // setFav(!fav);
    }else{
        console.log(item)
    }

} 

export const Favorite = ({item}:any) => {
    const [faved, setFaved] = useState(false)

    return (
        <div className="inline-block">
            <div 
            onClick={()=>toggle({item, setFaved})}
            className='heart rounded-md border border-1 border-yg-orange 
            h-[1.85em] w-[1.85em] flex items-center justify-center ml-2 
            cursor-pointer hover:bg-yg-lightblue'> 
                {faved ? <HeartFill width={15} className='fill-yg-orange' /> : 
                <Heart width={15} className='fill-yg-orange' />}
            </div>
        </div>
    )
}
