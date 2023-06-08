import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk"
import appReducer from "./appReducer";

let RootReducer = combineReducers({
   profilePage: profileReducer,
   dialogsPage: dialogsReducer,
   usersPage: usersReducer,
   auth: authReducer,
   app: appReducer
})

type RootReducerType = typeof RootReducer
export type AppStateType = ReturnType<RootReducerType>

let store = legacy_createStore(RootReducer, applyMiddleware(thunkMiddleware));

export default store