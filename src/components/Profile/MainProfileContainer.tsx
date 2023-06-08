import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import MainProfile from './MainProfile';
import { getUserProfile, getUserStatus, savePhoto, updateStatus } from "../../redux/profileReducer";
import { useParams } from "react-router-dom";
import { AppStateType } from '@/redux/redux-store';

type Props = {
   authorisedUserID: any;
   savePhoto: any;
   profile: any,
   getUserProfile: any,
   getUserStatus: any,
   status: any,
   updateStatus: any,
}

const MainProfileContainer: React.FC<Props> = (props) => {

   let userId = 2
   console.log({ userId })
   useEffect(() => {


      if (!userId) {
         console.log("айди еще нету")
         userId = props.authorisedUserID
      }

      if (userId) {
         props.getUserProfile(userId);
         props.getUserStatus(userId);
      }

      console.log(userId)


   }, [userId])



   return (
      <MainProfile profile={props.profile} status={props.status} updateStatus={props.updateStatus} savePhoto={props.savePhoto} />
   )
}

function withRouter(Children) {
   return (props) => {

      const match = { params: useParams() };
      return <Children {...props} match={match} />
   }
}

let mapStateToProps = (state: AppStateType) => {
   return {
      profile: state.profilePage.profile,
      status: state.profilePage.status,
      authorisedUserID: state.auth.userId
   }
}

export default
   connect(mapStateToProps, { getUserProfile, getUserStatus, updateStatus, savePhoto })(withRouter(MainProfileContainer))