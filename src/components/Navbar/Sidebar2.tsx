// страница header
import { useAppSelector } from '@/hoc/hooks';
import { Grid } from '@mantine/core'
import { useSelector } from 'react-redux';

type Type = {
   currentAchievement: any
}

const Sidebar2: React.FC<Type> = () => {

   // const currentAchievement = useSelector((state) => state.achievement.points)

   const currentAchievement = useAppSelector(state => state.achievement.points)


   const total = currentAchievement[1].total + currentAchievement[2].total
   const attach = currentAchievement[1].total
   const status = currentAchievement[2].total

   return (
      <>
         <Grid justify="center" align="center">
            <Grid.Col>
               <center><div className='big-text'>Система достижений</div>
                  <div className='achievement'>
                     <p>{total} G</p>
                     <p>{attach} G</p>
                     <p>{status} G</p>
                  </div>
               </center>
            </Grid.Col>
         </Grid >
      </>
   );
}

export default Sidebar2