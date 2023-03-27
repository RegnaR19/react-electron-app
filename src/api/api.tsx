import axios from "axios";

const instance = axios.create({
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   withCredentials: true
})

export const usersAPI = {
   getUsers(currentPage: any) {
      return instance.get(`users?page=${currentPage}`)
         .then(response => {
            return response.data
         })
   },
   getProfile(userId: any) {
      return instance.get(`profile/` + userId)
   }
}

export const authAPI = {
   me() {
      return instance.get(`auth/me`)
   }
}