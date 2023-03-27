// страница написания постов
import { connect } from "react-redux";
import { compose } from "redux";
import { addPostCreator, updateNewPostTextCreator } from "../../redux/profileReducer";
import WritePost from "./WritePost";

let mapStateToProps = (state: any) => {
   return {
      newPostText: state.profilePage.newPostText
   }
}

let mapDispatchToProps = (dispatch: any) => {
   return {
      updateNewPostText: (text: any) => {
         dispatch(updateNewPostTextCreator(text))
      },
      addPost: () => {
         dispatch(addPostCreator())
      }
   }
}

export default compose(connect(mapStateToProps, mapDispatchToProps))(WritePost);