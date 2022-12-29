import { createAsyncThunk, createSlice, createSelector } from '@reduxjs/toolkit'
import api from '@utils/api'
import { CoreState } from 'stores/store'
import { CargoProps, LoadingState } from '../types'

const initialState: CargoProps = {
  cargoes: undefined,
  cargo: {},
  filter: {
    from:'',
    to:'',
  },
  loading: LoadingState.IDLE,
  error: undefined,
  message: '',
}

export const findAll = createAsyncThunk<any>(
  'cargo/findAll',
  async (_, thunkAPI) => {
      try {
          const response = await api.post(`/cargo`)
          return response.data?.cargoes

      } catch (error) {
          return thunkAPI.rejectWithValue({ error: (error as Error).message })
      }
  }
)
export const filters = createAsyncThunk<any, any>(
    'cargo/findAll',
    async (param, thunkAPI) => {
        try {
            const response = await api.post(`/cargo/filter`, param)
            return response.data?.cargoes

        } catch (error) {
            return thunkAPI.rejectWithValue({ error: (error as Error).message })
        }
    }
)


export const find = createAsyncThunk<string, any>(
  'cargo/find',
  async (id, thunkAPI) => {
      try {
          const response = await api.get(`/cargo/${id}`)
          return response.data

      } catch (error) {
          return thunkAPI.rejectWithValue({ error: (error as Error).message })
      }
  }
)

export const create = createAsyncThunk<any, any>(
  'cargo/create',
  async (values, thunkAPI) => {
      try {
          const response = await api.post(`/cargo`, {...values})
          return response.data
            
      } catch (error:any) {
        return thunkAPI.rejectWithValue({ error:error?.response?.data?.message })
      }
  }
)

export const update = createAsyncThunk<any, any>(
  'cargo/update',
  async ({id, values}, thunkAPI) => {
      try {
          const response = await api.post(`/cargo`,{id, ...values})
          return response.data
            
      } catch (error:any) {
          return thunkAPI.rejectWithValue({ error:error?.response?.data?.message })
      }
  }
)


const cargoSlice = createSlice({
  name: 'cargo',
  initialState,
  reducers: {
    refresh: (state, action) => {
        state.cargoes = action.payload 
    },
    clear: (state) => {
      state.message = ''
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    }
  },
  extraReducers: (builder) => {

    builder.addCase(filters.pending, (state)=>{state.loading= LoadingState.LOADING})
    builder.addCase(filters.fulfilled, (state,action) => {
      state.message = '' 
      state.cargoes = action.payload 
      state.loading = LoadingState.LOADED
    })
    builder.addCase(filters.rejected, (state)=>{state.loading= LoadingState.ERROR})

    // FIND
    builder.addCase(find.rejected, (state)=>{state.loading= LoadingState.ERROR})
    builder.addCase(find.pending, (state)=>{state.loading= LoadingState.LOADING})
    builder.addCase(find.fulfilled, (state,action) => {
      state.message = '';
      state.cargo = action.payload; 
      state.loading = LoadingState.LOADED;
    })

    // CREATE
    builder.addCase(create.pending, (state)=>{
      state.message = ''
      state.error=false;
      state.loading= LoadingState.LOADING
    })
    builder.addCase(create.fulfilled, (state:any,action) => {
      state.message = '' 
      if(state.cargoes?.length>0)
        state.cargoes = [action.payload, ...state.cargoes] 
      else
        state.cargoes = [action.payload] 

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
//export const Cargo = (state: CoreState) => state.cargo
export const selectCargo = createSelector(
  (state: CoreState) => ({
    cargo: state.cargo.cargo,
    filter: state.cargo.filter,
    cargoes: state.cargo.cargoes,
    message: state.cargo.message,
    error: state.cargo.error,
    loading: state.cargo.loading
  }),
  (state) => state
)

export const {
  refresh,
  setFilter,
  clear,
} = cargoSlice.actions
 
export default cargoSlice.reducer
