// аватар профиля
import { Avatar, Button, Grid, Group, Image, Skeleton } from '@mantine/core';
import s from './Avatar.module.css'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { compose } from 'redux';
import UploadAvatar from '@/components/Profile/common/UploadAvatar';

const AvatarMain = (props: any) => {

   let avatar = props.profile.photos.small

   return (
      <>
         <Grid>
            <Grid.Col span="content">
               <Avatar src={avatar} className={s.avatar} size={100} />
               <UploadAvatar />
            </Grid.Col>
         </Grid>
      </>
   );
}

function withRouter(Component: any) {
   function ComponentWithRouterProp(props: any) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
         <Component
            {...props}
            router={{ location, navigate, params }}
         />
      );
   }
   return ComponentWithRouterProp;
}

export default compose(withRouter(AvatarMain));