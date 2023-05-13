import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Messages from './Messages/MessagesLink';
import { Grid } from '@mantine/core';
import DialogsForm from './Messages/DialogsForm';
import { notifications } from '@mantine/notifications';
import { IconBrandXbox } from '@tabler/icons-react';

const Dialogs = (props: any) => {

   let dialogsElements =
      props.dialogsPage.dialogs.map((e: any) => <DialogItem id={e.id} key={e.id} name={e.name} />)

   let messagesElements =
      props.dialogsPage.messages.map((e: any) => <Messages id={e.id} key={e.id} message={e.message} />)

   const successForm = () => {
      notifications.show({
         withCloseButton: false,
         autoClose: 5000,
         title: "30G за размещение сообщения!",
         message: 'Спасибо за тест функций.',
         color: 'blue',
         icon: <IconBrandXbox />,
         className: 'my-notification-class',
         loading: false,
         styles: (theme) => ({
            root: {
               backgroundColor: theme.colors.gray[4],
               '&::before': { backgroundColor: theme.white },
            },
            title: { color: theme.black },
            description: { color: theme.black },
         }),
      })
   }

   let addNewMessage = (values: any) => {
      props.sendMessage(values.message)
      successForm()
   }

   return (
      <>
         <div className='col2-app'>
            <div className='big-title'>Сообщения</div>

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
         </div>
      </>
   )
}

export default Dialogs