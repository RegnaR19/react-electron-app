import { profileAPI, usersAPI } from "@/api/api";
import paris from "../assets/p1.jpg";
import abstract from "../assets/p2.jpg";
import sochi from "../assets/p3.jpg";
import sochi2 from "../assets/p4.jpeg";

const ADD_POST = 'ADD_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

let initialState = {
   posts: [
      { id: 1, post: "Париж", message: "Виды на Париж", likescount: 300, img: paris },
      { id: 2, post: "Абстракция", message: "Картинка-абстракция", likescount: 1000, img: abstract },
      { id: 3, post: "Сочи", message: "Сочи", likescount: 5000, img: sochi },
   ],
   profile: { photos: {} },
   status: ''
}

const profileReducer = (state = initialState, action: any) => {

   switch (action.type) {

      case ADD_POST: {
         let stateCopy = { ...state }
         let newPost = {
            id: 4,
            post: action.title,
            message: action.newPostText,
            likescount: 999,
            img: sochi2
         }

         if (newPost.message === undefined) {
            alert('Вы ничего не ввели в сообщении!')
            break
         }
         else if (newPost.post === undefined) {
            alert('Вы ничего не ввели в заголовке!')
            break
         }
         else if (newPost.message != '') {
            stateCopy.posts = action.newPost
         }

         return {
            ...state,
            posts: [...state.posts, newPost]
         }
      }
      case SET_USER_PROFILE: {
         return { ...state, profile: action.profile }
      }
      case SET_STATUS: {
         return { ...state, status: action.status }
      }
      default:
         return state
   }
}

export const addPostCreator = (newPostText: any, title: any) => {
   return { type: ADD_POST, newPostText, title }
}

export const setUserProfile = (profile: any) => {
   return { type: SET_USER_PROFILE, profile }
}

export const setStatus = (status: any) => {
   return { type: SET_STATUS, status }
}

export const getUserProfile = (userId: any) => (dispatch: any) => {
   return usersAPI.getProfile(userId).then((response: any) => {
      dispatch(setUserProfile(response.data))
   })
}

export const getUserStatus = (userId: any) => (dispatch: any) => {
   return profileAPI.getStatus(userId).then((response: any) => {
      dispatch(setStatus(response.data))
   })
}

export const updateStatus = (status: any) => (dispatch: any) => {
   return profileAPI.updateStatus(status).then((response: any) => {
      if (response.data.resultCode === 0) {
         dispatch(setStatus(status))
      }
   })
}

export default profileReducer