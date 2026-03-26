import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import portalReducer from './slices/portalSlice';
import scholarshipReducer from './slices/scholarshipSlice';
import uiReducer from './slices/uiSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    portal: portalReducer,
    scholarships: scholarshipReducer,
    ui: uiReducer,
  },
});

export default store;
