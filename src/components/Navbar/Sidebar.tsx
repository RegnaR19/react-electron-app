// страница header
import { Image } from '@mantine/core';
import react from "../../assets/react.png";
import { Grid } from '@mantine/core';
import s from './Sidebar.module.css';
import { IconAnalyze, IconCirclesFilled, IconCircuitBulb, IconInnerShadowTopLeft } from '@tabler/icons-react';

export default function Sidebar() {
   return (
      <>
         <Grid justify="center" align="center">
            <Grid.Col>
               <Image src={react} className={s.logo} />
            </Grid.Col>

            <center>
               Тест аниманий
               <IconInnerShadowTopLeft size={80} className={s.preloader} /><br />
               <IconAnalyze size={80} className={s.preloader} /><br />
               <IconCircuitBulb size={80} className={s.preloader} /><br />
            </center>
         </Grid>
      </>
   );
}