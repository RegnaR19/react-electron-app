// страница header
import { Button, Divider, Grid, Group } from '@mantine/core'
import Indent10 from '../Forms/Indent';
import AutoUpdate4 from '../Forms/AutoUpdate4';
import AutoUpdate3 from '../Forms/AutoUpdate3';
import AutoUpdate2 from '../Forms/AutoUpdate2';
import AutoUpdate5 from '../Forms/AutoUpdate5';
import AutoUpdate6 from '../Forms/AutoUpdate6';

const Sidebar = (props: any) => {

   return (
      <>
         <Grid justify="center" align="center">
            <Grid.Col>
               <center><div className='big-title'>История</div></center>
               <AutoUpdate2 /><Indent10 />
               <AutoUpdate3 /><Indent10 />
               <AutoUpdate4 /><Indent10 />
               <AutoUpdate5 /><Indent10 />
               <AutoUpdate6 />
            </Grid.Col>
         </Grid >
         <Indent10 />
      </>
   );
}

export default Sidebar