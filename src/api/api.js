import axios from "axios";

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/"
});

export const usersAPI = {
    getUsers(currentPage, pageSize){
        return axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    }
}