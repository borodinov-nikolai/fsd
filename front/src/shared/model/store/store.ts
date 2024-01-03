import { userSlice } from '@/entities/user'
import { emptySplitApi } from '@/shared/api/configs/rtk_query'
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'


export const store = configureStore({
  reducer: {
  user: userSlice,
  [emptySplitApi.reducerPath] : emptySplitApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(emptySplitApi.middleware),
})

setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch