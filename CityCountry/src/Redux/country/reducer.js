import { ADD_COUNTRY } from "./action"


const init = {
    country: []
}

export const addCountryReducer = (store = init, { type, payload }) => {
    switch(type)
    {
        case ADD_COUNTRY:
            return { ...store, country: payload}
        default:
            return store
    }
}