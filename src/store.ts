import { configureStore } from '@reduxjs/toolkit'
import searchReducer from '@/features/search/search-slice'

export const store = configureStore({
    reducer: {
        search: searchReducer
    }
})