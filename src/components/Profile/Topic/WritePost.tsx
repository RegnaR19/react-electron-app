// страница написания постов
import Indent10 from "@/components/Forms/Indent";
import { Button, Grid, Input, Textarea } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { IconBrandXbox } from "@tabler/icons-react";
import { Form, Field } from 'react-final-form'
import s from "../../Common/FormsControls.module.css"
import UploadPhotoPost from "./UploadPhotoPost";
import { useDispatch } from 'react-redux';

type Props = {
   addPost: any,
}

const WritePost: React.FC<Props> = ({ ...props }) => {

   // const dispatch = useDispatch()

   // const addAchievement = (achievement: number) => {
   //    dispatch()
   // }

   const successForm = () => {
      notifications.show({
         withCloseButton: false,
         autoClose: 10000,
         id: "newpost",
         title: "50G за новый пост!",
         message: 'Вы разместили новый пост.',
         color: 'green',
         icon: <IconBrandXbox />,
         className: 'my-notification-class',
         loading: false,
         styles: (theme) => ({
            root: {
               backgroundColor: theme.colors.gray[1],
               '&::before': { backgroundColor: theme.white },
            },
            title: { color: theme.black },
            description: { color: theme.black },
         }),
      })
   }

   const addPost = (values: any) => {
      props.addPost(values.newPostText, values.title)
      successForm()
   }

   type Employee = {
      title?: any
      newPostText?: any
   }

   return (
      <>
         <div className='big-title'>Новая запись</div>
         <Form onSubmit={addPost}
            validate={(values: any) => {
               const errors: Employee = {}
               if (!values.title) {
                  errors.title = 'Необходимо заполнить заголовок'
               }
               if (!values.newPostText) {
                  errors.newPostText = 'Необходимо заполнить сообщение'
               }
               return errors
            }}
            render={({ handleSubmit, submitting }) => (
               <form onSubmit={handleSubmit}>
                  <Field name="title" component="input">
                     {({ input, meta }) => (
                        <div className={s.form}>
                           <Input {...input} type="text" placeholder="Заголовок" />
                           {meta.error && meta.touched && <span>{meta.error}</span>}
                        </div>
                     )}
                  </Field>
                  <Indent10 />
                  <Field name="newPostText" component="textarea">
                     {({ input, meta }) => (
                        <div className={s.form}>
                           <Textarea {...input} placeholder="Дуров, верни стену!" />
                           {meta.error && meta.touched && <span>{meta.error}</span>}
                        </div>
                     )}
                  </Field>
                  <Indent10 />
                  <Grid justify="right" align="center">
                     <Grid.Col span="auto"><UploadPhotoPost /></Grid.Col>
                     <Grid.Col span="content">
                        <Button type="submit" variant="gradient" gradient={{ from: 'red', to: 'yellow', deg: 60 }} disabled={submitting}>
                           Опубликовать
                        </Button>
                     </Grid.Col>
                  </Grid>
                  <Indent10 />

               </form>
            )
            }
         />
      </>
   )
}

export default WritePost;