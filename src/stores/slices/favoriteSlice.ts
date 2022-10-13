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

export const myFavorites = createAsyncThunk<any>(
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

export const addFav = createAsyncThunk<any, any>(
  'favorite/add',
  async (values, thunkAPI) => {
      try {
          const response = await api.post(`/favorites/fav`,values)
          return response.data

      } catch (error) {
          return thunkAPI.rejectWithValue({ error: (error as Error).message })
      }
  }
)

 export const unfav = createAsyncThunk<any, any>(
  'favorite/remove',
  async (values, thunkAPI) => {
      try {
          const response = await api.post(`/favorites/unfav`,values)
          return response.data

      } catch (error) {
          return thunkAPI.rejectWithValue({ error: (error as Error).message })
      }
  }
)

// toggle
// favorites


const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    update: (state, action) => {
        state.favorites = action.payload 
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addFav.fulfilled, (state,action) => {})
    builder.addCase(unfav.fulfilled, (state,action) => {})
    builder.addCase(myFavorites.fulfilled, (state,action) => {
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
