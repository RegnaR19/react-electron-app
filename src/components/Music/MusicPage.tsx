// основная страница профиля, содержит все компоненты
import { useState } from 'react';

const MusicPage = () => {
   
   return (
      <>
         <iframe style={{ border: 0, width: '100%', height: 180 }}
            width="100%" height="180"
            src="https://music.yandex.ru/iframe/#track/50685843/7019257"></iframe>
      </>
   );
}

export default MusicPage;