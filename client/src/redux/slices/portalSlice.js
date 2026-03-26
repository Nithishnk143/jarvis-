import { createSlice } from '@reduxjs/toolkit';

const portalSlice = createSlice({
  name: 'portal',
  initialState: {
    quizResult: null,
    roadmaps: [],
    selectedRoadmap: null,
    loading: false,
  },
  reducers: {
    setQuizResult: (state, action) => { state.quizResult = action.payload; },
    setRoadmaps: (state, action) => { state.roadmaps = action.payload; },
    setSelectedRoadmap: (state, action) => { state.selectedRoadmap = action.payload; },
    setPortalLoading: (state, action) => { state.loading = action.payload; },
    clearQuizResult: (state) => { state.quizResult = null; },
  },
});

export const { setQuizResult, setRoadmaps, setSelectedRoadmap, setPortalLoading, clearQuizResult } = portalSlice.actions;
export default portalSlice.reducer;
