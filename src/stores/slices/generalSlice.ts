import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface GeneralState {
  value: number
}

const initialState: GeneralState = {
  value: 0,
}

export const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = generalSlice.actions

export default generalSlice.reducer