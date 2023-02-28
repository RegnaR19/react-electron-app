import avatar from "../assets/avatar.jpg";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";

let store = {
   _state: {
      dialogsPage: {
         dialogs: [
            { id: 1, name: "Валера" },
            { id: 2, name: "Димон" },
            { id: 3, name: "Руслан" }
         ],
         messages: [
            { id: 1, message: "Hi" },
            { id: 2, message: "How are you? Im in Almenevo today" },
            { id: 3, message: "Hello" },
         ],
         newMessageBody: 'Ку'
      },
      profilePage: {
         posts: [
            { id: 1, post: "Даттебайо", message: "Я тут новенькая", likescount: 300, img: avatar },
            { id: 2, post: "Chidori!", message: "НАРУТО!!!11!", likescount: 1000, img: avatar },
            { id: 3, post: "Rasengan!", message: "САСКЕ!!!11!", likescount: 5000, img: avatar },
         ],
         newPostText: 'dattebayo naruto'
      }
   },
   // задаем возврат состояния
   getState() {
      return this._state
   },
   // вызов подписчика
   _callSubscriber(_state: any) {
      console.log('State was changed')
   },

   // делаем диспатч экшенов по типу
   dispatch(action: any) {
      this._state.profilePage = profileReducer(this._state.profilePage, action)
      this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
      this._callSubscriber(this._state)
   },

   subscribe(observer: any) {
      this._callSubscriber = observer;
   },
}

export default store