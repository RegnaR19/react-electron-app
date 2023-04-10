import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Messages from './Messages/MessagesLink';
import { Grid } from '@mantine/core';
import { Field, reduxForm } from 'redux-form';

type Props = {
   state?: any,
   updateNewMessageBody: any,
   sendMessage: any,
   dialogsPage: any,
   newMessageBody: any,
   handleSubmit?: any
}

const Dialogs = (props: any) => {

   let dialogsElements =
      props.dialogsPage.dialogs.map((e: any) => <DialogItem id={e.id} key={e.id} name={e.name} />)

   let messagesElements =
      props.dialogsPage.messages.map((e: any) => <Messages id={e.id} key={e.id} message={e.message} />)

   let newMessageBody = props.newMessageBody

   let onSendMessageClick = () => {
      props.sendMessage()
   }

   let onNewMessageChange = (e: any) => {
      let body = e.target.value
      props.updateNewMessageBody(body)
   }

   return (
      <>
         Форма диалога

         <Grid grow>
            <Grid.Col span={5} className={s.border}><b>Имена</b></Grid.Col>
            <Grid.Col span={7} className={s.border}><b>Сообщения</b></Grid.Col>
            <Grid.Col span={5} className={s.border}>{dialogsElements}</Grid.Col>
            <Grid.Col span={7} className={s.border}>
               {messagesElements}
            </Grid.Col>
         </Grid>
         <div style={{ marginBottom: 20 }} />
         <ReduxMessageForm />
      </>
   )
}

const DialogsForm = (props: any) => {

   return (
      <>
         <form onSubmit={props.handleSubmit}>
            <Field placeholder="Сообщение" name='message' component="textarea" />
            <div style={{ marginBottom: 10 }} />
            <button>
               Отправить
            </button>
         </form>
      </>
   )
}

const ReduxMessageForm = reduxForm({ form: 'messages' })(DialogsForm)

export default Dialogs;