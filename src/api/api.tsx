import axios from "axios";

const instance = axios.create({
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   withCredentials: true
})

export const usersAPI = {
   getUsers(currentPage: any, count: any = 20) {
      return instance.get(`users?page=${currentPage}&count=${count}`)
         .then(response => {
            return response.data
         })
   },
   getProfile(userId: any) {
      return profileAPI.getProfile(userId)
   }
}

export const profileAPI = {
   getProfile(userId: any) {
      return instance.get(`profile/` + userId)
   },
   getStatus(userId: any) {
      return instance.get('profile/status/' + userId)
   },
   updateStatus(status: any) {
      return instance.put('profile/status', { status: status })
   }
}

export const authAPI = {
   me() {
      return instance.get(`auth/me`)
   },
   login(email: any, password: any, rememberMe: any = false) {
      return instance.post(`auth/login`, { email, password, rememberMe })
   },
   logout() {
      return instance.delete(`auth/login`)
   }
}