import { createSlice } from "@reduxjs/toolkit";

const candidateSlice = createSlice({
  name: "candidate",
  initialState: {
    candidate_details: {},
  },
  reducers: {
    editCandidate: (state, action) => {
      state.candidate_details = action.payload;
    },
  },
});

export const { editCandidate } = candidateSlice.actions;
export default candidateSlice.reducer;
