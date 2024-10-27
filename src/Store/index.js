import { configureStore } from "@reduxjs/toolkit";
import { inputtingJob, jobsReducer, searchStrReducer } from "./reducer";

const store = configureStore({
  reducer: {
    jobs: jobsReducer.reducer,
    inputtingJob: inputtingJob.reducer,
    searchStr: searchStrReducer.reducer,
  },
});

export default store;
