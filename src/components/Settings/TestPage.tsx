// экспериментальная страница
import { Image } from '@mantine/core';
import AutoUpdate from '../Forms/AutoUpdate';
import DrawerOpen from '../Forms/DrawerOpen';

const TestPage = () => {

   return (
      <>
         <h2>Данное приложение скомпилировано на движке Electron,
            на котором созданы следующие приложения:</h2>
         <Image src="./electron.jpg" />
         <DrawerOpen />
      </>
   );
}

export default TestPage;