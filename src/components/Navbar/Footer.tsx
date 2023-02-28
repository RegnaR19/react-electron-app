// страница footer
import { Grid, Col } from '@mantine/core';

export default function FooterOne() {
   return (
      <Grid justify="flex-start" align="center">
         <Grid.Col span="content">
            Просто пустая строка в футере
         </Grid.Col>
      </Grid>
   );
}