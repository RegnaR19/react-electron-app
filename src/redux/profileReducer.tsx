import paris from "../assets/p1.jpg";
import abstract from "../assets/p2.jpg";
import sochi from "../assets/p3.jpg";
import sochi2 from "../assets/p4.jpeg";

const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

let initialState = {
   posts: [
      { id: 1, post: "Париж", message: "Виды на Париж", likescount: 300, img: paris },
      { id: 2, post: "Абстракция", message: "Картинка-абстракция", likescount: 1000, img: abstract },
      { id: 3, post: "Сочи", message: "Сочи", likescount: 5000, img: sochi },
   ],
   newPostText: 'dattebayo naruto'
}

const profileReducer = (state = initialState, action: any) => {

   switch (action.type) {

      case ADD_POST: {
         let stateCopy = { ...state }
         let text = state.newPostText
         let newPost = {
            id: 4,
            post: "Новый пост",
            message: text,
            likescount: 40,
            img: sochi2
         }
         if (text != '') {
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newPost)
            stateCopy.newPostText = ''
         }
         else if (text === '') {
            let a = 'Вы ничего не ввели!'
            alert(a)
         }
         return stateCopy
      }

      case UPDATE_NEW_POST_TEXT: {
         let stateCopy = { ...state }
         stateCopy.newPostText = action.text
         return stateCopy
      }
      default:
         return state
   }
}

export const addPostCreator = () => {
   return {
      type: ADD_POST
   }
}

export const updateNewPostTextCreator = (text: any) => {
   return {
      type: UPDATE_NEW_POST_TEXT, text: text
   }
}

export default profileReducer