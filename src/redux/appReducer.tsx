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

export const initApp = () => (dispatch: any) => {
   let promise = dispatch(getAuthUserData())
   Promise.all([promise])
      .then(() => {
         dispatch(initSuccess())
      })
}

export default appReducer