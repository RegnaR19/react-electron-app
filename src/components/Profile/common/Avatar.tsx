// аватар профиля
import { Avatar, Grid } from '@mantine/core';
import s from './Avatar.module.css'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { compose } from 'redux';
import { Notification } from '@mantine/core';

const AvatarMain = ({ savePhoto, profile }) => {

   let avatar = profile.photos.small

   const onMainPhotoSelected = (e: any) => {
      let partName = e.target.files[0];
      if (e.target.files.length) {
         savePhoto(partName)
      }
   }

   return (
      <>
         <Grid>
            <Grid.Col span="content">
               <Avatar src={avatar} className={s.avatar} size={100} />
               <input type={'file'} onChange={onMainPhotoSelected} />
               {/* <Notification color="teal" withCloseButton={false} className={s.leftSide}>
                  <pre>{JSON.stringify({ avatar, onMainPhotoSelected }, null, 2)}</pre>
               </Notification> */}
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