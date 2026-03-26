import { createSlice } from '@reduxjs/toolkit';

const scholarshipSlice = createSlice({
  name: 'scholarships',
  initialState: {
    list: [],
    saved: [],
    loading: false,
    error: null,
  },
  reducers: {
    setScholarships: (state, action) => { state.list = action.payload; },
    setSaved: (state, action) => { state.saved = action.payload; },
    setScholarshipLoading: (state, action) => { state.loading = action.payload; },
    setScholarshipError: (state, action) => { state.error = action.payload; },
  },
});

export const { setScholarships, setSaved, setScholarshipLoading, setScholarshipError } = scholarshipSlice.actions;
export default scholarshipSlice.reducer;
