import { createSlice } from "@reduxjs/toolkit";

const searchStr = createSlice({
  name: "searchStr",
  initialState: "",
  reducers: {
    input: (state, action) => {
      return action.payload;
    },
  },
});

export default searchStr;
