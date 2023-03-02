// основная страница настроек
import ChangePassword from "./ChangePassword";
import UploadAvatar from "./UploadPhoto"
import { Text } from '@mantine/core';
import Indent10 from "../Forms/Indent";

const SettingsPage = () => {
   return (
      <>
         <Text size="sm">Фото профиля</Text>
         <Indent10 />
         <UploadAvatar />
         <Indent10 />
         <ChangePassword />
      </>
   );
}

export default SettingsPage;