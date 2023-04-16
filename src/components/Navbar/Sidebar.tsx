// страница header
import { Button, Divider, Grid, Group, Space } from '@mantine/core'
import Indent10 from '../Forms/Indent';
import { NavLink } from 'react-router-dom';
import DrawerOpen from '../Forms/DrawerOpen';
import DrawerOpen2 from '../Forms/DrawerOpen2';
import AutoUpdate4 from '../Forms/AutoUpdate4';
import AutoUpdate3 from '../Forms/AutoUpdate3';
import AutoUpdate2 from '../Forms/AutoUpdate2';

export default function Sidebar(props: any) {

   return (
      <>
         <Grid justify="center" align="center">
            <Grid.Col>
               {props.isAuth ? ''
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
            <Grid.Col>
               <Divider my="sm" />
               <AutoUpdate2 /><Divider my="sm" />
               <AutoUpdate3 /><Divider my="sm" />
               <AutoUpdate4 />
            </Grid.Col>
         </Grid >
         <Indent10 />
      </>
   );
}