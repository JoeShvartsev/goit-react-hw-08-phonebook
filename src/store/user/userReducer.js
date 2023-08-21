import { createSlice } from "@reduxjs/toolkit";
import {logOutUserThunk, refreshUserThunk, signInUserThunk, signUpUserThunk } from "./actions";
import { handleFullfilledLogOut, handleFullfilledRefresh, handleFullfilledSignIn, handleFullfilledSignUp, handlePanding, handleRejected } from "./handlers";

const userSlice = createSlice({
  name: 'user',
  initialState: {
    token:'',
    isLoading: false,
    error: null,
    profile:[]
  },
  extraReducers: builder => {
    builder
      .addCase(signUpUserThunk.fulfilled, handleFullfilledSignUp )
      .addCase(signInUserThunk.fulfilled, handleFullfilledSignIn )
      .addCase(logOutUserThunk.fulfilled, handleFullfilledLogOut )
      .addCase(refreshUserThunk.fulfilled,handleFullfilledRefresh)
      .addMatcher(({type})=>type.endsWith('/pending'),handlePanding)
      .addMatcher(({type})=>type.endsWith('/rejected'),handleRejected);;
  },
});

export const userReducer = userSlice.reducer;


