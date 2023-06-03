import { connect } from 'react-redux';
import { compose } from 'redux';
import HeaderTwo from './HeaderTwo';

const HeaderTwoContainer = (props: any) => {

   return (
      <>
         <HeaderTwo {...props} />
         {/* <Notification color="teal" withCloseButton={false} className={s.leftSide}>
            <pre>{JSON.stringify(props.isAuth, null, 2)}</pre>
         </Notification> */}
      </>
   )
}

let mapStateToProps = (state: any) => {
   return {
      isAuth: state.auth.isAuth,
      login: state.auth.login
   }
}


export default compose(connect(mapStateToProps))(HeaderTwoContainer)