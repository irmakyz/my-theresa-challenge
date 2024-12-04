import { configureStore } from '@reduxjs/toolkit'
import wishlistSlice from './wishlistSlice'

export default configureStore({
  reducer: {
    wishlist: wishlistSlice,
  },
})