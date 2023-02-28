const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
   dialogs: [
      { id: 1, name: "Валера" },
      { id: 2, name: "Димон" },
      { id: 3, name: "Руслан" }
   ],
   messages: [
      { id: 1, message: "Hi" },
      { id: 2, message: "How are you? Im in Almenevo today" },
      { id: 3, message: "Hello" },
   ],
   newMessageBody: 'Ку'
}


const dialogsReducer = (state = initialState, action: any) => {


   let stateCopy = { ...state }

   switch (action.type) {

      case UPDATE_NEW_MESSAGE_BODY: {
         stateCopy.newMessageBody = action.body
         return stateCopy
      }
      case SEND_MESSAGE: {
         let body = state.newMessageBody
         if (body === '') {
         }
         else if (body != '') {
            stateCopy.messages = [...state.messages]
            stateCopy.messages.push({ id: 45, message: body })
            stateCopy.newMessageBody = ''
         }
         return stateCopy
      }
      default:
         return state
   }
}

export const sendMessageCreator = () => {
   return {
      type: SEND_MESSAGE
   }
}

export const updateNewMessageBodyCreator = (body: any) => {
   return {
      type: UPDATE_NEW_MESSAGE_BODY, body: body
   }
}

export default dialogsReducer