import { createSlice } from '@reduxjs/toolkit'

export const breadCrumbSlice = createSlice({
    name: 'breads',
    initialState: {
        currentvalue: "",
        previousvalue: "",
    },
    reducers: {
        addbreadcrumb: (state, action) => {
            
            state.previousvalue = state.currentvalue
            state.currentvalue = action.payload
            
           

        },

    },
})


export const { addbreadcrumb, } = breadCrumbSlice.actions

export default breadCrumbSlice.reducer