import { createSlice } from '@reduxjs/toolkit';

export const connectUser = createSlice({
  name: 'userConnect',
  initialState: {
    data: {
      email: null,
      password: null,
    },
  },
  reducers: {
    setAddUserData: (state, { payload }) => {
      state.data = payload;
    },
  },
});

export const { setConnectUser } = connectUser.actions;
export default connectUser.reducer;
