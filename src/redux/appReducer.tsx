import { getAuthUserData } from "./authReducer"

const SET_INIT = 'SET_INIT'

let initialState = {
   init: false
}

const appReducer = (state = initialState, action: any) => {

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

export const initSuccess = () => {
   return { type: SET_INIT }
}

export const initApp = () => async (dispatch: any) => {
   await dispatch(getAuthUserData())
   await dispatch(initSuccess())
}

export default appReducer