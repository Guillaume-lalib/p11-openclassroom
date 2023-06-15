import { configureStore } from '@reduxjs/toolkit';
import addUser from '../features/addUserSlice';
import connect from '../features/connectUser';
import modifInfos from '../features/modifUserInfos';
export const store = configureStore({
  reducer: {
    userConnect: connect,
    addUserData: addUser,
    modifUserInfos: modifInfos,
  },
});
