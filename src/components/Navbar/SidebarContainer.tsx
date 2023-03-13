import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import Sidebar from './Sidebar';
import { setAuthUserData } from '@/redux/authReducer';

type Props = {
   setAuthUserData: any
}

class SidebarContainer extends React.Component<Props> {

   componentDidMount() {
      axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
         { withCredentials: true })
         .then((response: any) => {
            if (response.data.resultCode === 0) {
               let { id, email, login } = response.data.data
               this.props.setAuthUserData(id, email, login)
            }
         })
   }

   render() {
      return (
         <Sidebar {...this.props} />
      )
   }
}

let mapStateToProps = (state: any) => {
   return {
      isAuth: state.auth.isAuth,
      login: state.auth.login
   }
}


export default connect(mapStateToProps, { setAuthUserData })(SidebarContainer)