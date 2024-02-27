



import {createSlice} from '@reduxjs/toolkit'

const filterBtnSlice = createSlice({
    name: 'buttons',
    initialState: {
        buttons: [
            {
                name: 'All',
                choice: false
            },
            {
                name: 'Business',
                choice: false
            },
            {
                name: 'Art & Design',
                choice: false
            },
            {
                name: 'Development',
                choice: false
            },
            {
                name: 'Marketing',
                choice: false
            }
        ]
    }
})

export const filterBtnReducer = filterBtnSlice.reducer