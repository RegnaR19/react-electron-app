import React from 'react';
import { connect } from 'react-redux';
import MainProfile from './MainProfile';
import { getUserProfile, getUserStatus, updateStatus } from "../../redux/profileReducer";
import Login from './Login';

type Props = {
   isAuth: any
}

class LoginContainer extends React.Component<Props> {

   render() {
      return (
         <Login isAuth={this.props.isAuth} />
      )
   }
}



let mapStateToProps = (state: any) => {
   return {
      isAuth: state.auth.isAuth
   }
}

export default connect(mapStateToProps)(LoginContainer)