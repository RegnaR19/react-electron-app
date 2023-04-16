import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk"
import appReducer from "./appReducer";

let reducers = combineReducers({
   profilePage: profileReducer,
   dialogsPage: dialogsReducer,
   usersPage: usersReducer,
   auth: authReducer,
   app: appReducer
})

let store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware));

export default store