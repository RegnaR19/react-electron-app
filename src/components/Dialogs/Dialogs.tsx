import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Messages from './Messages/MessagesLink';
import { Button, Grid, Textarea } from '@mantine/core';
import { IconPencilPlus } from '@tabler/icons';

type Props = {
   state?: any,
   updateNewMessageBody: any,
   sendMessage: any,
   dialogsPage: any,
   newMessageBody: any
}

const Dialogs: React.FC<Props> = ({ ...props }) => {

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
         <Grid grow>
            <Grid.Col span={5} className={s.border}><b>Имена</b></Grid.Col>
            <Grid.Col span={7} className={s.border}><b>Сообщения</b></Grid.Col>
            <Grid.Col span={5} className={s.border}>{dialogsElements}</Grid.Col>
            <Grid.Col span={7} className={s.border}>
               {messagesElements}
            </Grid.Col>
         </Grid>
         <div style={{ marginBottom: 20 }} />
         <Textarea placeholder="Сообщение"
            autosize
            minRows={1}
            size="md"
            value={newMessageBody}
            onChange={onNewMessageChange} />
         <div style={{ marginBottom: 10 }} />
         <Button variant="gradient" leftIcon={<IconPencilPlus />}
            gradient={{ from: 'teal', to: 'lime', deg: 105 }}
            onClick={onSendMessageClick}>
            Отправить
         </Button>
      </>
   );
}

export default Dialogs;