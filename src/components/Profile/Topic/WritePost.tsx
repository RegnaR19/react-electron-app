// страница написания постов
import Indent10 from "@/components/Forms/Indent";
import { maxLengthCreator, required } from "@/utils/validators";
import { notifications } from "@mantine/notifications";
import { IconBrandXbox } from "@tabler/icons-react";
import { Form, Field } from 'react-final-form'

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
         <ReduxWriteForm onSubmit={} />
      </>
   )
}

const WritePostForm = (props: any) => {

   const errorNoty = () => {
      notifications.show({
         id: 'hello-there',
         withCloseButton: false,
         onClose: () => console.log('unmounted'),
         onOpen: () => console.log('mounted'),
         autoClose: 10000,
         title: "Вы сделали доброе дело! 10G за новый пост!",
         message: 'Вы разместили новый пост.',
         color: 'green',
         icon: <IconBrandXbox />,
         className: 'my-notification-class',
         loading: false,
         styles: (theme) => ({
            root: {
               backgroundColor: theme.colors.dark[5],
               '&::before': { backgroundColor: theme.white },
            }
         }),
      })
   }

   const maxLength10 = maxLengthCreator(10)
   const onSubmit = async values => {
      await sleep(300)
      window.alert(JSON.stringify(values, 0, 2))
   }

   return (
      <>
         <Form onSubmit={addPost}
            render={({ handleSubmit }) => (
               <form onSubmit={handleSubmit}>
                  <Field placeholder="Заголовок" name="title" component="input"
                     validate={required} />
                  <Field placeholder="Дуров, верни стену!" name="newPostText" component="textarea"
                     validate={required} />
                  <Indent10 />
                  <button onClick={errorNoty}>
                     Опубликовать
                  </button>
                  <Indent10 />
               </form>
            )
            }
         />
      </>
   )
}

export default WritePost;