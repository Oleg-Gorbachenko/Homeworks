import {loadingReducer} from './loadingReducer'
import {applyMiddleware, combineReducers, createStore} from "redux";
import {themeReducer} from "../../h12/bll/themeReducer";
import {requestH13Reducer} from "../../h13/bll/requestH13Reducer";
import thunkMiddleware from "redux-thunk";

const reducers = combineReducers({
    loading: loadingReducer,
    theme: themeReducer,
    requestH13: requestH13Reducer,
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store // for dev
