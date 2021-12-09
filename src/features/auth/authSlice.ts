import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from 'models';

export interface LoginPayload {
  username: string;
  password: string;
}

export interface AuthState {
  isLoggedIn: boolean;
  logging?: boolean;
  currentUser?: User;
}

const initialState: AuthState = {
  isLoggedIn: false,
  logging: false,
  currentUser: undefined,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<LoginPayload>) {
      state.logging = true;
    },
    loginSuccess(state, action: PayloadAction<User>) {
      state.logging = false;
      state.isLoggedIn = true;
      state.currentUser = action.payload;
    },
    loginFailed(state, action: PayloadAction<string>) {
      state.logging = false;
    },

    logout(state) {
      state.isLoggedIn = false;
      state.currentUser = undefined;
    },
  },
});

// EXPORT

// action
export const authAction = authSlice.actions;

// selector
const selectIsLoggedIn = (state: any) => state.isLoggedIn;
const selectLogging = (state: any) => state.logging;
export { selectIsLoggedIn, selectLogging };
// reducer
const authReducer = authSlice.reducer;

export default authReducer;
