import React, { useState, useEffect } from 'react';
import { getDefinitions, selectDefinition } from "stores/slices/definitionSlice";
import { useSelector } from "react-redux";
import { useAppDispatch } from "stores/store";

export const useDefinitions = () => {
  const dispatch = useAppDispatch();
  const { definitions } = useSelector(selectDefinition)
  const [loaded, setLoaded] = useState(false);
  useEffect(()=>{
      if(!definitions.load) {
          dispatch(getDefinitions())
          setLoaded(false)  
      }
      if(definitions.load) setLoaded(true)
  
  },[definitions])


  return {definitions, loaded};
}