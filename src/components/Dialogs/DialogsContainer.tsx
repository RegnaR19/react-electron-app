import { connect } from 'react-redux';
import { compose } from 'redux';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';

let mapStateToProps = (state: any) => {
   return {
      dialogsPage: state.dialogsPage,
      newMessageBody: state.dialogsPage.newMessageBody
   }
}

let mapDispatchToProps = (dispatch: any) => {
   return {
      updateNewMessageBody: (body: any) => {
         dispatch(updateNewMessageBodyCreator(body))
      },
      sendMessage: () => {
         dispatch(sendMessageCreator())
      }
   }
}

export default compose(
   connect(mapStateToProps, mapDispatchToProps)
)(Dialogs)