// страница header
import { Grid, Group } from '@mantine/core';
import s from './Header.module.css';

const HeaderTwo = (props: any) => {

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
                  {props.isAuth ? <div className={s.login}>Привет, {props.login}</div>
                     : <>
                        <Grid.Col className={s.login}>
                           Вход не выполнен
                        </Grid.Col>
                     </>
                  }
               </Group>
            </Grid.Col>
         </Grid>
      </>
   );
}



export default HeaderTwo