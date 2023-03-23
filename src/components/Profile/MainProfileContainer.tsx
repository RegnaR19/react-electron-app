import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import MainProfile from './MainProfile';
import { setUserProfile } from "../../redux/profileReducer";
import {
   useLocation,
   useNavigate,
   useParams,
} from "react-router-dom";

type Props = {
   setUserProfile: any,
   profile: any,
   router: any
}

class MainProfileContainer extends React.Component<Props> {

   componentDidMount() {
      let userId = this.props.router.params.userId
      if (!userId) { userId = 28131 }
      axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
         .then((response: any) => {
            this.props.setUserProfile(response.data)
         })
   }

   render() {
      return (
         <MainProfile profile={this.props.profile} />
      )
   }
}

let mapStateToProps = (state: any) => {
   return {
      profile: state.profilePage.profile
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

export default connect(mapStateToProps, { setUserProfile })(withRouter(MainProfileContainer))