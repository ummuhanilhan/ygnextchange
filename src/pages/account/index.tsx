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
  
  return(
     <React.Fragment>
      {data && (
         <Account 
          uptodate={{
            ...data, 
            birth: new Date(data.birth),
            gender: data.gender ? 1:0
          }}
        />
      )}
     </React.Fragment>
  )
}


AccountPage.Layout = PrivateLayout;
export default AccountPage;
