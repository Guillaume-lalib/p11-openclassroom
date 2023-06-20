import { createSlice } from '@reduxjs/toolkit';

export const userInfos = createSlice({
  name: 'userInfos',
  initialState: {
    data: {
      userName: null,
      lastName: null,
      firstName: null,
    },
  },
  reducers: {
    setUserInfos: (state, { payload }) => {
      state.data = payload;
    },
  },
});

export const { setUserInfos } = userInfos.actions;
export default userInfos.reducer;
