import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from "redux";
import { profileReducer } from "./profile-reducer.ts";
import { messagesReducer } from "./messages-reducer.ts";
import { subsReducer } from "./subs-reducer.ts";
import { authReducer } from "./auth-reducer.ts";
import thunkMiddleware from "redux-thunk";
import { appReducer } from "./app-reducer.ts";
import { newsReducer } from "./news-reducer.ts";

export type InferActionsTypes<T> = T extends { [key: string]: (...args: any[]) => infer U } ? U : never
// type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never
// export type InferActionsTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropertiesTypes<T>>
let rootReducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    subsPage: subsReducer,
    auth: authReducer,
    app: appReducer,
    news: newsReducer
});
type rootReducerType = typeof rootReducer
export type appStateType = ReturnType<rootReducerType>

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunkMiddleware)
));
//@ts-ignore
window.store = store;
export { store }