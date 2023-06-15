import { createSlice } from '@reduxjs/toolkit';

export const modifUserInfos = createSlice({
  name: 'userInfos',
  initialState: {
    data: {
      userName: null,
      lastName: null,
      firstName: null,
    },
  },
  reducers: {
    setAddUserData: (state, { payload }) => {
      state.data = payload;
    },
  },
});

export const { setAddUserData } = modifUserInfos.actions;
export default modifUserInfos.reducer;
