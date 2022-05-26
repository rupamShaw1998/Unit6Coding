import { combineReducers, legacy_createStore as createStore } from "redux";
import { addReducer } from "./Auth/reducer";

const rootReducer = combineReducers({
    user: addReducer
})

const store = createStore(rootReducer);

// store.subscribe(() => {
//     console.log(store.getState());
// })

export { store };


