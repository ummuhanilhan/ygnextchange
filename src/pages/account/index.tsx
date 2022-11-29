import PrivateLayout from "@layouts/PrivateLayout";
import React, { useEffect, useState } from "react"
import { useAppDispatch } from "stores/store";
import Account from "@components/account";
import { useSelector } from "react-redux";
import { selectAuth } from "stores/slices/authSlice";
import useSWR from 'swr'
import api from "@utils/api";
import { useQuery } from "@components/cargo/view";

export const AccountPage = () => {
  return(
      <Profile />
  )
}

export const Profile = () => {
  const [type] = useState();
  const [account, setAccount] = useState();
  const dispatch = useAppDispatch();

  const {user}:any = useSelector(selectAuth);

  const { data, isLoading, error }:any = useQuery(`users/${user._id}`, null, 'get') 
  
  useEffect(()=>{
    console.log('data:',data)
    console.log('user._id:',user._id)
  },[data])
 
  return(
      <Account 
        uptodate={data}
      />
  )
}


AccountPage.Layout = PrivateLayout;
export default AccountPage;
