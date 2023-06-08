import { authAPI } from "@/api/api"

const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
   userId: null as number | null,
   email: null as string | null,
   login: null as string | null,
   isAuth: false as boolean,
   logout: null as string | null
}

export type InitialStateType = typeof initialState

const authReducer = (state = initialState, action: any): InitialStateType => {

   switch (action.type) {

      case SET_USER_DATA: {
         return {
            ...state,
            ...action.payload
         }
      }

      default:
         return state
   }
}

type SetAuthUserPayloadType = {
   userId: number
   email: string
   login: string
   isAuth: boolean
}

type SetAuthUserDataType = {
   type: typeof SET_USER_DATA,
   payload: SetAuthUserPayloadType
}

export const setAuthUserData = (userId: number, email: string, login: string, isAuth: boolean): SetAuthUserDataType => {
   return { type: SET_USER_DATA, payload: { userId, email, login, isAuth } }
}

export const getAuthUserData = () => async (dispatch: any) => {
   const response = await authAPI.me()
   if (response.data.resultCode === 0) {
      let { id, email, login } = response.data.data
      dispatch(setAuthUserData(id, email, login, true))
   }
}

export const login = (email: string, password: string, rememberMe: boolean) => async (dispatch: any) => {
   const response = await authAPI.login(email, password, rememberMe)
   if (response.data.resultCode === 0) {
      dispatch(getAuthUserData())
   }
}

export const logout = () => async (dispatch: any) => {
   const response = await authAPI.logout()
   if (response.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false))
   }
}

export default authReducer