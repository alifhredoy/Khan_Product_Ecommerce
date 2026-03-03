import { createSlice } from '@reduxjs/toolkit'

export const breadCrumbSlice = createSlice({
    name: 'breads',
    initialState: {
        value: 0,
    },
    reducers: {
        addbreadcrumb: (state,action) => {
            console.log(state.value);
            
        },

    },
})


export const { addbreadcrumb, } = breadCrumbSlice.actions

export default breadCrumbSlice.reducer