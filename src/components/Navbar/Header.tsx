// страница header
import { Grid } from '@mantine/core';
import s from './Header.module.css';

const HeaderOne = () => {
   return (
      <>
         <Grid justify="center" align="center" className={s.header}>
            <Grid.Col span="content">
               123
            </Grid.Col>
         </Grid>
      </>
   );
}

export default HeaderOne