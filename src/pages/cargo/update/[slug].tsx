import CargoCreate from "@components/cargo/form";
import Private from "@layouts/PrivateLayout";
import { defaultItem, initial } from "@utils/mock";
import { useDefinitions } from "@utils/useDefinitions";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { find, selectCargo } from "stores/slices/cargoSlice";
import { useAppDispatch } from "stores/store";


export const CargoUpdate = () => {
    const { loaded } = useDefinitions();

    const dispatch = useAppDispatch();
    const router = useRouter();
    const {slug} = router.query
    const {cargo}:any = useSelector(selectCargo)
    useEffect(()=>{
        dispatch(find(slug))
    },[])


    useEffect(()=>{
        console.log('cargo:', cargo)
        console.log('defaultItem:', defaultItem)
    },[cargo])

    return (
        <div>
            { cargo && loaded && (
                 <CargoCreate uptodate init={{
                    ...initial,
                    ...cargo,
                    shipping:{
                        ...cargo.shipping,
                        range: [...cargo.shipping.range.map((date:string)=> date && new Date(date))]
                    }
                    // ...defaultItem,              
                }} />
            )}
        </div>
    )
}

export const CargoUpdatePage = () => {


    return (
        <CargoUpdate />
    )
}


CargoUpdatePage.Layout = Private;

export default CargoUpdatePage;