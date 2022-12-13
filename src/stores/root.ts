import { combineReducers } from '@reduxjs/toolkit'
import auth from './slices/authSlice'
import user from './slices/userSlice'
import general from './slices/generalSlice'
import address from './slices/addressSlice'
import definition from './slices/definitionSlice'
import cargo from './slices/cargoSlice'
import vehicle from './slices/vehicleSlice'
import offer from './slices/offerSlice'
import project from './slices/projectSlice'
import notification from './slices/notificationSlice'
import favorite from './slices/favoriteSlice'

export default combineReducers({
    auth,
    user,
    general,
    address,
    definition,
    cargo,
    vehicle,
    offer,
    project,
    notification,
    favorite,
})