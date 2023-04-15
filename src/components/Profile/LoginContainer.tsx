import { connect } from 'react-redux';
import Login from './Login';
import { compose } from 'redux';

const LoginContainer = (props: any) => {
   return (
      <Login isAuth={props.isAuth} />
   )
}

let mapStateToProps = (state: any) => {
   return {
      isAuth: state.auth.isAuth
   }
}

export default compose(connect(mapStateToProps)(LoginContainer))