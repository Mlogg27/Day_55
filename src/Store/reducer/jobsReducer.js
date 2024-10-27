import { createSlice } from "@reduxjs/toolkit";

const jobsReducer = createSlice({
  name: "jobs",
  initialState: [],
  reducers: {
    save: (state, action) => {
      const index = state.findIndex((job) => job.id === action.payload.id);

      if (index === -1) {
        state.push(action.payload);
      } else {
        state[index] = {
          ...state[index],
          ...action.payload,
        };
      }
    },
    delete: (state, action) => {
      const index = state.findIndex((job) => job.id === action.payload.id);

      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export default jobsReducer;
