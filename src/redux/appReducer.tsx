import { getAuthUserData } from "./authReducer"

const SET_INIT = 'SET_INIT'

let initialState = {
   initialized: false as boolean
}

export type InitialStateType = typeof initialState;

const appReducer = (state = initialState, action: any): InitialStateType => {

   switch (action.type) {

      case SET_INIT: {
         return {
            ...state,
            initialized: true
         }
      }

      default:
         return state
   }
}

type InitSuccessType = {
   type: string
}

export const initSuccess = (): InitSuccessType => { return { type: SET_INIT } }

export const initApp = () => async (dispatch: any) => {
   await dispatch(getAuthUserData())
   await dispatch(initSuccess())
}

export default appReducer