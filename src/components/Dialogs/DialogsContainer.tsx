import { connect } from 'react-redux';
import { compose } from 'redux';
import { sendMessageCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import { AppStateType } from '@/redux/redux-store';

let mapStateToProps = (state: AppStateType) => {
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