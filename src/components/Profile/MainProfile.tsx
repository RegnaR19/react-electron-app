// основная страница профиля, содержит все компоненты
import ProfileInfo from './ProfileInfo';
import HeaderImg from './common/HeaderImg';
import Avatar from './common/Avatar';
import { Divider, Grid } from '@mantine/core';
import WritePostContainer from './Topic/WritePostContainer';
import PostElementsContainer from './Topic/PostElementsContainer';
import AccountMenu from './AccountMenu';
import ProfileStatus from './ProfileStatus';
import Indent10 from '../Forms/Indent';

type Props = {
   profile: any,
   status: any,
   updateStatus: any
}

const MainProfile: React.FC<Props> = (props) => {

   return (
      <>
         <div className='col2-app'>
            {/* <AccountMenu profile={props.profile} /> */}
            {/* <HeaderImg /> */}
            <h3>{props.profile.fullName}</h3>

            <Grid>
               <Grid.Col span="content"><Avatar profile={props.profile} /></Grid.Col>
               <Grid.Col span="content">
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