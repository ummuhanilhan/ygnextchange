import { createAsyncThunk, createSlice, createSelector } from '@reduxjs/toolkit'
import api from '@utils/api'
import { CoreState } from 'stores/store'
import { CargoProps, LoadingState } from '../types'

const initialState: CargoProps = {
  cargoes: [],
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
          const response = await api.get(`/posts`)
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
          const response = await api.post(`/cargo`,values)
          return response.data
            
      } catch (error) {
          return thunkAPI.rejectWithValue({ error: (error as Error).message })
      }
  }
)

export const update = createAsyncThunk<any, any>(
  'cargo/update',
  async ({id, values}, thunkAPI) => {
      try {
          const response = await api.post(`/cargo`,{id, values})
          return response.data
            
      } catch (error) {
          return thunkAPI.rejectWithValue({ error: (error as Error).message })
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
    builder.addCase(findAll.fulfilled, (state,action) => {
      state.message = '' 
      state.cargoes = action.payload 
      state.loading = LoadingState.LOADED
    })
    builder.addCase(create.pending, (state)=>{
      state.message = ''
      state.loading= LoadingState.LOADING
    })
    builder.addCase(create.fulfilled, (state,action) => {
      state.message = '' 
      if(state.cargoes.length>0)
        state.cargoes = [action.payload, ...state.cargoes] 
      else
        state.cargoes = [action.payload] 

      state.message = 'Başarı ile oluşturuldu'
      state.loading = LoadingState.LOADED
    })
    builder.addCase(create.rejected, (state)=>{state.loading= LoadingState.ERROR})

    builder.addCase(find.rejected, (state)=>{state.loading= LoadingState.ERROR})
    builder.addCase(find.pending, (state)=>{state.loading= LoadingState.LOADING})
    builder.addCase(find.fulfilled, (state,action) => {
      state.message = '';
      state.cargo = action.payload; 
      state.loading = LoadingState.LOADED;
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
    message: state.cargo.message
  }),
  (state) => state
)

export const {
  refresh,
  setFilter,
  clear,
} = cargoSlice.actions
 
export default cargoSlice.reducer
