// основная страница профиля, содержит все компоненты
import ProfileInfo from './ProfileInfo';
import HeaderImg from './common/HeaderImg';
import Avatar from './common/Avatar';
import { Divider, Grid } from '@mantine/core';
import WritePostContainer from './Topic/WritePostContainer';
import PostElementsContainer from './Topic/PostElementsContainer';
import AccountMenu from './AccountMenu';
import ProfileStatus from './ProfileStatus';

type Props = {
   profile: any,
   status: any,
   updateStatus: any
}

const MainProfile: React.FC<Props> = (props) => {

   return (
      <>

         <AccountMenu profile={props.profile} />
         {/* <HeaderImg /> */}
         <Divider my="sm" />
         <Grid>
            <Grid.Col span="content"><Avatar profile={props.profile} /></Grid.Col>
            <Grid.Col span="content">
               <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
               <hr />
               <ProfileInfo profile={props.profile} />
            </Grid.Col>
         </Grid>
         <Divider my="sm" />
         <WritePostContainer />
         <Divider my="sm" />
         <PostElementsContainer />
      </>
   );
}

export default MainProfile;