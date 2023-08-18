import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { loaderSlice } from '@/store/slice/loader'

const reducers = {
    [loaderSlice.name]: loaderSlice.reducer
}

const reducer = combineReducers(reducers)

export const store = configureStore({
    reducer,
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
