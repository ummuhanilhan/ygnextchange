import PrivateLayout from "@layouts/PrivateLayout";
import { AccountLayout } from "@layouts/AccountLayouts";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Cargoes, View } from "@components/cargo/view";
import { useEffect, useState } from "react";
import { useQuery } from "@utils/helper";

export type FavoriteValues = {
    password: string,
    confirm: string,
    old_password: string,
};

const initialValues = {
    password:'',
    confirm:'',
    old_password:'',
}

export const Favorites = () => {
    const form = useForm<FavoriteValues>({
        defaultValues: initialValues,
        // resolver: yupResolver(),
    });
    const { register, control, handleSubmit, watch, setValue, formState: { errors } } = form;
    const onSubmit: SubmitHandler<FavoriteValues> = data => {
        console.log(data)
        alert(JSON.stringify(data))
    };
    const onError = (errors:any) => {
        console.log(errors)

    };
  const { data, isLoading, error }:any = useQuery(`favorites`, null, 'get') 
    
    const [favorites, setFavorites] = useState([])
    useEffect(()=>{
        getFavorites()
    },[data])

    const getFavorites = () => {
        let favs:any = [];
        data?.map((d:any)=>{
            favs.push(d.cargo);
        }) 
        setFavorites(favs);
    }

    return (
        <AccountLayout>
            <Cargoes 
                data={data}
                selected={1}
                sub
                type='favorites'
                error={error}
                isLoading={isLoading}
            />
         </AccountLayout>
    )
}

Favorites.Layout = PrivateLayout;

export default Favorites;
