import { useState } from 'react';
import { Drawer, Button, Group } from '@mantine/core';
import Indent10 from './Indent';

const DrawerOpen2 = () => {
   const [opened, setOpened] = useState(false);
   return (
      <>
         <Drawer
            opened={opened}
            onClose={() => setOpened(false)}
            title="Форма для чего-нибудь"
            position="right"
            padding="xl"
            size="xs"
         >
            ывапдлоыфлдадцфжоуажцукжр
         </Drawer>

         <Group position="center">
            <Button onClick={() => setOpened(true)}
               variant="gradient" gradient={{ from: 'gray', to: 'black' }}>
               Боковое меню #2</Button>
         </Group>
         <Indent10 />
      </>
   );
}

export default DrawerOpen2;