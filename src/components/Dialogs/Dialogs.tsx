import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Messages from './Messages/MessagesLink';
import { Grid } from '@mantine/core';
import DialogsForm from './Messages/DialogsForm';

const Dialogs = (props: any) => {

   let dialogsElements =
      props.dialogsPage.dialogs.map((e: any) => <DialogItem id={e.id} key={e.id} name={e.name} />)

   let messagesElements =
      props.dialogsPage.messages.map((e: any) => <Messages id={e.id} key={e.id} message={e.message} />)

   let addNewMessage = (values: any) => {
      props.sendMessage(values.message)
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

         <DialogsForm addNewMessage={addNewMessage} />
      </>
   )
}

export default Dialogs