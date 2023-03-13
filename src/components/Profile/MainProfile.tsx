// основная страница профиля, содержит все компоненты
import ProfileInfo from './ProfileInfo';
import HeaderImg from './common/HeaderImg';
import Avatar from './common/Avatar';
import { Divider, Grid } from '@mantine/core';
import WritePostContainer from './WritePostContainer';
import PostElementsContainer from './PostElementsContainer';
import AccountMenu from './AccountMenu';

type Props = {
   profile: any
}

const MainProfile: React.FC<Props> = (props) => {

   return (
      <>

         <AccountMenu profile={props.profile} />
         <HeaderImg />
         <Divider my="sm" />
         <Grid>
            <Grid.Col span="content"><Avatar profile={props.profile} /></Grid.Col>
            <Grid.Col span="content">
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