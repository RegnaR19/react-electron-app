import s from './Dialogs.module.css';
import DialogItem from '../DialogItem/DialogItem';
import Messages from './MessagesLink';
import { Button, Grid, Textarea } from '@mantine/core';
import { Field, Form } from 'react-final-form';
import Indent10 from '../../Forms/Indent';

type Props = {
   addNewMessage?: any
}

const DialogsForm: React.FC<Props> = (props) => {

   type Employee = {
      message?: any
   }

   return (
      <Form onSubmit={props.addNewMessage}
         validate={(values: any) => {
            const errors: Employee = {}
            if (!values.message) {
               errors.message = 'Необходимо заполнить поле'
            }
            return errors
         }}
         render={({ handleSubmit, values, submitting }) => (
            <form onSubmit={handleSubmit}>
               <Field placeholder="Сообщение" name='message' component="textarea">
                  {({ input, meta }) => (
                     <div>
                        <Textarea {...input} placeholder="Текст сообщения" />
                        {meta.error && meta.touched && <span>{meta.error}</span>}
                     </div>
                  )}
               </Field>
               <Indent10 />
               <Button type="submit" disabled={submitting}>
                  Отправить
               </Button>
               <pre>{JSON.stringify(values, null, 2)}</pre>
            </form>
         )}
      />
   )
}

export default DialogsForm