// страница header
import { Button, Grid, Group } from '@mantine/core';
import s from './Header.module.css';
import { notifications } from '@mantine/notifications';
import { IconBrandXbox } from '@tabler/icons-react';
import { NavLink } from 'react-router-dom';

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
                     {props.isAuth ? <div className={s.login}>Привет, {props.login} &nbsp; <Button onClick={props.logout} onClickCapture={successForm}
                        variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>Выход</Button></div>
                        : <>
                           <Grid.Col span="auto" className={s.login}>Вход не выполнен &nbsp;
                              <NavLink to="login">
                                 <Button variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>
                                    Войти</Button>
                              </NavLink>
                           </Grid.Col>
                        </>
                     }
                  </Grid.Col>
               </Grid>
            </Grid.Col >
         </Grid >
      </>
   );
}



export default HeaderTwo