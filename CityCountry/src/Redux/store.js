import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { addCityReducer } from "./city/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    city: addCityReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));
