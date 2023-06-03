// страница header
import { Grid } from '@mantine/core'
import Indent10 from '../Forms/Indent';

const Sidebar2 = () => {

   return (
      <>
         <Grid justify="center" align="center">
            <Grid.Col>
               <center><div className='big-text'>Achievement system</div><Indent10 /> (будет реализовано в след. обновлениях)
                  <br /><div className='achievement'><p>0 G</p></div>

               </center>
            </Grid.Col>
         </Grid >
         <Indent10 />
      </>
   );
}

export default Sidebar2