import axiosPrivate from "./axiosPrivate";

export const getUser = () => axiosPrivate.get("/api/me/");
