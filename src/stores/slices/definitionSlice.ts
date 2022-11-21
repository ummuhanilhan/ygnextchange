 import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit'
import api from '@utils/api'
import { formattedDefines } from '@utils/helper'
import { CoreState } from 'stores/store'
import { JwtState, LoadingState } from '../types'
 
const initialState:any = {
  definitions: {},
  formatted: {},
  loading: LoadingState.IDLE,
  error: undefined,
  message: '',
} 

/**
 * @returns {Object} user data
 * @method POST 
 */
export const getDefinitions = createAsyncThunk(
    'definition/findAll', async (_, thunkAPI) => {
        try {
            const response = await api.get('/definitions/type')
            return response.data;
        } catch (err) {
            return thunkAPI.rejectWithValue({ error: (err as Error).message })
        }
    }
)


export const definitionSlice = createSlice({
  name: 'definition',
  initialState,
  reducers: {
   
    defined:(state, action) => {
        state.definitions[action.payload]
    },

    defines:(state, action) => {
      const {label, id , ids} = action.payload;
        if(id) state.definitions.map((s:any)=>s[label] == id );
        if(!id) {
           state.definitions.map((s:any)=>{
             ids.map((item:string)=>{
              s[label] == item
             })
           });

        }
    },
    
    clear:(state) => {
        state.message = ''
    },
  },
  extraReducers:(builder)=>{
      builder.addCase(getDefinitions.fulfilled, (state,action) =>{
        state.definitions = action.payload;
        state.formatted = formattedDefines(action.payload);
        state.loading = LoadingState.LOADED
      })

      builder.addCase(getDefinitions.pending, (state) =>{
        state.loading = LoadingState.LOADING
      })
      builder.addCase(getDefinitions.rejected, (state) =>{
        state.loading = LoadingState.ERROR
      })

  }
})

export const selectDefinition = createSelector(
    (state: CoreState) => ({
      definitions: state.definition.definitions,
      formatted: state.definition.formatted,
      error: state.definition.error,
      loading: state.definition.loading,
      message: state.definition.message,
    }),
    (state) => state
)
  
export const { clear, defined, defines } = definitionSlice.actions

export default definitionSlice.reducer
