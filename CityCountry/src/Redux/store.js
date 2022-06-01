import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { addCityReducer } from "./city/reducer";
import thunk from "redux-thunk";
import { addCountryReducer } from "./country/reducer";

const rootReducer = combineReducers({
    city: addCityReducer,
    country: addCountryReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));
