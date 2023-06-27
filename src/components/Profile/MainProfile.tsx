// основная страница профиля, содержит все компоненты
import ProfileInfo from './ProfileInfo';
import Avatar from './common/Avatar';
import { Grid } from '@mantine/core';
import WritePostContainer from './Topic/WritePostContainer';
import PostElementsContainer from './Topic/PostElementsContainer';
import ProfileStatus from './ProfileStatus';
import Indent10 from '../Forms/Indent';
import UploadAvatar from './common/UploadAvatar';
import { useAppDispatch, useAppSelector } from '@/hoc/hooks';
import { getUserProfile, getUserStatus, savePhoto } from '@/redux/profileReducer';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const MainProfile = () => {

   const auth = useAppSelector(state => state.auth)
   const profile = useAppSelector(state => state.profilePage.profile)
   const userId = auth.userId

   const dispatch = useAppDispatch()
   const navigate = useNavigate()

   useEffect(() => {
      if (!userId) {
         navigate("/login")
      }
      if (userId) {
         dispatch(getUserProfile(userId))
         dispatch(getUserStatus(userId))
      }
   }, [userId])


   return (
      <>
         <div className='col2-app'>
            <div className='big-text'>{profile.fullName}</div>
            <Indent10 />
            <UploadAvatar savePhoto={savePhoto} />
            <Indent10 />
            <Grid>
               <Grid.Col span="content"><Avatar profile={profile} /></Grid.Col>
               <Grid.Col span="auto">
                  <ProfileStatus />
                  <ProfileInfo profile={profile} auth={auth} />
               </Grid.Col>
            </Grid>
         </div >
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