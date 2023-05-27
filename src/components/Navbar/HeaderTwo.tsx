// страница header
import { Grid, Group } from '@mantine/core';
import s from './Header.module.css';
import { useMemo } from 'react';

const HeaderTwo = ({ login, isAuth }) => {

   // useMemo(() => {
   //    if (!isAuth) {
   //       console.log('not auth')
   //    }
   //    if (isAuth) {
   //       console.log('auth')
   //    }
   // }, [isAuth, login])

   return (
      <>
         <Grid justify="center" align="center" className={s.header}>
            <Grid.Col span="content">
               <div className="big-title-program">VIA NEXT</div>
            </Grid.Col>
         </Grid>
         <Grid className={s.header}>
            <Grid.Col span="content">
               <Group position="right">
                  {isAuth
                     ? <div className={s.login}>Привет, {login}</div>
                     : <Grid.Col className={s.login}>
                        Вход не выполнен
                     </Grid.Col>

                  }
               </Group>
            </Grid.Col>
         </Grid>
      </>
   );
}



export default HeaderTwo