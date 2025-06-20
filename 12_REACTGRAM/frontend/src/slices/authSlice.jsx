import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../services/authService";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : null,
  error: false,
  sucess: false,
    loading: false,
};

// Register a new user and sign in
export const register = createAsyncThunk("auth/register", 
    async (user, thunkAPI) => { 
        const data = await authService.register(user);

        // Check for errors in the response
        if (data.errors) {
            return thunkAPI.rejectWithValue(data.errors [0]);
        }
        return data;
    }
);

// Logout an user
export const logout = createAsyncThunk("auth/logout", async () => {
    await authService.logout();

});

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reset: (state) => {
            state.error = false;
            state.sucess = false;
            state.loading = false;
        },
        },
        extraReducers: (builder) => {
            builder
                .addCase(register.pending, (state) => {
                    state.loading = true;
                    state.error = false;
                })
                .addCase(register.fulfilled, (state, action) => {
                    state.loading = false;
                    state.sucess = true;
                    state.error = null;
                    state.user = action.payload;
                })
                .addCase(register.rejected, (state, action) => {
                    state.loading = false;
                    state.error = action.payload;
                    state.user = null;
                })
                .addCase(logout.fulfilled, (state, action) => {
                    state.loading = false;
                    state.sucess = true;
                    state.error = null;
                    state.user = null;
                });
            },
    });

export const { reset } = authSlice.actions;
export default authSlice.reducer;
