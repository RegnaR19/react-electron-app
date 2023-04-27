// основная страница настроек
import ChangePassword from "./ChangePassword";
import UploadAvatar from "./UploadPhoto"
import { Text } from '@mantine/core';
import Indent10 from "../Forms/Indent";

const SettingsPage = () => {
   return (
      <>

         <div className="col2-app">
            <h3>Настройки</h3>

            <Text size="sm">Фото профиля</Text>
            <Indent10 />
            <UploadAvatar />
            <Indent10 />
            <ChangePassword />
         </div>
      </>
   );
}

export default SettingsPage;