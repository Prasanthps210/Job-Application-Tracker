import axios from "axios";

const API_URL = "http://localhost:8080/api/applications";

export const getApplications = () => axios.get(API_URL);
export const addApplication = (app) => axios.post(API_URL, app);
export const updateApplication = (id, app) => axios.put(`${API_URL}/${id}`, app);
export const deleteApplication = (id) => axios.delete(`${API_URL}/${id}`);
