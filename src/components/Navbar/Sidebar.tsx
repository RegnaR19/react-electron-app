// страница header
import { Button, Divider, Grid, Group } from '@mantine/core'
import Indent10 from '../Forms/Indent';
import { NavLink } from 'react-router-dom';
import AutoUpdate4 from '../Forms/AutoUpdate4';
import AutoUpdate3 from '../Forms/AutoUpdate3';
import AutoUpdate2 from '../Forms/AutoUpdate2';

const Sidebar = (props: any) => {

   return (
      <>
         <Grid justify="center" align="center">
            <Grid.Col>
               <center><h3>История</h3></center>
               <AutoUpdate2 /><Indent10 />
               <AutoUpdate3 /><Indent10 />
               <AutoUpdate4 />
            </Grid.Col>
         </Grid >
         <Indent10 />
      </>
   );
}

export default Sidebar