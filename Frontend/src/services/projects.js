import axiosPrivate from "./axiosPrivate";

export const getProjects = () => axiosPrivate.get("/api/projects/");
export const addProject = (payload) => axiosPrivate.post("/api/projects/", payload);
export const updateProject = (id, payload) =>
  axiosPrivate.put(`/api/projects/${id}/`, payload);
export const deleteProject = (id) => axiosPrivate.delete(`/api/projects/${id}/`);
