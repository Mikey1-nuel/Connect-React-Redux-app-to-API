import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getUsers = createAsyncThunk('users/getUsers', async () => {
  try {
    const response = await fetch('https://randomuser.me/api/?results=5');
    const data = await response.json();
    const userNames = data.results.map(user => user.name);
    return userNames
  } catch (error) {
    return error.message;
  }
})

const initialState = {
	users: [],
  isLoading: true,
  error: undefined,
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers(builder) {
    builder
    .addCase(getUsers.pending, (state, action) => {
      state.users = action.payload
      state.isLoading =  true
    })
    .addCase(getUsers.fulfilled, (state, action) => {
      state.users =  action.payload
      state.isLoading =  false
    })
    .addCase(getUsers.rejected , (state, action) => {
      state.isLoading =  false
      state.error =  action.error.message
    });
  },
});

export default usersSlice.reducer;