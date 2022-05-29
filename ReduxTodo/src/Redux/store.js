import { combineReducers, legacy_createStore as createStore } from 'redux';
import { addTodoReducer } from './reducer';

const rootReducer = combineReducers({
    todoState: addTodoReducer
})

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// store.subscribe(() => {
//     console.log(store.getState());
// })