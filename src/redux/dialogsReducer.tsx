const SEND_MESSAGE = 'SEND_MESSAGE'

type Dialog = {
   id: number
   name: string
}

type Message = {
   id: number
   message: string
}

let initialState = {
   dialogs: [
      { id: 1, name: "Валера" },
      { id: 2, name: "Димон" },
      { id: 3, name: "Руслан" }
   ] as Array<Dialog>,
   messages: [
      { id: 1, message: "Hi" },
      { id: 2, message: "How are you? Im in Almenevo today" },
      { id: 3, message: "Hello" },
   ] as Array<Message>
}

export type InitialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: any): InitialStateType => {

   switch (action.type) {
      case SEND_MESSAGE: {
         return {
            ...state,
            messages: [...state.messages, { id: 99, message: action.message }]
         }
      }
      default:
         return state
   }
}

type SendMessageCreatorType = {
   type: typeof SEND_MESSAGE
   message: string
}

export const sendMessageCreator = (message: string): SendMessageCreatorType => {
   return {
      type: SEND_MESSAGE, message
   }
}

export default dialogsReducer