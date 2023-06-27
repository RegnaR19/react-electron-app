// страница header
import { useAppSelector } from '@/hoc/hooks';
import { Grid } from '@mantine/core'

const Sidebar2 = () => {

   const total = useAppSelector(state => state.achievement.total)
   const attach = useAppSelector(state => state.achievement.attach)
   const status = useAppSelector(state => state.achievement.status)
   const post = useAppSelector(state => state.achievement.post)

   return (
      <>
         <Grid justify="center" align="center">
            <Grid.Col>
               <center><div className='big-text'>Система достижений</div>
                  <div className='achievement'>
                     <p>{total} G</p>
                     <p>{attach} G</p>
                     <p>{status} G</p>
                     <p>{post} G</p>
                  </div>
               </center>
            </Grid.Col>
         </Grid >
      </>
   );
}

export default Sidebar2