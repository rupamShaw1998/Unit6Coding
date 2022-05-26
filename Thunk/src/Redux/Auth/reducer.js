import { ADDUSER, SINGLEUSER } from "./action";

const init = {
    user: [],
    singleUser: {}
}

export const addReducer = (store = init, { type, payload }) => {
    switch(type)
    {
        case ADDUSER:
            return { ...store, user: [...store.user, payload] }
        case SINGLEUSER:
            return { ...store, singleUser: payload}
        default:
            return store
    }
}