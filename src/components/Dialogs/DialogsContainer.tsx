import { connect } from 'react-redux';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';

let mapStateToProps = (state: any) => {
   return {
      dialogsPage: state.dialogsPage,
      newMessageBody: state.dialogsPage.newMessageBody,
      ab: "Привет"
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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;