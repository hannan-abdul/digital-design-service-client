import { createSlice } from '@reduxjs/toolkit';

export const ServiceSlice = createSlice({
    name: 'services',
    initialState: {
        servicedetails: {

        }
    },
    reducers: {
        setSelectedService: (state, action) => {
            state.servicedetails = action.payload
        },
    }
})
