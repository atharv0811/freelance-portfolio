import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    searchQuery: ''
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        onSearch: (state, action) => {
            const search = {
                query: action.payload
            }
            state.searchQuery = search.query
        }
    }
})

export const { onSearch } = searchSlice.actions

export default searchSlice.reducer