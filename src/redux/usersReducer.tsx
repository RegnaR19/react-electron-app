const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'

let initialState = {
   usersList: [],
   pageSize: 5,
   totalUsersCount: 21,
   currentPage: 1
}

const usersReducer = (state = initialState, action: any) => {

   switch (action.type) {

      // case FOLLOW: {
      //    return {
      //       ...state,
      //       usersList: state.usersList.map(u => {
      //          if (u.id === action.userID) {
      //             return { ...u, followed: false }
      //          }
      //          return u
      //       })
      //    }
      // }
      // case UNFOLLOW: {
      //    return {
      //       ...state,
      //       usersList: state.usersList.map(u => {
      //          if (u.id === action.userID) {
      //             return { ...u, followed: true }
      //          }
      //          return u
      //       })
      //    }
      // }

      case SET_USERS: {
         return {
            ...state, usersList: [...state.usersList, ...action.usersList]
         }
      }
      case SET_CURRENT_PAGE: {
         return {
            ...state, currentPage: action.currentPage
         }
      }
      default:
         return state
   }
}

export const followAC = (userID: any) => {
   return {
      type: FOLLOW, userID
   }
}

export const unfollowAC = (userID: any) => {
   return {
      type: UNFOLLOW, userID
   }
}

export const setUsersAC = (usersList: any) => {
   return {
      type: SET_USERS, usersList
   }
}

export const setCurrentPageAC = (currentPage: any) => {
   return {
      type: SET_CURRENT_PAGE, currentPage
   }
}


export default usersReducer