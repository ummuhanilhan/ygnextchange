import { combineReducers } from '@reduxjs/toolkit'
import auth from './slices/authSlice'
import general from './slices/generalSlice'
import address from './slices/addressSlice'
import definition from './slices/definitionSlice'
import cargo from './slices/cargoSlice'
import vehicle from './slices/vehicleSlice'
import project from './slices/projectSlice'
import notification from './slices/notificationSlice'
import favorite from './slices/favoriteSlice'

export default combineReducers({
    auth,
    general,
    address,
    definition,
    cargo,
    vehicle,
    project,
    notification,
    favorite,
})