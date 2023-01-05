import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit'
import api from '@utils/api'
import { CoreState } from 'stores/store'
import { AuthProps, JwtState, LoadingState } from '../types'

const initialState : AuthProps = {
  user: {},
  session:false,
  isAuth:undefined,
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
    'auth/signin', async (values:any, thunkAPI) => {
        try {
            const response = await api.post('/auth/signin', values)
            console.log(response.data)
            return response.data;
        } catch (err) {
            return thunkAPI.rejectWithValue({ error: (err as Error).message })
        }
    }
)

/**
 * @body   {Object} email and password
 * @returns {Object} save access and refresh token to localStorage
 * @method POST 
 */
export const signup = createAsyncThunk(
    'auth/signup', async (values:any, thunkAPI) => {
        try {
            const response = await api.post('/auth/signup', values)
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
    'auth/me', async (_, thunkAPI) => {
        try {
            const response = await api.post('/auth/me')
            return response.data;
        } catch (err) {
            return thunkAPI.rejectWithValue({ error: (err as Error).message })
        }
    }
)


export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setSession: (state,action) =>{
        state.session = action.payload;
    },
    signout: (state) => {
        state.user =  {}
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        state.isAuth = false;
        state.loading = LoadingState.LOADED;
      },
    clear:(state) => {
        state.message = ''
    },
    setAuth:(state, action) => {
        state.isAuth = action.payload ? true : false
    },
  },
  extraReducers:(builder)=>{
    builder.addCase(signin.fulfilled, (state, action) => {
        const {accessToken, refreshToken} : JwtState = action.payload;
        if(accessToken && refreshToken){
            localStorage.setItem("accessToken", accessToken);
            localStorage.setItem("refreshToken", refreshToken);
            state.isAuth = true;
        }
         state.loading = LoadingState.LOADED
          state.message = 'Başarıyla giriş yapıldı!'
    })
    builder.addCase(signin.pending, (state) => {
        state.loading = LoadingState.LOADING
    })
    builder.addCase(signin.rejected, (state, action) => {
        const { error } :any = action.payload;
        state.error = error
        state.isAuth = false;
        state.loading = LoadingState.ERROR
    })
    builder.addCase(signup.fulfilled, (state, action) => {
        localStorage.setItem("accessToken", action.payload?.accessToken);
        localStorage.setItem("refreshToken", action.payload?.refreshToken);
        state.loading = LoadingState.LOADED
        state.message = 'Başarıyla oluşturuldu!'
    })
    builder.addCase(signup.pending, (state) => {
        state.loading = LoadingState.LOADING

    })
    builder.addCase(signup.rejected, (state, action) => {
        state.error = (action.payload as any).error
        state.isAuth = false;
        state.loading = LoadingState.ERROR
    })
    builder.addCase(me.fulfilled, (state, action) => {
    const payload = action.payload;
        state.user = payload
        if(!payload.error) 
            state.isAuth = true;
        else
            state.isAuth = false;
        state.loading = LoadingState.LOADED

    })
    builder.addCase(me.pending, (state) => {
      state.loading = LoadingState.LOADING
    })
    builder.addCase(me.rejected, (state, action) => {
        state.error = (action.payload as any).error
        state.loading = LoadingState.ERROR
        state.isAuth = false;
    })
  }
})

export const selectAuth = createSelector(
    (state: CoreState) => ({
      isAuth: state.auth.isAuth,
      session: state.auth.session,
      user: state.auth.user,
      error: state.auth.error,
      loading: state.auth.loading,
      message: state.auth.message,
    }),
    (state) => state
)
  
export const { setSession, signout, clear, setAuth } = authSlice.actions

export default authSlice.reducer
