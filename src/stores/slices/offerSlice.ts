import { createAsyncThunk, createSlice, createSelector } from '@reduxjs/toolkit'
import api from '@utils/api'
import { CoreState } from 'stores/store'
import {  LoadingState } from '../types'

const initialState: any = {
  offers: [],
  offer: {},
  filter: {
    from:'',
    to:'',
  },
  loading: LoadingState.IDLE,
  error: undefined,
  message: '',
}

export const findAll = createAsyncThunk<any, string>(
  'offer/findAll',
  async (id, thunkAPI) => {
      try {
          const response = await api.get(`/offers/`) 
          return response.data

      } catch (error) {
          return thunkAPI.rejectWithValue({ error: (error as Error).message })
      }
  }
)

export const filters = createAsyncThunk<any, any>(
    'offer/filters',
    async (values, thunkAPI) => {
        try {
            const response = await api.post(`/offers/filter`, values)
            return response.data
  
        } catch (error) {
            return thunkAPI.rejectWithValue({ error: (error as Error).message })
        }
    }
  )

export const find = createAsyncThunk<string, any>(
  'offer/find',
  async (id, thunkAPI) => {
      try {
          const response = await api.get(`/offers/${id}`)
          return response.data

      } catch (error) {
          return thunkAPI.rejectWithValue({ error: (error as Error).message })
      }
  }
)

export const create = createAsyncThunk<any, any>(
  'offer/create',
  async (values, thunkAPI) => {
      try {
          const response = await api.post(`/offers`, {...values})
          return response.data
            
      } catch (error:any) {
        return thunkAPI.rejectWithValue({ error:error?.response?.data?.message })
      }
  }
)

export const update = createAsyncThunk<any, any>(
  'offer/update',
  async ({id, values}, thunkAPI) => {
      try {
          const response = await api.post(`/offers`,{id, ...values})
          return response.data
            
      } catch (error:any) {
          return thunkAPI.rejectWithValue({ error:error?.response?.data?.message })
      }
  }
)


const offerSlice = createSlice({
  name: 'offer',
  initialState,
  reducers: {
    refresh: (state, action) => {
        state.offers = action.payload 
    },
    clear: (state) => {
      state.message = ''
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(findAll.pending, (state)=>{state.loading= LoadingState.LOADING})
    builder.addCase(findAll.fulfilled, (state,action) => {
      state.message = '' 
      state.offers = action.payload 
      state.loading = LoadingState.LOADED
    })
    builder.addCase(findAll.rejected, (state)=>{state.loading= LoadingState.ERROR})
  
    // FILTER
    builder.addCase(filters.pending, (state)=>{state.loading= LoadingState.LOADING})
    builder.addCase(filters.fulfilled, (state,action) => {
      state.message = '' 
      state.offers = action.payload 
      state.loading = LoadingState.LOADED
    })
    builder.addCase(filters.rejected, (state)=>{state.loading= LoadingState.ERROR})
 
    // FIND
    builder.addCase(find.rejected, (state)=>{state.loading= LoadingState.ERROR})
    builder.addCase(find.pending, (state)=>{state.loading= LoadingState.LOADING})
    builder.addCase(find.fulfilled, (state,action) => {
      state.message = '';
      state.offer = action.payload; 
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
      if(state.offers.length>0)
        state.offers = [action.payload, ...state.offers] 
      else
        state.offers = [action.payload] 

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
//export const Offer = (state: CoreState) => state.offer
export const selectOffer = createSelector(
  (state: CoreState) => ({
    offers: state.offer.offers,
    filter: state.offer.filter,
    message: state.offer.message,
    error: state.offer.error,
    loading: state.offer.loading
  }),
  (state) => state
)

export const {
  refresh,
  setFilter,
  clear,
} = offerSlice.actions
 
export default offerSlice.reducer
