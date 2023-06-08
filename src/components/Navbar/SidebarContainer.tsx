import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import { getAuthUserData, logout } from '@/redux/authReducer';
import { compose } from 'redux';
import Sidebar from './Sidebar';
import { AppStateType } from '@/redux/redux-store';

type Props = {
   getAuthUserData?: any
}

const SidebarContainer: React.FC<Props> = (props) => {

   useMemo(() => {
      props.getAuthUserData()
   }, [])

   return (
      <>
         <Sidebar />
      </>
   )
}

let mapStateToProps = (state: AppStateType) => {
   return {
      isAuth: state.auth.isAuth,
      login: state.auth.login
   }
}


export default compose(connect(mapStateToProps, { getAuthUserData, logout }))(SidebarContainer) 