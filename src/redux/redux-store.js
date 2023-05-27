import {combineReducers, legacy_createStore as createStore } from "redux";
import { profileReducer } from "./profile-reducer";
import { messagesReducer } from "./messages-reducer";
import { subsReducer } from "./subs-reducer";


let reducers = combineReducers({
    profilePage:profileReducer,
    messagesPage:messagesReducer,
    subsPage:subsReducer
});
let store = createStore(reducers);

window.store = store;
export {store}