import { usersAPI } from "@/api/api"

const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const TOTAL_USERS_COUNT = 'TOTAL_USERS_COUNT'

type Users = {
   usersList: any
   pageSize: any
   totalUsersCount: number
   currentPage: number
}

let initialState: Users = {
   usersList: [],
   pageSize: 20,
   totalUsersCount: 0 as number,
   currentPage: 1 as number
}

export type InitialStateType = typeof initialState

const usersReducer = (state = initialState, action: any) => {

   switch (action.type) {

      case SET_USERS: {
         return { ...state, usersList: [...action.usersList] }
      }
      case SET_CURRENT_PAGE: {
         return { ...state, currentPage: action.currentPage }
      }
      case TOTAL_USERS_COUNT: {
         return { ...state, totalUsersCount: action.totalUsersCount }
      }

      default:
         return state
   }
}

export const setUsers = (usersList: any) => { return { type: SET_USERS, usersList } }
export const setCurrentPage = (currentPage: any) => { return { type: SET_CURRENT_PAGE, currentPage } }
export const setTotalUsersCount = (totalUsersCount: any) => { return { type: TOTAL_USERS_COUNT, totalUsersCount } }

export const getUsers = (currentPage: number) => {
   return (dispatch: any) => {
      usersAPI.getUsers(currentPage).then((data: any) => {
         dispatch(setUsers(data.items))
         dispatch(setTotalUsersCount(data.totalCount))
         dispatch(setCurrentPage(currentPage))
      })
   }
}

export default usersReducer