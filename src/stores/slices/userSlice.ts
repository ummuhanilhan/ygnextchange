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
export const signin = createAsyncThunk(
    'user/signin', async (values:any, thunkAPI) => {
        try {
            const response = await api.post('/user', values)
            console.log(response.data)
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
export const me = createAsyncThunk(
    'user/me', async (_, thunkAPI) => {
        try {
            const response = await api.post('/user')
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
