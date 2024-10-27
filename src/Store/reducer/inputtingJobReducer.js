import { createSlice } from "@reduxjs/toolkit";

const inputtingJob = createSlice({
  name: "inputtingJob",
  initialState: {},
  reducers: {
    input: (state, action) => {
      state[action.payload.name] = action.payload.value;
    },
  },
});

export default inputtingJob;
