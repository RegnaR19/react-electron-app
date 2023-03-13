// аватар профиля
import { Avatar, Button, Group, Image, Skeleton } from '@mantine/core';
import { useState } from 'react';
import s from './Avatar.module.css'

const AvatarMain = (props: any) => {

   const [visible, setVisible] = useState(false);
   let avatar = props.profile.photos.small

   return (
      <>
         <Skeleton height={100} mb="md" radius="lg" visible={visible}>
            <Avatar src={avatar} className={s.avatar} size={100} />
         </Skeleton>
         <Group>
            <Button variant="light" onClick={() => setVisible((v) => !v)}>Скрыть</Button>
         </Group>
      </>
   );
}

export default AvatarMain;