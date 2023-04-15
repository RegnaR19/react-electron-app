// страница header
import { Button, Grid, Group } from '@mantine/core'
import AutoUpdate3 from '../Forms/AutoUpdate3'
import Indent10 from '../Forms/Indent';
import { NavLink } from 'react-router-dom';
import DrawerOpen from '../Forms/DrawerOpen';
import DrawerOpen2 from '../Forms/DrawerOpen2';
import { notifications } from '@mantine/notifications';
import { IconBrandXbox } from '@tabler/icons-react';

export default function Sidebar(props: any) {

   const successForm = () => {
      notifications.show({
         withCloseButton: false,
         autoClose: 5000,
         title: "80G за выход из аккаунта!",
         message: 'Спасибо за тест функций.',
         color: 'lime',
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

   return (
      <>
         <Grid justify="center" align="center">
            <Grid.Col>
               {props.isAuth ? <div>Вы вошли как: {props.login} <Button onClick={props.logout} onClickCapture={successForm}> [Выход]</Button></div>
                  : <NavLink to="login">
                     <Group position="center">
                        <Button variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>
                           Вход в аккаунт</Button>
                     </Group>
                  </NavLink>
               }
            </Grid.Col>
            <Grid.Col>
               <DrawerOpen />
               <DrawerOpen2 />
            </Grid.Col>

            <AutoUpdate3 />
         </Grid >
         <Indent10 />
      </>
   );
}