import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import MainProfile from './MainProfile';
import { getUserProfile, getUserStatus, updateStatus } from "../../redux/profileReducer";
import {
   useLocation,
   useNavigate,
   useParams,
} from "react-router-dom";
import { compose } from 'redux';

type Props = {
   setUserProfile: any,
   profile: any,
   router: any,
   getUserProfile: any,
   getUserStatus: any,
   status: any,
   updateStatus: any,
   loggerUserID: any,
   isAuth: any
}

const MainProfileContainer: React.FC<Props> = (props) => {

   let { userId } = useParams();
   let navigate = useNavigate();

   useEffect(() => {
      if (!userId) {
         userId = props.loggerUserID;
         console.log(props.loggerUserID)
         if (!userId) {
            navigate('/login')
         }
      }

      if (userId) {
         props.getUserProfile(userId);
         props.getUserStatus(userId);
      }
   }, [])

   return (
      <MainProfile profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
   )
}

let mapStateToProps = (state: any) => {
   return {
      profile: state.profilePage.profile,
      status: state.profilePage.status,
      isAuth: state.auth.isAuth,
      loggerUserID: state.auth.userId
   }
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

export default compose(
   withRouter,
   connect(mapStateToProps, { getUserProfile, getUserStatus, updateStatus }))
   (MainProfileContainer)