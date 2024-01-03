import { createSlice } from "@reduxjs/toolkit"



export interface UserSlice {
    name:string
}



const initialState : UserSlice = {
    name: 'user'
}


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    }
})


export default userSlice.reducer