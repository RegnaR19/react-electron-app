// страница написания постов
import Indent10 from "@/components/Forms/Indent";
import { Field, reduxForm } from "redux-form";

type Props = {
   newPostText?: any,
   addPost?: any,
   updateNewPostText?: any,
   handleSubmit?: any,
   title: any
}

const WritePost = (props: any) => {

   let addPost = (values: any) => {
      props.addPost(values.newPostText, values.title)
   }

   return (
      <>
         <b>Опубликовать новую запись</b>
         <ReduxWriteForm onSubmit={addPost} />
      </>
   )
}

const WritePostForm = (props: any) => {

   return (
      <>
         <form onSubmit={props.handleSubmit}>
            <Field placeholder="Заголовок" name="title" component="input" />
            <Field placeholder="Дуров, верни стену!" name="newPostText" component="textarea" />
            <Indent10 />
            <button>
               Опубликовать
            </button>
            <Indent10 />
         </form>
      </>
   )
}

const ReduxWriteForm = reduxForm({ form: 'posts' })(WritePostForm)


export default WritePost;