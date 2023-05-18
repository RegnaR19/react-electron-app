import React from 'react';
import { connect } from 'react-redux';
import { getAuthUserData, logout } from '@/redux/authReducer';
import { compose } from 'redux';
import HeaderTwo from './HeaderTwo';
import Navigation from './Navigation';

type Props = {
   getAuthUserData: any
}

class HeaderTwoContainer extends React.Component<Props> {

   componentDidMount() {
      this.props.getAuthUserData()
   }

   render() {
      return (
         <HeaderTwo {...this.props} />
      )
   }
}

let mapStateToProps = (state: any) => {
   return {
      isAuth: state.auth.isAuth,
      login: state.auth.login
   }
}


export default compose(
   connect(mapStateToProps, { getAuthUserData, logout })
)
   (HeaderTwoContainer)