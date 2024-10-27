import axios from "axios";

const api = axios.create({
  baseURL: "https://671bcd5f2c842d92c3815b3d.mockapi.io/day_55",
});

const getJobsFormAPI = async () => {
  const response = await api.get("/jobs");
  if (response.status === 200) {
    const jobs = response.data;
    return jobs;
  }
};
const postJobsToAPI = async (job) => {
  const response = await api.post(
    "/jobs",
    {
      name: job.name,
      priority: job.priority,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.status;
};
const deleteJobToAPI = async (job) => {
  const response = await api.delete(`/jobs/${job.id}`);
  return response.status;
};
const updateJobToAPI = async (job) => {
  console.log(job.id);

  const response = await api.put(
    `/jobs/${job.id}`,
    {
      name: job.name,
      priority: job.priority,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.status;
};

export { getJobsFormAPI, postJobsToAPI, deleteJobToAPI, updateJobToAPI };
