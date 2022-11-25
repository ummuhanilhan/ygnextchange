import { createAsyncThunk, createSlice, createSelector } from '@reduxjs/toolkit'
import api from '@utils/api'
import { CoreState } from 'stores/store'
import { LoadingProps, LoadingState } from '../types'

type FavoriteState = {
    favorites: object[],
} & LoadingProps

const initialState: FavoriteState = {
  favorites: [],
  loading: LoadingState.IDLE,
  error: undefined,
  message: '',
}

export const myfavorites = createAsyncThunk<any>(
  'favorite/my',
  async (_, thunkAPI) => {
      try {
          const response = await api.post(`/favorites/my`)
          return response.data

      } catch (error) {
          return thunkAPI.rejectWithValue({ error: (error as Error).message })
      }
  }
)

export const isfav = createAsyncThunk<any>(
  'favorite/isfav',
  async (cargo, thunkAPI) => {
      try {
          const response = await api.post(`/favorites/isfav`,{cargo})
          return response.data

      } catch (error) {
          return thunkAPI.rejectWithValue({ error: (error as Error).message })
      }
  }
)

export const toggle = createAsyncThunk<any>(
  'favorite/isfav',
  async (cargo, thunkAPI) => {
      try {
          const response = await api.post(`/favorites/toggle`,{cargo})
          return response.data

      } catch (error) {
          return thunkAPI.rejectWithValue({ error: (error as Error).message })
      }
  }
)




const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    update: (state, action) => {
        state.favorites = action.payload 
    },
  },
  extraReducers: (builder) => {
    builder.addCase(isfav.fulfilled, (state,action) => {})
    builder.addCase(myfavorites.fulfilled, (state,action) => {
      state.favorites = action.payload
    })
  }
})

/**
 * Extract count from root state
 *
 * @param   {Object} state The root state
 * @returns {number} The current count
 */
//export const Favorite = (state: CoreState) => state.favorite
export const selectFavorite = createSelector(
  (state: CoreState) => ({
    favorites: state.favorite.favorites,
  }),
  (state) => state
)

export const {
  update,
} = favoriteSlice.actions

export default favoriteSlice.reducer
