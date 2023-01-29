import PrivateLayout from "@layouts/PrivateLayout";
import React, { useEffect, useState } from "react"
import { useAppDispatch } from "stores/store";
import Account from "@components/account";
import { useSelector } from "react-redux";
import { selectAuth } from "stores/slices/authSlice";
import { getDefinitions, selectDefinition } from "stores/slices/definitionSlice";
  
import useSWR from 'swr'
import api from "@utils/api";
import { my, selectUser } from "stores/slices/userSlice";
import { useQuery } from "@utils/helper";

export const AccountPage = () => {
  return(
      <Profile />
  )
}

export const Profile = () => {
  const dispatch = useAppDispatch();
  const [type] = useState();
  const [account, setAccount] = useState();
  const {user}:any = useSelector(selectUser);
  const { definitions } = useSelector(selectDefinition)
 const { data, isLoading, error }:any = useQuery(`users/${user._id?user._id:''}`, null, 'get') 

  useEffect(()=>{
      if(!definitions.load) dispatch(getDefinitions())
  },[definitions])

  useEffect(()=>{
    if(!user.slug) dispatch(my())
},[user])

return(
     <React.Fragment>
      {data && definitions.load ? (
         <Account 
          uptodate={{
            ...data, 
            birth: data.birth ? new Date(data.birth) : undefined,
            driver:{
              ...data.driver,
              year: new Date(data?.driver?.year)
            },
            gender: data.gender ? 1:0,
            avatar: process.env.STORAGE + data.avatar,
          }}
        />
      ):'Yükleniyor..'}
     </React.Fragment>
  )
}


AccountPage.Layout = PrivateLayout;
export default AccountPage;
