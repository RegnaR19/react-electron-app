// аватар профиля
import { Button, Group, Image, Skeleton } from '@mantine/core';
import { useState } from 'react';
import avatar from "../../../assets/avatar.jpg";
import s from './Avatar.module.css'

const Avatar = () => {

   const [visible, setVisible] = useState(false);

   return (
      <>
         <Skeleton height={100} mb="md" radius="lg" visible={visible}>
            <Image src={avatar} className={s.avatar} />
         </Skeleton>
         <Group>
            <Button gradient={{ from: 'indigo', to: 'cyan' }} onClick={() => setVisible((v) => !v)}>Скрыть</Button>
         </Group>
      </>
   );
}

export default Avatar;