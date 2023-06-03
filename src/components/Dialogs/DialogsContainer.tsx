import { connect } from 'react-redux';
import { compose } from 'redux';
import { sendMessageCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';

let mapStateToProps = (state: any) => {
   return {
      dialogsPage: state.dialogsPage
   }
}

let mapDispatchToProps = (dispatch: any) => {
   return {
      sendMessage: (message: any) => {
         dispatch(sendMessageCreator(message))
      }
   }
}

export default compose(connect(mapStateToProps, mapDispatchToProps))(Dialogs)