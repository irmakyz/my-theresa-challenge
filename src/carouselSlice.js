import { createSlice } from '@reduxjs/toolkit'

export const carouselSlice = createSlice({
  name: 'carousel',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = carouselSlice.actions

export default carouselSlice.reducer