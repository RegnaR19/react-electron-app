// страница header
import { Button, Grid, Group } from '@mantine/core'
import AutoUpdate3 from '../Forms/AutoUpdate3'
import Indent10 from '../Forms/Indent';
import { NavLink } from 'react-router-dom';
import DrawerOpen from '../Forms/DrawerOpen';
import DrawerOpen2 from '../Forms/DrawerOpen2';

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

            <Grid.Col>
               <DrawerOpen />
               <DrawerOpen2 />
            </Grid.Col>

            <AutoUpdate3 />
         </Grid>
         <Indent10 />
      </>
   );
}