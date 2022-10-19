import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit'
import api from '@utils/api'
import { generateRandomNDigits } from '@utils/helper'
import { addressList } from '@utils/mock'
import { CoreState } from 'stores/store'
import { JwtState, LoadingState } from '../types'

const initialState : any = {
  addresses: addressList,
  address: {},
  addr: {},
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
          const response = await api.get('/address')
          return response.data;
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
      let temp = state.addresses;
      const newAddresses = temp.filter((a:any)=>a._id!=action.payload);
      state.addresses=newAddresses;
    },

    updateAddress:(state,action) => {
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


    update:(state,action) => {
      
    },

    remove:(state,action) => {
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
   
    builder.addCase(findAll.fulfilled, (state, action) => {
        state.addresses = action.payload
        state.loading = LoadingState.LOADED
    })

    builder.addCase(create.fulfilled, (state, action) => {
      state.addresses = [action.payload, ...state.addresses]
      state.address = {}
      state.loading = LoadingState.LOADED
    })

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
    }),
    (state) => state
)
  
export const { setAddress, addAddress, removeAddress, updateAddress, clear, update, setAddr, clearAddr } = addressSlice.actions

export default addressSlice.reducer