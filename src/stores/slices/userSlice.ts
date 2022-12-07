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
export const update = createAsyncThunk<any, any>(
    'users', async (values, thunkAPI) => {
        try {
            const response = await api.patch('/users/' + values.id, values.data)
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
            const response = await api.post('/users/my')
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
    builder.addCase(my.pending, (state, action)=>{
        state.loading = LoadingState.LOADING
    })
    builder.addCase(my.fulfilled, (state, action)=>{
        state.user = action.payload
        state.loading = LoadingState.LOADED
    })
    builder.addCase(my.rejected, (state, action)=>{
        state.error = true
        state.loading = LoadingState.ERROR
    })
    builder.addCase(update.pending, (state, action)=>{})
    builder.addCase(update.fulfilled, (state, action)=>{ })
    builder.addCase(update.rejected, (state, action)=>{ })
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
