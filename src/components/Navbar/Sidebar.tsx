// страница header
import { Image } from '@mantine/core';
import react from "../../assets/react.png";
import { Grid } from '@mantine/core';
import s from './Sidebar.module.css';
import RatingsPage from '../Settings/RatingsPage';

export default function Sidebar() {
   return (
      <>
         <Grid justify="center" align="center">
            <Grid.Col>
               <Image src={react} className={s.logo} />
            </Grid.Col>
            <Grid.Col>
               <center>
                  <RatingsPage />
                  <p>Проект был<br />
                     создан на:</p>
                  <p>1. React</p>
                  <p>2. Node.js</p>
                  <p>3. JavaScript</p>
                  <p>4. TypeScript</p>
                  <p>5. Mantine UI</p>
                  <p>6. Vite NPM</p>
                  <p>7. GitHub</p>
                  <p>8. VS Code</p>
                  <p>9. Electron</p>
                  <p>10. На опыте :)</p>
               </center>
            </Grid.Col>
         </Grid>
      </>
   );
}