import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from "redux";
import { profileReducer } from "./profile-reducer";
import { messagesReducer } from "./messages-reducer.ts";
import { subsReducer } from "./subs-reducer";
import { authReducer } from "./auth-reducer.ts";
import thunkMiddleware from "redux-thunk";
import { appReducer } from "./app-reducer.ts";
import { newsReducer } from "./news-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    subsPage: subsReducer,
    auth: authReducer,
    app: appReducer,
    news: newsReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunkMiddleware)
));

window.store = store;
export { store }