// экспериментальная страница
import { useState } from 'react';
import { Transition, Paper, Button, rem } from '@mantine/core';
import { useClickOutside } from '@mantine/hooks';

const scaleY = {
   in: { opacity: 1, transform: 'scaleY(1)' },
   out: { opacity: 0, transform: 'scaleY(0)' },
   common: { transformOrigin: 'top' },
   transitionProperty: 'transform, opacity',
};

const TestPage = () => {

   const [opened, setOpened] = useState(false);
   const clickOutsideRef = useClickOutside(() => setOpened(false));

   return (
      <>
         <div
            style={{
               maxWidth: rem(200),
               position: 'relative',
               display: 'flex',
               justifyContent: 'center',
               margin: 'auto',
            }}
         >
            <Button onClick={() => setOpened(true)}>Transition (переход)</Button>
            <Transition mounted={opened} transition={scaleY} duration={200} timingFunction="ease">
               {(styles) => (
                  <Paper
                     shadow="md"
                     style={{ ...styles, position: 'absolute', top: 0, left: 0, right: 0, height: rem(120) }}
                     ref={clickOutsideRef}
                  >
                     Dropdown
                  </Paper>
               )}
            </Transition>
         </div>
      </>
   )
}

export default TestPage;