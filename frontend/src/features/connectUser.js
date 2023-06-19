import { createSlice } from '@reduxjs/toolkit';

export const connectUser = createSlice({
  name: 'userConnect',
  initialState: {
    data: null,
  },
  reducers: {
    setConnectUser: (state, { payload }) => {
      state.data = payload;
    },
  },
});

export const { setConnectUser } = connectUser.actions;
export default connectUser.reducer;
