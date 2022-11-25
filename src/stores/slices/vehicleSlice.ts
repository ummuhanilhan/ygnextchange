import { createAsyncThunk, createSlice, createSelector } from '@reduxjs/toolkit'
import api from '@utils/api'
import { CoreState } from 'stores/store'
import {  LoadingState } from '../types'

const initialState: any = {
  vehicles: [],
  vehicle: {},
  filter: {
    from:'',
    to:'',
  },
  loading: LoadingState.IDLE,
  error: undefined,
  message: '',
}

export const findAll = createAsyncThunk<any>(
  'vehicle/findAll',
  async (_, thunkAPI) => {
      try {
          const response = await api.get(`/vehicles`)
          return response.data?.vehicles

      } catch (error) {
          return thunkAPI.rejectWithValue({ error: (error as Error).message })
      }
  }
)

export const find = createAsyncThunk<string, any>(
  'vehicle/find',
  async (id, thunkAPI) => {
      try {
          const response = await api.get(`/vehicles/${id}`)
          return response.data

      } catch (error) {
          return thunkAPI.rejectWithValue({ error: (error as Error).message })
      }
  }
)

export const create = createAsyncThunk<any, any>(
  'vehicle/create',
  async (values, thunkAPI) => {
      try {
          const response = await api.post(`/vehicles`, {...values})
          return response.data
            
      } catch (error:any) {
        return thunkAPI.rejectWithValue({ error:error?.response?.data?.message })
      }
  }
)

export const update = createAsyncThunk<any, any>(
  'vehicle/update',
  async ({id, values}, thunkAPI) => {
      try {
          const response = await api.post(`/vehicles`,{id, ...values})
          return response.data
            
      } catch (error:any) {
          return thunkAPI.rejectWithValue({ error:error?.response?.data?.message })
      }
  }
)


const vehicleSlice = createSlice({
  name: 'vehicle',
  initialState,
  reducers: {
    refresh: (state, action) => {
        state.vehicles = action.payload 
    },
    clear: (state) => {
      state.message = ''
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(findAll.fulfilled, (state,action) => {
      state.message = '' 
      state.vehicles = action.payload 
      state.loading = LoadingState.LOADED
    })
    
    // FIND
    builder.addCase(find.rejected, (state)=>{state.loading= LoadingState.ERROR})
    builder.addCase(find.pending, (state)=>{state.loading= LoadingState.LOADING})
    builder.addCase(find.fulfilled, (state,action) => {
      state.message = '';
      state.vehicle = action.payload; 
      state.loading = LoadingState.LOADED;
    })

    // CREATE
    builder.addCase(create.pending, (state)=>{
      state.message = ''
      state.error=false;
      state.loading= LoadingState.LOADING
    })
    builder.addCase(create.fulfilled, (state,action) => {
      state.message = '' 
      if(state.vehicles.length>0)
        state.vehicles = [action.payload, ...state.vehicles] 
      else
        state.vehicles = [action.payload] 

      state.message = 'Başarı ile oluşturuldu'
      state.loading = LoadingState.LOADED
    })
    builder.addCase(create.rejected, (state, action:any)=>{
      state.error = true;  
      state.message = action.payload?.error; 
      state.loading= LoadingState.ERROR
    })

    // UPDATE
    builder.addCase(update.pending, (state)=>{ 
      state.error=false;
      state.message='';
      state.loading= LoadingState.LOADING})
    builder.addCase(update.fulfilled, (state)=>{
       state.error=false;
       state.message = '';
      state.loading= LoadingState.LOADED
    })
    builder.addCase(update.rejected, (state, action:any)=>{
      state.error = true;  
      state.message = action.payload?.error; 
      state.loading= LoadingState.ERROR
   })

  }
})

/**
 * Extract count from root state
 *
 * @param   {Object} state The root state
 * @returns {number} The current count
 */
//export const Vehicle = (state: CoreState) => state.vehicle
export const Vehicle = createSelector(
  (state: CoreState) => ({
    vehicles: state.vehicle.vehicles,
    filter: state.vehicle.filter,
    message: state.vehicle.message,
    error: state.vehicle.error,
    loading: state.vehicle.loading
  }),
  (state) => state
)

export const {
  refresh,
  setFilter,
  clear,
} = vehicleSlice.actions
 
export default vehicleSlice.reducer
