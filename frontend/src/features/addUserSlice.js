import { createSlice } from '@reduxjs/toolkit';

export const addUserSlice = createSlice({
  name: 'addUserData',
  initialState: {
    data: {
      email: null,
      password: null,
      firstName: null,
      lastName: null,
      userName: null,
    },
  },
  reducers: {
    setAddUserData: (state, { payload }) => {
      state.data = payload;
    },
  },
});

export const { setAddUserData } = addUserSlice.actions;
export default addUserSlice.reducer;
