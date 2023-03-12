// аватар профиля
import { Button, Group, Image, Skeleton } from '@mantine/core';
import { useState } from 'react';
import s from './Avatar.module.css'

const Avatar = (props: any) => {

   const [visible, setVisible] = useState(false);

   return (
      <>
         <Skeleton height={100} mb="md" radius="lg" visible={visible}>
            <Image src={props.profile.photos.small} className={s.avatar} />
         </Skeleton>
         <Group>
            <Button variant="light" onClick={() => setVisible((v) => !v)}>Скрыть</Button>
         </Group>
      </>
   );
}

export default Avatar;