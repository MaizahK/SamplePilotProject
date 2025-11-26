import axios from "./axiosPublic";

export const loginUser = async (payload) => {
  const response = await axios.post("/api/token/", payload);
  return response;
};