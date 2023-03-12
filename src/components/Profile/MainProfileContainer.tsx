import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import MainProfile from './MainProfile';
import { setUserProfile } from "../../redux/profileReducer";
import AccountMenu from './AccountMenu';

type Props = {
   setUserProfile: any,
   profile: any
}

class MainProfileContainer extends React.Component<Props> {

   componentDidMount() {
      axios.get(`https://social-network.samuraijs.com/api/1.0/profile/11`)
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

export default connect(mapStateToProps, { setUserProfile })(MainProfileContainer)