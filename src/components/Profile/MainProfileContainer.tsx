import React from 'react';
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
   history: string,
   push: string
}

class MainProfileContainer extends React.Component<Props> {

   componentDidMount() {
      let userId = this.props.router.params.userId
      if (!userId) {
         userId = this.props.loggerUserID
         if (!userId) {
            let a = [this.props.history]
            a.push('login')
         }
      }

      this.props.getUserProfile(userId)
      this.props.getUserStatus(userId)
   }

   render() {
      return (
         <MainProfile profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
      )
   }
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