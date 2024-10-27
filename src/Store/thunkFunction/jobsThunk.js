import axios from "axios";
import { jobsReducer } from "../reducer";
import { getJobsFormAPI } from "../../plugin/axios";

const jobsThunk = () => {
  return async (dispatch, getState) => {
    const jobs = await getJobsFormAPI();
    jobs.forEach((job) => {
      dispatch(jobsReducer.actions.save(job));
    });
  };
};

export default jobsThunk;
