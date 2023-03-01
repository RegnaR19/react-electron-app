// основная страница настроек
import ChangePassword from "./ChangePassword";
import UploadAvatar from "./UploadPhoto"
import { Text } from '@mantine/core';
import Indent10 from "../Forms/Indent";
import { Alert } from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons';

const SettingsPage = () => {
   return (
      <>
         <Text size="sm">Фото профиля</Text>
         <Indent10 />
         <UploadAvatar />
         <Indent10 />
         <ChangePassword />
         <Indent10 />
         <Alert icon={<IconAlertCircle size={16} />} title="Bummer!" color="red">
            Данная страница экспериментальная и тут пока ничего не работает.
         </Alert>
      </>
   );
}

export default SettingsPage;