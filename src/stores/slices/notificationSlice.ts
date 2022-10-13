import { createAsyncThunk, createSlice, createSelector } from '@reduxjs/toolkit'
import api from '@utils/api'
import { CoreState } from 'stores/store'

type NotificationState = {
    notifications: object[],
}

const initialState: NotificationState = {
  notifications: [],
}

 export const findAll = createAsyncThunk<any>(
  'notifications/my',
  async (_, thunkAPI) => {
      try {
          const response = await api.get(`/notifications/my`)
          return response.data

      } catch (error) {
          return thunkAPI.rejectWithValue({ error: (error as Error).message })
      }
  }
)




const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    update: (state, action) => {
        state.notifications = action.payload 
    },
  },
  extraReducers: (builder) => {
    builder.addCase(findAll.fulfilled, (state,action) => {
      state.notifications = action.payload
    })
  }
})

/**
 * Extract count from root state
 *
 * @param   {Object} state The root state
 * @returns {number} The current count
 */
//export const Notification = (state: CoreState) => state.notification
export const selectNotification = createSelector(
  (state: CoreState ) => ({
    notifications: state.notification.notifications,
  }),
  (state) => state
)

export const {
  update,
} = notificationSlice.actions



export default notificationSlice.reducer
