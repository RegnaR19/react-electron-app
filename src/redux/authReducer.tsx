import { authAPI } from "@/api/api"

const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
   userId: null,
   email: null,
   login: null,
   isAuth: false
}

const authReducer = (state = initialState, action: any) => {

   switch (action.type) {

      case SET_USER_DATA: {
         return { ...state, ...action.payload, isAuth: true }
      }

      default:
         return state
   }
}

export const setAuthUserData = (userId: any, email: any, login: any, isAuth: any) => {
   return { type: SET_USER_DATA, payload: { userId, email, login, isAuth } }
}

export const getAuthUserData = () => (dispatch: any) => {
   return authAPI.me().then((response: any) => {
      if (response.data.resultCode === 0) {
         let { id, email, login } = response.data.data
         dispatch(setAuthUserData(id, email, login, true))
      }
   })
}

export const login = (email: any, password: any, rememberMe: any) => (dispatch: any) => {
   return authAPI.login(email, password, rememberMe).then((response: any) => {
      if (response.data.resultCode === 0) {
         dispatch(getAuthUserData())
      }
   })
}

export const logout = () => (dispatch: any) => {
   return authAPI.logout().then((response: any) => {
      if (response.data.resultCode === 0) {
         dispatch(setAuthUserData(null, null, null, false))
      }
   })
}

export default authReducer