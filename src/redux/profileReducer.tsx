import { profileAPI, usersAPI } from "@/api/api";
import cyber from "../assets/cyber.jpg";
import dota from "../assets/dota2.jpg";
import fable from "../assets/fable.png";
import newPostImage from "../assets/new.jpg";

const ADD_POST = 'ADD_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

let initialState = {
   posts: [
      { id: 1, post: "Cyberpunk 2077", message: "Сюжет Cyberpunk 2077 рассказывает о герое/героине Ви из города Найт-Сити — опасной и мультикультурной клоаке будущего с могущественными корпорациями, уличными бандами, насилием, имплантами и сексом. Пытаясь сорвать куш и примкнуть к преступной элите города, Ви и его друг Джеки Уэллс решаются на опасное дело. Естественно, задание вылезет им боком и приведет к головокружительным приключениям, смертям и новым знакомствам. Во время безумного хоровода зрелищных событий, которые позже оказываются лишь прологом, Ви встречает обезбашенную личность из прошлого, рок-музыканта и террориста Джонни Сильверхенда (Киану Ривз). И вот тут у главного героя начинаются реальные проблемы.", likescount: 300, img: cyber },
      { id: 2, post: "Dota 2", message: "Dota 2 — компьютерная многопользовательская командная игра жанра стратегия в реальном времени с элементами компьютерной ролевой игры, реализация известной карты DotA для игры Warcraft III в отдельном клиенте. В игре участвуют две команды по пять человек. Одна команда играет за светлую сторону, другая — за темную.", likescount: 1000, img: dota },
      { id: 3, post: "Fable", message: "Fable - своего рода симулятор героя, пушествующего по городам и селам мира Альбион. Жизнь нашего персонажа, за которым мы следим чуть ли не с младенческого возраста, - постоянный выбор между черным и белым, между добром и злом.", likescount: 5000, img: fable },
   ],
   profile: { photos: {} },
   status: ''
}

const profileReducer = (state = initialState, action: any) => {

   switch (action.type) {

      case ADD_POST: {
         let newPost = {
            id: 4,
            post: action.title,
            message: action.newPostText,
            likescount: 0,
            img: newPostImage
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