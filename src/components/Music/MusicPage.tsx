// основная страница профиля, содержит все компоненты
import { Button, Group, Modal } from "@mantine/core";
import UnderNav from "../Forms/UnderNav";
import { useState } from 'react';
import Indent10 from "../Forms/Indent";

const MusicPage = () => {
   const [opened, setOpened] = useState(false);
   return (
      <>
         <iframe style={{ border: 0, width: '100%', height: 180 }}
            width="100%" height="180"
            src="https://music.yandex.ru/iframe/#track/50685843/7019257"></iframe>
      </>
   );
}

export default MusicPage;