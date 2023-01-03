import { CargoItem } from "@components/cargo/view/cargoItem";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { offers, selectOffer } from "stores/slices/offerSlice";
import { useAppDispatch } from "stores/store"


export const OffersModal = ({item}:any) => {
    const dispatch = useAppDispatch();
    const {sub_offers, sub_loading, sub_error}:any = useSelector(selectOffer)
    useEffect(()=>{
        if(item?._id){
            dispatch(offers(item._id))
        }
    },[item])
    
    return (
        <div>
            { sub_offers?.map((item:any,i:number)=>(
                <CargoItem 
                    item={item?.cargo} 
                    key={`sub-offers-${i}`}  
                />
            ))}
        </div>
    )
}