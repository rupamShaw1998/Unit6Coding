import { ADD_TODO } from "./action";

const init = {
    todoState: []
}

export const addTodoReducer = (store = init, { type, payload }) => {
    switch(type)
    {
        case ADD_TODO:
            return { ...store, todoState: [ ...store.todoState, payload]}
        default:
            return store;
    }
}