import axios from "axios";

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/"
});

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },

    follow(userId) {
        return axiosInstance.post(`follow/${userId}`)
    },

    unfollow(userId) {
        return axiosInstance.delete(`follow/${userId}`)
    }

}

export const profileAPI = {
    getProfile(userId){
        return axiosInstance.get(`profile/${userId}`);
    }
}

export const authAPI = {
    me(){
        return axiosInstance.get(`auth/me`);
    }
}