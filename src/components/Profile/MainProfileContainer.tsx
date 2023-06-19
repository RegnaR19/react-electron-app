import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import MainProfile from './MainProfile';
import { getUserProfile, getUserStatus, savePhoto, updateStatus } from "../../redux/profileReducer";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from '@/redux/redux-store';
import { compose } from 'redux';

type Props = {
   isAuth: any;
   authUserId: any;
   savePhoto: any;
   profile: any,
   getUserProfile: any,
   getUserStatus: any,
   status: any,
   updateStatus: any,
}

const MainProfileContainer: React.FC<Props> = (props) => {

   let { userId } = useParams()
   const navigate = useNavigate()

   useEffect(() => {
      if (!userId) {
         userId = props.authUserId

         if (!userId) {
            navigate("/login")
         }
      }

      if (userId) {
         props.getUserProfile(userId);
         props.getUserStatus(userId);
      }

   }, [props.authUserId, userId])

   return (
      <MainProfile
         profile={props.profile}
         status={props.status}
         updateStatus={props.updateStatus}
         savePhoto={props.savePhoto}
         isAuth={props.isAuth} />
   )
}

let mapStateToProps = (state: RootState) => {
   return {
      profile: state.profilePage.profile,
      status: state.profilePage.status,
      authUserId: state.auth.userId,
      isAuth: state.auth.isAuth
   }
}

export default
   compose(connect(mapStateToProps, { getUserProfile, getUserStatus, updateStatus, savePhoto })(MainProfileContainer))