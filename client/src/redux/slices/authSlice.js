import { createSlice } from '@reduxjs/toolkit';

const userFromStorage = localStorage.getItem('ccUser')
  ? JSON.parse(localStorage.getItem('ccUser'))
  : null;

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: userFromStorage,
    loading: false,
    error: null,
  },
  reducers: {
    setCredentials: (state, action) => {
      state.user = action.payload;
      localStorage.setItem('ccUser', JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem('ccUser');
    },
    setAuthLoading: (state, action) => { state.loading = action.payload; },
    setAuthError: (state, action) => { state.error = action.payload; },
    clearAuthError: (state) => { state.error = null; },
    updateProfile: (state, action) => {
      state.user = { ...state.user, ...action.payload };
      localStorage.setItem('ccUser', JSON.stringify(state.user));
    },
  },
});

export const { setCredentials, logout, setAuthLoading, setAuthError, clearAuthError, updateProfile } = authSlice.actions;
export default authSlice.reducer;
