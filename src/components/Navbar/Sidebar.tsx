// страница header
import { Image } from '@mantine/core';
import react from "../../assets/react.png";
import { Grid } from '@mantine/core';
import s from './Sidebar.module.css';
import { IconInnerShadowTopLeft } from '@tabler/icons-react';

export default function Sidebar() {
   return (
      <>
         <Grid justify="center" align="center">
            <Grid.Col>
               <Image src={react} className={s.logo} />
            </Grid.Col>

            <center>
               <IconInnerShadowTopLeft size={80} className={s.preloader} /><br />
            </center>
         </Grid>
      </>
   );
}