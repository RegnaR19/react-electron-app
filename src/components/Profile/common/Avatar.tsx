// аватар профиля
import { Avatar, Grid } from '@mantine/core';
import s from './Avatar.module.css'
import { compose } from 'redux';

const AvatarMain = (props: any) => {

   let avatar = props.profile.photos.large

   return (
      <>
         <Grid>
            <Grid.Col span="content">
               <Avatar src={avatar} className={s.avatar} size={100} />
            </Grid.Col>
         </Grid>
      </>
   );
}

export default compose(AvatarMain);