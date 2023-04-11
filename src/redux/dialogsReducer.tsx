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
   ]
}


const dialogsReducer = (state = initialState, action: any) => {

   switch (action.type) {
      case SEND_MESSAGE: {
         let body = action.message
         return {
            ...state,
            messages: [...state.messages, { id: 4, message: body }],
         }
      }
      default:
         return state
   }
}

export const sendMessageCreator = (message: any) => {
   return {
      type: SEND_MESSAGE, message
   }
}

export default dialogsReducer