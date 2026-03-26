import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    darkMode: localStorage.getItem('ccDark') === 'true',
    language: localStorage.getItem('ccLang') || 'en',
  },
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
      localStorage.setItem('ccDark', String(state.darkMode));
      document.documentElement.setAttribute('data-bs-theme', state.darkMode ? 'dark' : 'light');
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
      localStorage.setItem('ccLang', action.payload);
    },
  },
});

export const { toggleDarkMode, setLanguage } = uiSlice.actions;
export default uiSlice.reducer;
