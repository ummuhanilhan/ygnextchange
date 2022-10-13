import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import reducer from './root'

export const store = configureStore({
  reducer,
  devTools:true
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()

export type CoreState = ReturnType<typeof reducer>
