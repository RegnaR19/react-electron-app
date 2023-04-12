// страница написания постов
import { titleInput } from "@/components/Common/FormsControls";
import Indent10 from "@/components/Forms/Indent";
import { Button, Input, Textarea } from "@mantine/core";
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

const WritePost: React.FC<Props> = ({ ...props }) => {

   const successForm = () => {
      notifications.show({
         id: 'hello-there',
         withCloseButton: false,
         autoClose: 5000,
         title: "10G за новый пост!",
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

   let addPost = (values: any) => {
      props.addPost(values.newPostText, values.title)
      successForm()
   }

   type Employee = {
      title?: any
      newPostText?: any
   }

   return (
      <>
         <h4>Опубликовать новую запись</h4>
         <Form onSubmit={addPost}
            validate={(values: any) => {
               const errors: Employee = {}
               if (!values.title) {
                  errors.title = 'Необходимо заполнить'
               }
               if (!values.newPostText) {
                  errors.newPostText = 'Необходимо заполнить'
               }
               return errors
            }}
            render={({ handleSubmit, values, submitting }) => (
               <form onSubmit={handleSubmit}>
                  <Field name="title" component={titleInput}>
                     {({ input, meta }) => (
                        <div>
                           <Input {...input} type="text" placeholder="Заголовок" />
                           {meta.error && meta.touched && <span>{meta.error}</span>}
                        </div>
                     )}
                  </Field>
                  <Indent10 />
                  <Field name="newPostText" component="textarea">
                     {({ input, meta }) => (
                        <div>
                           <Textarea {...input} placeholder="Дуров, верни стену!" />
                           {meta.error && meta.touched && <span>{meta.error}</span>}
                        </div>
                     )}
                  </Field>
                  <Indent10 />
                  <Button type="submit" disabled={submitting}>
                     Опубликовать
                  </Button>
                  <Indent10 />
                  <pre>{JSON.stringify(values, null, 2)}</pre>
               </form>
            )
            }
         />
      </>
   )
}

export default WritePost;