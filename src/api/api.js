import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "5ae6a172-bcb6-4f46-826d-8b775acdebe4",
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
};

export const authAPI = {
  authMe() {
    return instance.get(`auth/me`).then((response) => {
      return response.data;
    });
  },
};

export const followingAPI = {
  unFollowUser(u) {
    return instance.post(`follow/${u.id}`).then((response) => {
      return response.data;
    });
  },
};
