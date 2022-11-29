import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit'
import api from '@utils/api'
import { CoreState } from 'stores/store'
import { JwtState, LoadingState } from '../types'

const initialState : any  = {
  user: {},
  corporate: {},
  session:false,
  loading: LoadingState.IDLE,
  error: undefined,
  message: '',
}

/**
 * @body   {Object} email and password
 * @returns {Object} save access and refresh token to localStorage
 * @method POST 
 */
export const update = createAsyncThunk(
    'users', async (values:any, thunkAPI) => {
        try {
            const response = await api.patch('/user', values)
            return response.data;
        } catch (err) {
            return thunkAPI.rejectWithValue({ error: (err as Error).message })
        }
    }
)

/**
 * @returns {Object} user data
 * @method POST 
 */
export const my = createAsyncThunk(
    'user/my', async (id, thunkAPI) => {
        try {
            const response = await api.post('/user/'+id)
            return response.data;
        } catch (err) {
            return thunkAPI.rejectWithValue({ error: (err as Error).message })
        }
    }
)


export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
 
    clear:(state) => {
        state.message = ''
    },
  },
  extraReducers:(builder)=>{
    builder.addCase(my.pending, (state, action)=>{})
    builder.addCase(my.fulfilled, (state, action)=>{})
    builder.addCase(my.rejected, (state, action)=>{})
    builder.addCase(update.pending, (state, action)=>{
        
    })
    builder.addCase(update.fulfilled, (state, action)=>{
        
    })
    builder.addCase(update.rejected, (state, action)=>{
        
    })
 }
})

export const selectUser = createSelector(
    (state: CoreState) => ({
      session: state.user.session,
      user: state.user.user,
      corporate: state.user.corporate,
      error: state.user.error,
      loading: state.user.loading,
      message: state.user.message,
    }),
    (state) => state
)
  
export const {  clear } = userSlice.actions

export default userSlice.reducer
