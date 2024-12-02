import { configureStore } from '@reduxjs/toolkit'
import carouselReducer from './CarouselSlice'

export default configureStore({
  reducer: {
    carousel: carouselReducer,
  },
})