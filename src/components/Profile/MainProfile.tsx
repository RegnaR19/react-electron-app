// основная страница профиля, содержит все компоненты
import ProfileInfo from './ProfileInfo';
import Avatar from './common/Avatar';
import { Grid } from '@mantine/core';
import WritePostContainer from './Topic/WritePostContainer';
import PostElementsContainer from './Topic/PostElementsContainer';
import ProfileStatus from './ProfileStatus';
import Indent10 from '../Forms/Indent';
import UploadAvatar from './common/UploadAvatar';

type Props = {
   savePhoto: any;
   profile: any,
   status: any,
   updateStatus: any
   isAuth: any
}

const MainProfile: React.FC<Props> = (props) => {

   return (
      <>
         <div className='col2-app'>
            {/* <AccountMenu profile={props.profile} /> */}
            {/* <HeaderImg /> */}
            <div className='big-text'>{props.profile.fullName}</div>
            <Indent10 />
            <UploadAvatar savePhoto={props.savePhoto} />
            <Indent10 />
            <Grid>
               <Grid.Col span="content"><Avatar profile={props.profile} /></Grid.Col>
               <Grid.Col span="auto">
                  <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
                  <ProfileInfo profile={props.profile} status={props.status} />
               </Grid.Col>
            </Grid>
         </div>
         <div className='col2-app'>
            <WritePostContainer />
         </div>

         <div className='col2-app'>
            <PostElementsContainer />
         </div>

      </>
   );
}

export default MainProfile;