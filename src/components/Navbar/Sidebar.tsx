// страница header
import { Button, Grid, Group } from '@mantine/core'
import s from './Sidebar.module.css'
import { IconInnerShadowTopLeft } from '@tabler/icons-react'
import AutoUpdate3 from '../Forms/AutoUpdate3'
import Indent10 from '../Forms/Indent';
import { NavLink } from 'react-router-dom';

export default function Sidebar(props: any) {
   return (
      <>
         <Grid justify="center" align="center">
            <Grid.Col>
               {props.isAuth ? 'Вы вошли как: ' + props.login
                  : <NavLink to="login">
                     <Group position="center">
                        <Button variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }}>
                           Вход в аккаунт</Button>
                     </Group>
                  </NavLink>
               }

            </Grid.Col>
            <IconInnerShadowTopLeft size={100} className={s.preloader} />
            <AutoUpdate3 />
         </Grid>
         <Indent10 />
      </>
   );
}