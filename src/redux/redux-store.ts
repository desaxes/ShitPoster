import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from "redux";
import { profileReducer } from "./profile-reducer.ts";
import { messagesReducer } from "./messages-reducer.ts";
import { subsReducer } from "./subs-reducer.ts";
import { authReducer } from "./auth-reducer.ts";
import thunkMiddleware from "redux-thunk";
import { appReducer } from "./app-reducer.ts";
import { newsReducer } from "./news-reducer.ts";

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