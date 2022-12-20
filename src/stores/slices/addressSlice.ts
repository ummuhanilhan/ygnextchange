import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit'
import api from '@utils/api'
import { generateRandomNDigits } from '@utils/helper'
import { addressList } from '@utils/mock'
import { CoreState } from 'stores/store'
import { JwtState, LoadingState } from '../types'

const initialState : any = {
  addresses: undefined, // addressList
  address: {},
  addr: {},
  load: {},
  unload: {},
  loading: LoadingState.IDLE,
  error: undefined,
  message: '',
}

/**
 * @returns [Object] Get addresses
 * @method GET
 */
 export const findAll = createAsyncThunk(
  'address/findAll', async (_, thunkAPI) => {
      try {
          const response = await api.get('/address/all')
          return response.data?.addresses;
      } catch (err) {
          return thunkAPI.rejectWithValue({ error: (err as Error).message })
      }
  }
)

/**
 * @returns [Object] Get selected address
 * @method GET
 */
 export const find = createAsyncThunk(
  'address/find', async (id, thunkAPI) => {
      try {
          const response = await api.get(`/address/${id}`)
          return response.data;
      } catch (err) {
          return thunkAPI.rejectWithValue({ error: (err as Error).message })
      }
  }
)

/**
 * @returns Object Create a new address
 * @method POST
 */
 export const create = createAsyncThunk(
  'address/create', async (values:any, thunkAPI) => {
      try {
          const response = await api.post('/address', values)
          return response.data;
      } catch (err) {
          return thunkAPI.rejectWithValue({ error: (err as Error).message })
      }
  }
) 

/**
 * @returns remove to address
 * @method POST
 */
export const remove = createAsyncThunk<any,any>(
  'address/remove', async (id, thunkAPI) => {
      try {
          await api.delete('/address/'+id)
          return id; // response.data
      } catch (err) {
          return thunkAPI.rejectWithValue({ error: (err as Error).message })
      }
  }
) 


/**
 * @returns Updates to address
 * @method POST
 */
export const update = createAsyncThunk<any,any>(
  'address/update', async ({id,values}, thunkAPI) => {
      try {
          const response = await api.patch('/address/'+id, values)
          return response.data;
      } catch (err) {
          return thunkAPI.rejectWithValue({ error: (err as Error).message })
      }
  }
) 

export const addressSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {
    clear:(state) => {
        state.message = ''
        state.address = {}
    },
    addAddress:(state,action) => {
      state.address = action.payload
      state.addresses = [{_id:generateRandomNDigits(13),...action.payload}, ...state.addresses]
    },

    removeAddress:(state,action) => {
      if(action.payload){
        let temp = state.addresses;
        const newAddresses = temp.filter((a:any)=>a._id!=action.payload);
        state.addresses=newAddresses;
      }
    },

    updateAddr:(state,action) => {
      let temp = state.addresses;
      const item = action.payload;
      const addressIndex = temp.findIndex((t:any)=>t._id === item._id)
      temp.splice(addressIndex,1,item);
      state.addresses=temp;
    },

    setAddress:(state,action) => {
      state.address = action.payload;
      // state.address = state.addresses.filter((addr:any)=>addr._id === action.payload)
    },
    setLoad:(state,action) => {
      state.load = action.payload;
    },
    setUnload:(state,action) => {
      state.unload = action.payload;
    },

    rm:(state,action) => {
      state.addresses = state.addresses.filter((addr:any)=>addr._id != action.payload)
    },

    setAddr:(state,action) => {
      state.addr = action.payload;
    },

    clearAddr:(state,action) => {
      state.addr = {};
    },

  },
  extraReducers:(builder)=>{
    
    // FIND ALL    
    builder.addCase(findAll.pending, (state)=>{state.loading= LoadingState.LOADING})
      
    builder.addCase(findAll.fulfilled, (state, action) => {
        state.addresses = action.payload
        state.loading = LoadingState.LOADED
    })
    builder.addCase(findAll.rejected, (state)=>{state.loading= LoadingState.ERROR})


    // UPDATE
    builder.addCase(update.pending, (state)=>{state.loading= LoadingState.LOADING})
    builder.addCase(update.fulfilled, (state, action) => {
      if(action.payload?.acknowledged) return;
      let temp = state.addresses;
    
      const item = action.payload;
      const addressIndex = temp.findIndex((t:any)=>t._id === item._id)
      temp.splice(addressIndex,1,item);
      state.addresses=temp;
      state.loading = LoadingState.LOADED
    })
    builder.addCase(update.rejected, (state)=>{state.loading= LoadingState.ERROR})
    
    // CREATE
    builder.addCase(create.pending, (state)=>{state.loading= LoadingState.LOADING})
    builder.addCase(create.fulfilled, (state, action) => {
      state.addresses = [action.payload, ...state.addresses]
      state.address = {}
      state.loading = LoadingState.LOADED
    })
    builder.addCase(create.rejected, (state)=>{state.loading= LoadingState.ERROR})

    // REMOVE
    builder.addCase(remove.pending, (state)=>{state.loading= LoadingState.LOADING})
    builder.addCase(remove.fulfilled, (state, action) => {
      if(action.payload){
        let temp = state.addresses;
        const newAddresses = temp.filter((a:any)=>a._id!=action.payload);
        state.addresses=newAddresses;
      }
    })
    builder.addCase(remove.rejected, (state)=>{state.loading= LoadingState.ERROR})


  
  }
})

export const selectAddress = createSelector(
    (state: CoreState) => ({
      addresses: state.address.addresses,
      address: state.address.address,
      error: state.address.error,
      loading: state.address.loading,
      message: state.address.message,
      addr: state.address.addr,
      load: state.address.load,
      unload: state.address.unload,
    }),
    (state) => state
)
  
export const { setAddress, addAddress, removeAddress, 
  updateAddr, clear, setAddr, setLoad, setUnload, clearAddr } = addressSlice.actions

export default addressSlice.reducer