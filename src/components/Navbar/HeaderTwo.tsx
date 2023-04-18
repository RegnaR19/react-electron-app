// страница header
import { Button, Grid } from '@mantine/core';
import s from './Header.module.css';
import { notifications } from '@mantine/notifications';
import { IconBrandXbox } from '@tabler/icons-react';

const HeaderTwo = (props: any) => {

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
         <Grid justify="center" align="center" className={s.header}>
            <Grid.Col span="content">
               <Grid justify="center" align="center">
                  <Grid.Col>
                     {props.isAuth ? <div>Вы вошли как {props.login} &nbsp; <Button onClick={props.logout} onClickCapture={successForm}
                        variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>Выход</Button></div>
                        : 'Вход  не выполнен.'
                     }
                  </Grid.Col>
               </Grid>
            </Grid.Col>
         </Grid>
      </>
   );
}

export default HeaderTwo