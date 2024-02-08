import axios from "axios";

const authToken = sessionStorage.getItem("authToken");

export const makeRequest = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        Authorization: "bearer " + authToken
    }
});