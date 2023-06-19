import { createSlice } from '@reduxjs/toolkit';

export const modifUserInfos = createSlice({
  name: 'userInfos',
  initialState: {
    data: {
      userName: null,
      lastName: null,
      firstName: null,
      email: null,
      id: null,
      createdAt: null,
      updateAt: null,
    },
  },
  reducers: {
    setModifUserInfos: (state, { payload }) => {
      state.data = payload;
    },
  },
});

export const { setmodifUserInfos } = modifUserInfos.actions;
export default modifUserInfos.reducer;
