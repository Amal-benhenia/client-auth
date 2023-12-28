import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"


const initialState = {
    user : null,
    isAuth: false,
    token: localStorage.getItem("token"),
    error: null

}
export const registerUser= createAsyncThunk('auth/register', async(newUser, {rejectedWithValue})=> {
    try {
        const res = await axios.post("http://localhost:5000/api/user/register", newUser)
        return res.data
    } catch (error) {
        return rejectedWithValue(error.response.data.msg)
    }
})

export const loginUser = createAsyncThunk('auth/login', async(userData, {rejectedWithValue}) => {
    try {
        const res = await axios.post("http://localhost:5000/api/user/login", userData)
        return res.data
    } catch (error) {
        return rejectedWithValue(error.response.data.msg)
    }
})
export const logoutUser = (dispatch)=> {
localStorage.removeItem("token")
dispatch(authSlice.actions.logout())
}

const authSlice = createSlice({
name : "auth",
initialState,
reducers: {
    logout:  (state)=> {
        state.user = null
        state.isAuth = false
        state.token = null
        state.error = null
        }
},
extraReducers: (builder)=> {
builder.addCase(registerUser.fulfilled, (state, action)=> {
localStorage.setItem("token", action.payload.token)
state.user = action.payload.user;
state.isAuth= true;
state.token = action.payload.token
state.error= null
})
builder.addCase(registerUser.rejected, (state, action)=> {
localStorage.removeItem("token")
state.isAuth= false;
state.user = null;
state.token = null;
state.error = action.payload
})
builder.addCase(loginUser.fulfilled, (state, action)=> {
localStorage.setItem("token", action.payload.token)
state.user = action.payload.user
state.isAuth= true
state.token = action.payload.token
state.error = null
})
builder.addCase(loginUser.rejected, (state, action)=> {
localStorage.removeItem("token")
state.isAuth = false
state.user = null
state.token = null
state.error = action.payload
})
}
})

export default authSlice.reducer