import { createAsyncThunk, createSlice, createSelector } from '@reduxjs/toolkit'
import api from '@utils/api'
import { CoreState } from 'stores/store'
import { LoadingState, ProjectProps } from '../types'

const initialState: ProjectProps = {
  projects: [],
  loading: LoadingState.IDLE,
  error: undefined,
  message: '',
}

 export const findAll = createAsyncThunk<any>(
  'project/findAll',
  async (_, thunkAPI) => {
      try {
          const response = await api.get(`/posts`)
          return response.data?.projects

      } catch (error) {
          return thunkAPI.rejectWithValue({ error: (error as Error).message })
      }
  }
)

 export const create = createAsyncThunk<any, any>(
  'project/create',
  async (values, thunkAPI) => {
      try {
          const response = await api.post(`/posts`,values)
          return response.data
            
      } catch (error) {
          return thunkAPI.rejectWithValue({ error: (error as Error).message })
      }
  }
)

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    update: (state, action) => {
        state.projects = action.payload 
    },
    clear: (state) => {
      state.message = ''
    }
  },
  extraReducers: (builder) => {
    builder.addCase(findAll.fulfilled, (state,action) => {
      state.message = '' 
      state.projects = action.payload 
      state.loading = LoadingState.LOADED
    })
    builder.addCase(create.pending, (state)=>{
      state.message = ''
      state.loading= LoadingState.LOADING
    })
    builder.addCase(create.fulfilled, (state,action) => {
      state.message = '' 
      if(state.projects.length>0)
        state.projects = [action.payload, ...state.projects] 
      else
        state.projects = [action.payload] 

      state.message = 'Başarı ile oluşturuldu'
      state.loading = LoadingState.LOADED
    })
    builder.addCase(create.rejected, (state)=>{state.loading= LoadingState.ERROR})
  }
})

/**
 * Extract count from root state
 *
 * @param   {Object} state The root state
 * @returns {number} The current count
 */
//export const Project = (state: CoreState) => state.project
export const selectProject = createSelector(
  (state: CoreState) => ({
    projects: state.project.projects,
    message: state.project.message,
  }),
  (state) => state
)

export const {
  update,
  clear,
} = projectSlice.actions
 
export default projectSlice.reducer
