// экспериментальная страница
import { Image } from '@mantine/core';

const TestPage = () => {

   return (
      <>
         <p><h2>Данное приложение скомпилировано на движке Electron, 
            на котором созданы следующие приложения:</h2></p>
         <Image src="./electron.jpg" />
      </>
   );
}

export default TestPage;