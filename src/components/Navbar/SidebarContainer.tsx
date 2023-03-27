import React from 'react';
import { connect } from 'react-redux';
import Sidebar from './Sidebar';
import { getAuthUserData } from '@/redux/authReducer';

type Props = {
   getAuthUserData: any
}

class SidebarContainer extends React.Component<Props> {

   componentDidMount() {
      this.props.getAuthUserData()
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


export default connect(mapStateToProps, { getAuthUserData })(SidebarContainer)